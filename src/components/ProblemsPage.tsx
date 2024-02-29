import { ReactNode } from "react";
import { ProblemsList } from "./ProblemsList/ProblemsList";
import { EnumProblemStatus, TypeProblemCard } from "../helpers/CardHelper";

export const ProblemsPage = (): ReactNode => {
    const data: TypeProblemCard[] = [
        {
            status: EnumProblemStatus.closed,
            title: "Проблема No1",
            description: "Описание проблемы No1",
            imageSource: "/img/problem1.jpeg",
            date: new Date(),
        },
        {
            status: EnumProblemStatus.new,
            title: "Проблема No2",
            description: "Описание проблемы No2",
            imageSource: "/img/problem5.jpeg",
            date: new Date(),
        },
        {
            status: EnumProblemStatus.solved,
            title: "Проблема No3",
            description: "Описание проблемы No3",
            imageSource: "/img/problem3.jpeg",
            date: new Date(),
        },
        {
            status: EnumProblemStatus.solved,
            title: "Проблема No4",
            description: "Описание проблемы No4",
            imageSource: "/img/problem4.jpeg",
            date: new Date(),
        },
        {
            status: EnumProblemStatus.closed,
            title: "Проблема No5",
            description: "Описание проблемы No5",
            imageSource: "/img/problem6.jpeg",
            date: new Date(),
        },
        {
            status: EnumProblemStatus.new,
            title: "Проблема No6",
            description: "Описание проблемы No6",
            imageSource: "/img/decision1.jpeg",
            date: new Date(),
        },
    ];

    return (
        <>
            <ProblemsList data={data} title="Городские проблемы" />
        </>
    );
};
