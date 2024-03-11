import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { ProblemsList } from "./ProblemsList/ProblemsList";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { TypeUserFromServer } from "../api/users/UsersTypes";
import { TypeProblemFromServer } from "../api/problems/ProblemsTypes";
import { getProblems } from "../api/problems/Problems";

type TypeProps = {
    isAuthorized: boolean;
    user: TypeUserFromServer;
};

export const RequestsPage = ({ isAuthorized, user }: TypeProps): ReactNode => {
    const [problemsList, setProblemsList]: [TypeProblemFromServer[], Dispatch<SetStateAction<TypeProblemFromServer[]>>] = useState(
        [] as TypeProblemFromServer[]
    );

    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (!isAuthorized) {
            navigate("/");
            return;
        }
    }, [isAuthorized, user]);

    useEffect(() => {
        async function getProblemsList(): Promise<void> {
            const data: TypeProblemFromServer[] | Error = await getProblems([`user_id=${user.id}`]);

            if (data instanceof Error) return;

            setProblemsList(data as TypeProblemFromServer[]);
        }

        getProblemsList();
    }, [problemsList]);

    return <ProblemsList data={problemsList} title="Мои заявки" editable={true} />;
};
