import { TypeUserFromServer } from "../users/UsersTypes";

export type TypeLoginData = {
    login: string;
    password: string;
}

export type TypeLoginDataToComeFromServer = {
    access_token: string;
    token_type: string;
    expires_in: number;
}


export type TypeRegisterData = {
    second_name: string;
    first_name: string;
    patronymic: string;
    login: string;
    email: string;
    password: string;
}

export type TypeRegisterDataToComeFromServer = TypeUserFromServer;