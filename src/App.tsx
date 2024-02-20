import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import "./App.scss";
import { AuthForm } from "./components/AuthForm/AuthForm";

function App() {

    const [authFormIsOpen, setAuthFormIsOpen] = useState(false);

    useEffect(() => {
        const title: HTMLHeadElement = document.querySelector("title") as HTMLHeadElement;
        title.textContent = "Городские проблемы";

        const head: HTMLElement = document.querySelector("head") as HTMLElement;
        const link: HTMLLinkElement = document.createElement("link");
        link.rel = "icon";
        link.type = "image/svg+xml";
        link.href = "../img/1476434895129645719.jpg";

        head.appendChild(link);
    }, [])

    return (
        <>
            <Header authForm={{ authFormIsOpen, setAuthFormIsOpen }} />
            <Main />
            <AuthForm authForm={{ authFormIsOpen, setAuthFormIsOpen }} />
        </>
    );
}

export default App;
