import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import {} from "../helpers/CardHelper";
import { ProblemsList } from "./ProblemsList/ProblemsList";
import { TypeProblemCard, TypeUser } from "../api/types/DatabaseTypes";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { TypeDataToGet } from "../api/types/RequestTypes";
import { getData } from "../api/Data";
import { endpoints_basic } from "../api/config";

type TypeProps = {
    isAuthorized: boolean;
    user: TypeUser;
};

export const RequestsPage = ({ isAuthorized, user }: TypeProps): ReactNode => {
    const [problemsList, setProblemsList]: [TypeProblemCard[], Dispatch<SetStateAction<TypeProblemCard[]>>] = useState(
        []
    );

    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (!isAuthorized) {
            navigate("/");
            return;
        }

        async function getProblems(): Promise<void> {
            const data: TypeDataToGet = await getData(`${endpoints_basic.problems}?user_id=${user.id}`);

            if (data instanceof Error) return;

            setProblemsList(data as TypeProblemCard[]);
        }

        getProblems();
    }, []);

    return <ProblemsList data={problemsList} title="Мои заявки" editable={true} />;
};
