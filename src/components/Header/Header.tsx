import { ReactNode, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { LoginForm } from "../AuthForm/LoginForm";
import { RegisterForm } from "../AuthForm/RegisterForm";
import "./scss/Header.scss";
import { Link } from "react-router-dom";

export const Header = (): ReactNode => {
    const [loginFormIsOpen, setLoginFormIsOpen] = useState(false);
    const [registerFormIsOpen, setRegisterFormIsOpen] = useState(false);
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header__container">
                <Link to="/" className="header__logo">
                    Городской портал
                </Link>
                <Navbar dropdown={{ dropdownIsOpen, setDropdownIsOpen }}>
                    <li className="header__item">
                        <button className="header__button" onClick={() => setRegisterFormIsOpen(true)}>
                            Зарегистрироваться
                        </button>
                    </li>
                    <li className="header__item">
                        <button className="header__button" onClick={() => setLoginFormIsOpen(true)}>
                            Войти
                        </button>
                    </li>
                </Navbar>
            </div>
            {dropdownIsOpen && <div className="dropdown__overlay" onClick={() => setDropdownIsOpen(false)}></div>}

            <LoginForm loginForm={{ loginFormIsOpen, setLoginFormIsOpen }} />
            <RegisterForm registerForm={{ registerFormIsOpen, setRegisterFormIsOpen }} />
        </header>
    );
};
