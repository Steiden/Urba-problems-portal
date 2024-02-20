import { ReactNode } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import "./scss/Navbar.scss";

type TypeProps = {
    loginForm: {
        loginFormIsOpen: boolean;
        setLoginFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    };
    registerForm: {
        registerFormIsOpen: boolean;
        setRegisterFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    };
    dropdown: {
        dropdownIsOpen: boolean;
        setDropdownIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    };
};

export const Navbar = ({ loginForm, registerForm, dropdown }: TypeProps): ReactNode => {
    return (
        <nav className="header__nav">
            <ul className="header__list">
                <li className="header__item">
                    <a href="#" className="header__link">
                        Главная
                    </a>
                </li>
                <li className="header__item">
                    <button className="header__button" onClick={() => registerForm.setRegisterFormIsOpen(true)}>
                        Зарегистрироваться
                    </button>
                </li>
                <li className="header__item">
                    <button className="header__button" onClick={() => loginForm.setLoginFormIsOpen(true)}>
                        Войти
                    </button>
                </li>
                <li className="header__item">
                    <button
                        className="header__button header__button-dropdown"
                        onClick={() => dropdown.setDropdownIsOpen(!dropdown.dropdownIsOpen)}>
                        Иванов И.И.
                    </button>
                    <Dropdown isOpen={dropdown.dropdownIsOpen} />
                </li>
            </ul>
        </nav>
    );
};
