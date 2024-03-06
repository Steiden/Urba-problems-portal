import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { ProblemsList } from "./ProblemsList/ProblemsList";
import { TypeProblemCard } from "../api/types/DatabaseTypes";
import { getData } from "../api/Data";
import { endpoints_basic } from "../api/config";
import { TypeDataToGet } from "../api/types/RequestTypes";
import { NavigateFunction, useNavigate } from "react-router-dom";

type TypeProps = {
    isAuthorized: boolean;
}

export const ProblemsPage = ({ isAuthorized }: TypeProps): ReactNode => {
    const [problemsList, setProblemsList]: [TypeProblemCard[], Dispatch<SetStateAction<TypeProblemCard[]>>] = useState([]);

    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {

        if(!isAuthorized) {
            navigate('/');
            return;
        }

        async function getProblems(): Promise<void> {
            const data: TypeDataToGet = await getData(endpoints_basic.problems);

            if(data instanceof Error) return;

            setProblemsList(data as TypeProblemCard[]);
        }

        getProblems();
    }, []);

    return (
        <>
            <ProblemsList data={problemsList} title="Городские проблемы" editable={false} />
        </>
    );
};
