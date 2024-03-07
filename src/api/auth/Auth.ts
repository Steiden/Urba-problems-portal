import { endpoints_auth } from "../config";
import { TypeUserFromServer } from "../users/UsersTypes";

export const getMe = async (jwt: string): Promise<TypeUserFromServer | Error> => {
    const response: Response = await fetch(endpoints_auth.me, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${jwt}`,
        }
    });

    if (!response.ok) return new Error(response.statusText);

    const result: Promise<TypeUserFromServer> = response.json();
    return result;
}