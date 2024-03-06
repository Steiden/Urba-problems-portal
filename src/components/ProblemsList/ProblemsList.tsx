import { ReactNode } from "react";
import { ProblemCard } from "../ProblemCard/ProblemCard";
import { TypeProblemCard } from "../../api/types/DatabaseTypes";
import "./scss/ProblemsList.scss";

type TypeProps = {
    data: TypeProblemCard[];
    title: string;
    editable: boolean;
}

export const ProblemsList = ({ data, title, editable }: TypeProps): ReactNode => {    
    return (
        <section className="main__problems">
            <h2 className="main__title-2">{title}</h2>
            <div className="main__cards-container">
            {data.map((problemCard) => (
                <ProblemCard
                    key={problemCard.id}
                    problemCard={problemCard}
                    editable={editable}
                />
            ))}
            </div>
        </section>
    );
};
