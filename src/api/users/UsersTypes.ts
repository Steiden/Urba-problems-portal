import { TypeRole } from "../roles/RolesTypes";

export type TypeUser = {
    id: number;
    second_name: string;
    first_name: string;
    patronymic: string;
    login: string;
    email: string;
    password: string;
    role_id: number;
};

export type TypeUserFromServer = {
    id: number;
    second_name: string;
    first_name: string;
    patronymic: string;
    login: string;
    email: string;
    password: string;
    role: TypeRole;
};

export type TypeUserToComeFromServer = {
    data: TypeUserFromServer;
}

export type TypeUserToReturn = TypeUserFromServer | Error;
