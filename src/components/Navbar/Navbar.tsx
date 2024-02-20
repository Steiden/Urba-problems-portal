import { ReactNode } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import "./scss/Navbar.scss";

type TypeProps = {
    authForm: {
        authFormIsOpen: boolean;
        setAuthFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    };
    dropdown: {
        dropdownIsOpen: boolean;
        setDropdownIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    };
};

export const Navbar = ({ authForm, dropdown }: TypeProps): ReactNode => {
    return (
        <nav className="header__nav">
            <ul className="header__list">
                <li className="header__item">
                    <a href="#" className="header__link">
                        Главная
                    </a>
                </li>
                <li className="header__item">
                    <button
                        className="header__button"
                        onClick={() => authForm.setAuthFormIsOpen(true)}>
                        Зарегистрироваться
                    </button>
                </li>
                <li className="header__item">
                    <button
                        className="header__button"
                        onClick={() => authForm.setAuthFormIsOpen(true)}>
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
