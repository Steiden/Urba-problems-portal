import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { ProblemsList } from "./ProblemsList/ProblemsList";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { getJWT } from "../helpers/jwtHelper";
import { TypeProblemFromServer } from "../api/problems/ProblemsTypes";
import { getProblems } from "../api/problems/Problems";

type TypeProps = {
    isAuthorized: boolean;
};

export const ProblemsPage = ({ isAuthorized }: TypeProps): ReactNode => {
    const [problemsList, setProblemsList]: [TypeProblemFromServer[], Dispatch<SetStateAction<TypeProblemFromServer[]>>] = useState(
        [] as TypeProblemFromServer[]
    );

    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (!getJWT() && !isAuthorized) {
            navigate("/");
            return;
        }
    }, [isAuthorized]);

    useEffect(() => {
        async function getProblemsList(): Promise<void> {
            const data: TypeProblemFromServer[] | Error = await getProblems();

            if (data instanceof Error) return;

            setProblemsList(data as TypeProblemFromServer[]);
        }

        getProblemsList();
    }, []);

    return (
        <>
            <ProblemsList data={problemsList} title="Городские проблемы" editable={false} />
        </>
    );
};
