import { ReactNode, useEffect, useState } from "react";
import { MainAbout } from "./MainAbout/MainAbout";
import { ProblemsList } from "./ProblemsList/ProblemsList";
import { TypeProblemCard } from "../api/types/DatabaseTypes";
import { endpoints_basic } from "../api/config";
import { getData } from "../api/Data";

export const MainPage = (): ReactNode => {
    const [problemsCards, setProblemsCards] = useState([]);

    useEffect(() => {
        async function getProblems(): Promise<void> {
            const data: TypeProblemCard[] = await getData(`${endpoints_basic.problems}?status_id=2`) as TypeProblemCard[];

            if(data instanceof Error) return;

            setProblemsCards(data);
        }

        getProblems();
    }, []);

    return (
        <>
            <MainAbout />
            <ProblemsList data={problemsCards} title="Последние решенные проблемы" editable={false} />
        </>
    );
};
