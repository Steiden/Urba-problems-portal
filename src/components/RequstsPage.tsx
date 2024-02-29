import { ReactNode } from "react";
import { EnumProblemStatus, TypeProblemCard } from "../helpers/CardHelper";
import { ProblemsList } from "./ProblemsList/ProblemsList";

export const RequestsPage = (): ReactNode => {

    const data: TypeProblemCard[] = [
        {
            status: EnumProblemStatus.new,
            title: "Заявка No1",
            description: "Описание заявки No1",
            imageSource: "/img/problem1.jpeg",
            date: new Date(),
        },
        {
            status: EnumProblemStatus.solved,
            title: "Заявка No2",
            description: "Описание заявки No2",
            imageSource: "/img/problem5.jpeg",
            date: new Date(),
        }
    ];

    return (
        <ProblemsList data={data} title="Мои заявки" />
    ) 
}