import { ReactNode } from "react";
import { TypeProblemCard } from "../../helpers/CardHelper";
import { ProblemCard } from "../ProblemCard/ProblemCard";
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
            {data.map((item) => (
                <ProblemCard
                    key={item.title}
                    status={item.status}
                    title={item.title}
                    description={item.description}
                    imageSource={item.imageSource}
                    date={item.date}
                    editable={editable}
                />
            ))}
            </div>
        </section>
    );
};
