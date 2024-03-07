import { TypeUser } from "../users/UsersTypes";

export type TypeRole = {
    id: number;
    name: string;
}

// export type TypeUser = {
//     id: number;
//     second_name: string;
//     first_name: string;
//     patronymic: string;
//     login: string;
//     email: string;
//     password: string;
//     role: TypeRole;
// }

export type TypeStatus = {
    id: number;
    name: string;
}

export type TypeProblemCard = {
    id: number;
    title: string;
    description: string;
    image: string;
    status: TypeStatus;
    user: TypeUser;
    created_at: Date;
    updated_at: Date;
}