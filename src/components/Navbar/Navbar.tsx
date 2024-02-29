import { ReactNode } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import "./scss/Navbar.scss";
import { Link } from "react-router-dom";

type TypeProps = {
    dropdown: {
        dropdownIsOpen: boolean;
        setDropdownIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    };
    children: ReactNode;
};

export const Navbar = ({ dropdown, children }: TypeProps): ReactNode => {
    return (
        <nav className="header__nav">
            <ul className="header__list">
                <li className="header__item">
                    <Link to="/" className="header__link">
                        Главная
                    </Link>
                </li>
                {children}
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
