import { Dispatch, ReactNode, SetStateAction, useEffect } from "react"
import { Profile } from "./Profile/Profile"
import { TypeUserFromServer } from "../api/users/UsersTypes"
import { NavigateFunction, useNavigate } from "react-router-dom";
import { getJWT } from "../helpers/jwtHelper";

type TypeProps = {
    userData: {
        user: TypeUserFromServer;
        setUser: Dispatch<SetStateAction<TypeUserFromServer>>;
    };
    isAuthorized: boolean
}

export const ProfilePage = ({ userData, isAuthorized }: TypeProps): ReactNode => {

    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (!getJWT() && !isAuthorized) {
            navigate("/");
        }
    }, [isAuthorized]);

    return <Profile userData={userData} />
}