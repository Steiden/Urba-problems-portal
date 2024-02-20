import { ReactNode } from "react";
import { MainAbout } from "../MainAbout/MainAbout";
import { MainProblems } from "../MainSolvedProblems/MainSolvedProblems";
import "./scss/Main.scss";

export const Main = (): ReactNode => {
    return (
        <main className="main">
            <div className="container main__container">
                <MainAbout/>
                <MainProblems/>
            </div>
        </main>
    )
}