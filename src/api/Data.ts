import { TypeDataToGet, TypeDataToCome, TypeDataToPost, TypeDataToComePost } from "./types/RequestTypes";

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
): Promise<TypeDataToComePost> => {
    const response: Response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) return new Error(response.statusText);

    const result: Promise<TypeDataToComePost> = response.json();
    return result;
};
