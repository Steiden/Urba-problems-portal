import { ReactNode, useEffect } from "react";
import { MainPage } from "./components/MainPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProblemsPage } from "./components/ProblemsPage";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import "./App.scss";

export const App = (): ReactNode => {
    useEffect(() => {
        const title: HTMLHeadElement = document.querySelector("title") as HTMLHeadElement;
        title.textContent = "Городские проблемы";

        const head: HTMLElement = document.querySelector("head") as HTMLElement;
        const link: HTMLLinkElement = document.createElement("link");
        link.rel = "icon";
        link.type = "image/svg+xml";
        link.href = "../img/1476434895129645719.jpg";

        head.appendChild(link);
    }, []);

    const PageNotFound = (): ReactNode => <h1>Страница не найдена</h1>
    return (
        <Router>
            <Header />
            <Main>
                <Routes>
                    <Route path="/" Component={MainPage} />
                    <Route path="/problems" Component={ProblemsPage} />
                    <Route path="*" Component={PageNotFound}/>
                </Routes>
            </Main>
        </Router>
    );
};

export default App;
