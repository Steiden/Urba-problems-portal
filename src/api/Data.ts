import { TypeDataToGet, TypeDataToCome, TypeDataToPost, TypeDataToPut, TypeDataFromPost, TypeDataFromPut } from "./types/RequestTypes";

export const getData = async (url: string): Promise<TypeDataToGet> => {
    const response: Response = await fetch(url);

    if (!response.ok) return new Error(response.statusText);

    const result: Promise<TypeDataToCome> = response.json();
    return (await result).data;
};

export const postData = async (
    url: string,
    data: TypeDataToPost = { login: "", password: "" },
    jwt: string = ""
): Promise<TypeDataFromPost> => {
    const response: Response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) return new Error(response.statusText);

    const result: Promise<TypeDataFromPost> = response.json();
    return result;
};

export const putData = async (
    url: string,
    data: TypeDataToPut,
    jwt: string
): Promise<TypeDataFromPut> => {
    const response: Response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) return new Error(response.statusText);

    const result: Promise<TypeDataFromPut> = response.json();
    return result;
};