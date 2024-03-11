import { ReactNode, useEffect } from "react";
import { RequestForm } from "./RequestForm/RequestForm";
import { getJWT } from "../helpers/jwtHelper";
import { TypeUserFromServer } from "../api/users/UsersTypes";
import { useNavigate } from "react-router-dom";

type TypeProps = {
    isAuthorized: boolean;
    user: TypeUserFromServer;
}

export const NewRequestPage = ({ isAuthorized, user }: TypeProps): ReactNode => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!getJWT() && !isAuthorized) navigate("/");
    }, [isAuthorized]);

    return <RequestForm user={user}/>
}