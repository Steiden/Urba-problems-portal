import { ReactNode } from "react";
import "./scss/Main.scss";

type TypeProps = {
    children:ReactNode;
}

export const Main = ({ children }: TypeProps): ReactNode => {
    return (
        <main className="main">
            <div className="container main__container">
                {children}
            </div>
        </main>
    )
}