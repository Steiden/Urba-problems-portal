import { ReactNode, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import "./scss/Header.scss";

type TypeProps = {
    loginForm: {
        loginFormIsOpen: boolean;
        setLoginFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    };
    registerForm: {
        registerFormIsOpen: boolean;
        setRegisterFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    };
};

export const Header = ({ loginForm, registerForm }: TypeProps): ReactNode => {
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header__container">
                <a href="#" className="header__logo">
                    Городской портал
                </a>
                <Navbar
                    loginForm={loginForm}
                    registerForm={registerForm}
                    dropdown={{ dropdownIsOpen, setDropdownIsOpen }}
                />
            </div>
            {dropdownIsOpen && <div className="dropdown__overlay" onClick={() => setDropdownIsOpen(false)}></div>}
        </header>
    );
};
