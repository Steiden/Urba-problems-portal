import { Dispatch, ReactNode, SetStateAction } from "react"
import { Profile } from "./Profile/Profile"
import { TypeUser } from "../api/types/DatabaseTypes"

type TypeProps = {
    userData: {
        user: TypeUser;
        setUser: Dispatch<SetStateAction<TypeUser>>;
    }
}

export const ProfilePage = ({ userData }: TypeProps): ReactNode => {
    return <Profile userData={userData} />
}