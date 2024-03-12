import { endpoints_basic, endpoints_current } from "../config";
import { TypeProblemFromServer, TypeProblemToPost, TypeProblemsToComeFromServer } from "./ProblemsTypes";

// * Получение всех проблем
export const getProblems = async (filter: string[] = []): Promise<TypeProblemFromServer[] | Error> => {
    const response: Response = await fetch(`${endpoints_basic.problems}?${filter.join(";")}`);

    if (!response.ok) return new Error(response.statusText);

    const problems: Promise<TypeProblemsToComeFromServer> = response.json();
    return (await problems).data;
};
// * ______________________________________________________________________________________________________________


// * Создание проблемы
export const addProblem = async (data: TypeProblemToPost, jwt: string): Promise<TypeProblemFromServer | Error> => {
    const response: Response = await fetch(endpoints_basic.problems, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${jwt}`,
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) return new Error(response.statusText);

    const problem: Promise<TypeProblemFromServer> = response.json();
    return problem;
};
// * ______________________________________________________________________________________________________________


// * Удаление проблемы
export const deleteProblem = async (id: number, jwt: string): Promise<string | Error> => {
    const response: Response = await fetch(endpoints_current.problem(id), {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${jwt}`,
        }
    });

    if (!response.ok) return new Error(response.statusText);

    const message: Promise<string> = response.json() as Promise<string>;
    return message;
};
// * ______________________________________________________________________________________________________________
