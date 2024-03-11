import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { MainAbout } from "./MainAbout/MainAbout";
import { ProblemsList } from "./ProblemsList/ProblemsList";
import { TypeProblemFromServer } from "../api/problems/ProblemsTypes";
import { getProblems } from "../api/problems/Problems";

type TypeProps = {
    loginForm: {
        isOpen: boolean;
        setIsOpen: Dispatch<SetStateAction<boolean>>;
    };
    registerForm: {
        isOpen: boolean;
        setIsOpen: Dispatch<SetStateAction<boolean>>;
    };
    isAuthorized: boolean
}

export const MainPage = ({ loginForm, registerForm, isAuthorized }: TypeProps): ReactNode => {
    const [problemsCards, setProblemsCards]: [TypeProblemFromServer[], Dispatch<SetStateAction<TypeProblemFromServer[]>>] =
        useState([] as TypeProblemFromServer[]);

    useEffect(() => {
        async function getProblemsList(): Promise<void> {
            const data: TypeProblemFromServer[] | Error = await getProblems([`status_id=2`]);

            if (data instanceof Error) return;

            setProblemsCards(data);
        }

        getProblemsList();
    }, []);

    return (
        <>
            <MainAbout loginForm={loginForm} registerForm={registerForm} isAuthorized={isAuthorized} />
            <ProblemsList data={problemsCards} title="Последние решенные проблемы" editable={false} />
        </>
    );
};
