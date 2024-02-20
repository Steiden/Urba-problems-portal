import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { LoginForm } from "./components/AuthForm/LoginForm";
import { RegisterForm } from "./components/AuthForm/RegisterForm";
import "./App.scss";

function App() {
    const [loginFormIsOpen, setLoginFormIsOpen] = useState(false);
    const [registerFormIsOpen, setRegisterFormIsOpen] = useState(false);

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

    return (
        <>
            <Header
                loginForm={{ loginFormIsOpen, setLoginFormIsOpen }}
                registerForm={{ registerFormIsOpen, setRegisterFormIsOpen }}
            />
            <Main />

            <LoginForm loginForm={{ loginFormIsOpen, setLoginFormIsOpen }} />
            <RegisterForm registerForm={{ registerFormIsOpen, setRegisterFormIsOpen }} />
        </>
    );
}

export default App;
