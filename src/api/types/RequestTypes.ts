import { TypeProblemCard, TypeRole, TypeStatus, TypeUser } from "./DatabaseTypes";

export type TypeDataToGet =
    | TypeRole[]
    | TypeUser[]
    | TypeStatus[]
    | TypeProblemCard[]
    | TypeRole
    | TypeUser
    | TypeStatus
    | TypeProblemCard
    | Error;

export type TypeDataToCome = {
    data: TypeDataToGet;
};

export type TypeDataToPost = {
    login: string;
    password: string;
}

export type TypeAuthData = {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export type TypeDataToComePost = TypeAuthData | TypeUser | Error;