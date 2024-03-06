export const getJWT = (): string => {
    return localStorage.getItem("jwt") || "";
}

export const putJWT = (jwt: string): void => {
    localStorage.setItem("jwt", jwt);
}

export const removeJWT = (): void => {
    localStorage.removeItem("jwt");
}