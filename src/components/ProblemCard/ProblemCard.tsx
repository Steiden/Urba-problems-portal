import { Dispatch, MouseEventHandler, ReactNode, SetStateAction } from "react";
import { ProblemStatus } from "../../helpers/CardHelper";
import { TypeProblemFromServer } from "../../api/problems/ProblemsTypes";
import { deleteProblem } from "../../api/problems/Problems";
import { getJWT } from "../../helpers/jwtHelper";
import "./scss/ProblemCard.scss";

type TypeProps = {
    problemCard: TypeProblemFromServer;
    editable: boolean;
    problemState: {
        problemsList: TypeProblemFromServer[];
        setProblemsList: Dispatch<SetStateAction<TypeProblemFromServer[]>>;
    }
};

export const ProblemCard = ({ problemCard, editable, problemState }: TypeProps): ReactNode => {    
    const handleDeleteButton: MouseEventHandler<HTMLButtonElement> = async (): Promise<void> => {
        const message: string | Error = await deleteProblem(problemCard.id, getJWT());

        if (message instanceof Error) return;

        problemState.setProblemsList(problemState.problemsList.filter((problem) => problem.id !== problemCard.id));
    };

    return (
        <article className="main__card">
            <span className={`main__card-label ${`main__card-label_${ProblemStatus[problemCard.status.name]}`}`}>{problemCard.status.name}</span>
            <div className="main__card-img-container">
                <img className="main__card-img" src={problemCard.image} alt="problem" width="400" height="350" loading="lazy" />
                {editable && (
                    <button className="main__card-edit-button" onClick={handleDeleteButton}>
                        <img className="main__card-edit" src="/img/delete.svg" alt="edit" width="30" height="30" loading="lazy" />
                    </button>
                )}
            </div>
            <div className="main__card-content">
                <h3 className="main__card-title">{problemCard.title}</h3>
                <p className="main__card-text">{problemCard.description}</p>
                <p className="main__card-text">
                    Дата: <time>{(new Date(problemCard.created_at.toString().split("T")[0]).toLocaleDateString())}</time>
                </p>
            </div>
        </article>
    );
};
