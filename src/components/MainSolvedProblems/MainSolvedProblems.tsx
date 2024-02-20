import { ReactNode } from "react";
import { EnumProblemStatus } from "../../helpers/CardHelper";
import { ProblemCard } from "../ProblemCard/ProblemCard";
import "./scss/MainSolvedProblems.scss";

export const MainProblems = (): ReactNode => {
    return (
        <section className="main__problems">
            <h2 className="main__title-2">Последние решенные проблемы</h2>
            <div className="main__cards-container">
                <ProblemCard
                    status={EnumProblemStatus.new}
                    title="Сломанная качель"
                    description="На дворе улицы Кировоградской дома номер 10 сломана детская качель. Просьба немедленно
                    починить в срочном порядке! Иначе буду писать жаловаться."
                    imageSource="./img/problem1.jpeg"
                    date={new Date()}
                />

                <ProblemCard
                    status={EnumProblemStatus.solved}
                    title="Покалеченая беседка"
                    description="В закаулках улицы Новогородская дома 21 пострадала беседка. Просьба немедленно починить!"
                    imageSource="./img/problem3.jpeg"
                    date={new Date()}
                />

                <ProblemCard
                    status={EnumProblemStatus.closed}
                    title="Поломанный коммутатор"
                    description="Поломанный коммутатор улицы Кировоградская дома 5. Просьба устранить неполадки в срочном порядке!"
                    imageSource="./img/problem6.jpeg"
                    date={new Date()}
                />
            </div>
        </section>
    );
};
