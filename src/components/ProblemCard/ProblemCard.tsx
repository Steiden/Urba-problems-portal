import { ReactNode } from "react";
import { EnumProblemStatus } from "../../helpers/CardHelper";
import { ProblemStatus } from "../../helpers/CardHelper";
import "./scss/ProblemCard.scss";

type TypeProps = {
    status: EnumProblemStatus;
    title: string;
    description: string;
    imageSource: string;
    date: Date;
};

export const ProblemCard = ({ status, title, description, imageSource, date }: TypeProps): ReactNode => {
    return (
        <article className="main__card">
            <span className={`main__card-label main__card-label_${ProblemStatus[status]}`}>{status}</span>
            <img className="main__card-img" src={imageSource} alt="problem" width="400" height="350" loading="lazy" />
            <div className="main__card-content">
                <h3 className="main__card-title">{title}</h3>
                <p className="main__card-text">{description}</p>
                <p className="main__card-text">
                    Дата: <time>{date.toLocaleDateString()}</time>
                </p>
            </div>
        </article>
    );
};
