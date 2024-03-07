import { endpoints_current } from "../config";
import { TypeUser, TypeUserToComeFromServer, TypeUserToReturn } from "./UsersTypes";

export const getUser = async (userId: number, jwt: string): Promise<TypeUserToReturn> => {
    const response: Response = await fetch(endpoints_current.user(userId), {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    });

    if (!response.ok) return new Error(response.statusText);

    const result: Promise<TypeUserToComeFromServer> = response.json();
    return (await result).data;
}

export const updateUser = async (userId: number, data: TypeUser, jwt: string): Promise<TypeUserToReturn> => {
    const response: Response = await fetch(endpoints_current.user(userId), {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) return new Error(response.statusText);

    const result: Promise<TypeUserToComeFromServer> = response.json();
    return (await result).data;
};