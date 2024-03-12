import { Dispatch, ReactNode, SetStateAction } from "react";
import { ProblemCard } from "../ProblemCard/ProblemCard";
import { TypeProblemFromServer } from "../../api/problems/ProblemsTypes";
import "./scss/ProblemsList.scss";

type TypeProps = {
    problemState: {
        problemsList: TypeProblemFromServer[];
        setProblemsList: Dispatch<SetStateAction<TypeProblemFromServer[]>>;
    }
    title: string;
    editable: boolean;
}

export const ProblemsList = ({ problemState, title, editable }: TypeProps): ReactNode => {    
    return (
        <section className="main__problems">
            <h2 className="main__title-2">{title}</h2>
            <div className="main__cards-container">
            {problemState.problemsList.map((problem) => (
                <ProblemCard
                    key={problem.id}
                    problemCard={problem}
                    editable={editable}
                    problemState={problemState}
                />
            ))}
            </div>
        </section>
    );
};
