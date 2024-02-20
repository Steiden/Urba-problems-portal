import { ReactNode } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import "./scss/Navbar.scss";

type TypeProps = {
    dropdownIsOpen: boolean;
    setDropdownIsOpen: (isOpen: boolean) => void;
};

export const Navbar = ({ dropdownIsOpen, setDropdownIsOpen }: TypeProps): ReactNode => {

    return (
        <nav className="header__nav">
            <ul className="header__list">
                <li className="header__item">
                    <a href="#" className="header__link">
                        Главная
                    </a>
                </li>
                <li className="header__item">
                    <button className="header__button">Зарегистрироваться</button>
                </li>
                <li className="header__item">
                    <button className="header__button">Войти</button>
                </li>
                <li className="header__item">
                    <button
                        className="header__button header__button-dropdown"
                        onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>
                        Иванов И.И.
                    </button>
                    <Dropdown isOpen={dropdownIsOpen} />
                </li>
            </ul>
        </nav>
    );
};
