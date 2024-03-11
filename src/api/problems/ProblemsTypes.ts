import { TypeStatus } from "../statuses/StatusesTypes";
import { TypeUserFromServer } from "../users/UsersTypes";

export type TypeProblem = {
    id: number;
    title: string;
    description: string;
    image: string;
    user_id: number;
    status_id: number;
    created_at: Date;
    updated_at: Date;
}

export type TypeProblemFromServer = {
    id: number;
    title: string;
    description: string;
    image: string;
    user: TypeUserFromServer;
    status: TypeStatus;
    created_at: Date;
    updated_at: Date;
}

export type TypeProblemsToComeFromServer = {
    data: TypeProblemFromServer[];
}

export type TypeProblemToPost = {
    title: string;
    description: string;
    image: string;
    user_id: number;
}