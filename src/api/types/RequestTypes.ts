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

export type TypeLoginData = {
    login: string;
    password: string;
}

export type TypeDataToPost = TypeLoginData | TypeUser | TypeProblemCard;

export type TypeDataToPut = TypeUser;

export type TypeAuthData = {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export type TypeDataFromPost = TypeAuthData | TypeUser | Error;
export type TypeDataFromPut = TypeUser | Error;