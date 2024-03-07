import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { MainAbout } from "./MainAbout/MainAbout";
import { ProblemsList } from "./ProblemsList/ProblemsList";
import { TypeProblemCard } from "../api/types/DatabaseTypes";
import { endpoints_basic } from "../api/config";
import { getData } from "../api/Data";

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
    const [problemsCards, setProblemsCards]: [TypeProblemCard[], Dispatch<SetStateAction<TypeProblemCard[]>>] =
        useState([]);

    useEffect(() => {
        async function getProblems(): Promise<void> {
            const data: TypeProblemCard[] = (await getData(
                `${endpoints_basic.problems}?status_id=2`
            )) as TypeProblemCard[];

            if (data instanceof Error) return;

            setProblemsCards(data);
        }

        getProblems();
    }, []);

    return (
        <>
            <MainAbout loginForm={loginForm} registerForm={registerForm} isAuthorized={isAuthorized} />
            <ProblemsList data={problemsCards} title="Последние решенные проблемы" editable={false} />
        </>
    );
};
