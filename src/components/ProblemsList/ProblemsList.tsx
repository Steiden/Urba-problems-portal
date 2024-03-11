import { ReactNode } from "react";
import { ProblemCard } from "../ProblemCard/ProblemCard";
import { TypeProblemFromServer } from "../../api/problems/ProblemsTypes";
import "./scss/ProblemsList.scss";

type TypeProps = {
    data: TypeProblemFromServer[];
    title: string;
    editable: boolean;
}

export const ProblemsList = ({ data, title, editable }: TypeProps): ReactNode => {    
    return (
        <section className="main__problems">
            <h2 className="main__title-2">{title}</h2>
            <div className="main__cards-container">
            {data.map((problem) => (
                <ProblemCard
                    key={problem.id}
                    problemCard={problem}
                    editable={editable}
                />
            ))}
            </div>
        </section>
    );
};
