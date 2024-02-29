import { ReactNode } from "react";
import { MainAbout } from "./MainAbout/MainAbout";
import { ProblemsList } from "./ProblemsList/ProblemsList";
import { EnumProblemStatus, TypeProblemCard } from "../helpers/CardHelper";

export const MainPage = (): ReactNode => {
    // ! Формальное получение данных с сервера
    const data: TypeProblemCard[] = [
        {
            status: EnumProblemStatus.solved,
            title: "Проблема No1",
            description: "Описание проблемы No1",
            imageSource: "/img/problem1.jpeg",
            date: new Date(),
        },
        {
            status: EnumProblemStatus.solved,
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
            status: EnumProblemStatus.solved,
            title: "Проблема No5",
            description: "Описание проблемы No5",
            imageSource: "/img/problem6.jpeg",
            date: new Date(),
        },
        {
            status: EnumProblemStatus.solved,
            title: "Проблема No6",
            description: "Описание проблемы No6",
            imageSource: "/img/decision1.jpeg",
            date: new Date(),
        },
    ];

    return (
        <>
            <MainAbout />
            <ProblemsList data={data} title="Последние решенные проблемы" />
        </>
    );
};
