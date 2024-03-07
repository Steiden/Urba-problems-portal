import { Dispatch, ReactNode, SetStateAction } from "react"
import { Profile } from "./Profile/Profile"
import { TypeUserFromServer } from "../api/users/UsersTypes"

type TypeProps = {
    userData: {
        user: TypeUserFromServer;
        setUser: Dispatch<SetStateAction<TypeUserFromServer>>;
    }
}

export const ProfilePage = ({ userData }: TypeProps): ReactNode => {
    return <Profile userData={userData} />
}