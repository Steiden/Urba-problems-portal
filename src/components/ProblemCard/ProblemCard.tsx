import { ReactNode } from "react";
import { TypeProblemCard } from "../../api/types/DatabaseTypes";
import { ProblemStatus } from "../../helpers/CardHelper";
import "./scss/ProblemCard.scss";

type TypeProps = {
    problemCard: TypeProblemCard;
    editable: boolean;
};

export const ProblemCard = ({
    problemCard,
    editable,
}: TypeProps): ReactNode => {
    return (
        <article className="main__card">
            <span
                className={`main__card-label ${`main__card-label_${ProblemStatus[problemCard.status.name]}`}`}
            >
                {problemCard.status.name}
            </span>
            <div className="main__card-img-container">
                <img
                    className="main__card-img"
                    src={problemCard.image}
                    alt="problem"
                    width="400"
                    height="350"
                    loading="lazy"
                />
                {editable && (
                    <button
                        className="main__card-edit-button"
                        onClick={() => {}}
                    >
                        <img
                            className="main__card-edit"
                            src="/img/delete.svg"
                            alt="edit"
                            width="30"
                            height="30"
                            loading="lazy"
                        />
                    </button>
                )}
            </div>
            <div className="main__card-content">
                <h3 className="main__card-title">{problemCard.title}</h3>
                <p className="main__card-text">{problemCard.description}</p>
                <p className="main__card-text">
                    Дата:{" "}
                    <time>
                        {Intl.DateTimeFormat("ru").format(
                            new Date(problemCard.created_at)
                        )}
                    </time>
                </p>
            </div>
        </article>
    );
};
