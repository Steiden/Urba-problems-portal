import { Dispatch, ReactNode, SetStateAction } from "react"
import { Profile } from "./Profile/Profile"
import { TypeUser } from "../api/types/DatabaseTypes"

type TypeProps = {
    user: {
        user: TypeUser;
        setUser: Dispatch<SetStateAction<TypeUser>>;
    }
}

export const ProfilePage = ({ user }: TypeProps): ReactNode => {
    return <Profile user={user} />
}