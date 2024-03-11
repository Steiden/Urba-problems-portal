import { endpoints_auth, endpoints_basic } from "../config";
import { TypeUserFromServer, TypeUserToComeFromServer } from "../users/UsersTypes";
import { TypeLoginData, TypeLoginDataToComeFromServer, TypeRegisterData, TypeRegisterDataToComeFromServer } from "./AuthTypes";


// * Авторизация пользователя
export const signIn = async (data: TypeLoginData): Promise<TypeLoginDataToComeFromServer | Error> => {
    const response: Response = await fetch(endpoints_auth.login, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if(!response.ok) return new Error(response.statusText);

    const loginData: Promise<TypeLoginDataToComeFromServer> = response.json();
    return loginData;
};
// * ______________________________________________________________________________________________________________



// * Регистрация пользователя
export const signUp = async (data: TypeRegisterData): Promise<TypeRegisterDataToComeFromServer | Error> => {
    const response: Response = await fetch(endpoints_basic.users, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if(!response.ok) return new Error(response.statusText);

    const registerData: Promise<TypeUserToComeFromServer> = response.json();
    return (await registerData).data;
};
// * ______________________________________________________________________________________________________________



// * Получение информации о пользователе
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
// * ______________________________________________________________________________________________________________