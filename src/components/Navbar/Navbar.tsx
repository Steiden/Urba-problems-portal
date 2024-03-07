import { Dispatch, ReactNode, SetStateAction } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import { TypeUserFromServer } from "../../api/users/UsersTypes";
import "./scss/Navbar.scss";

type TypeProps = {
    dropdown: {
        dropdownIsOpen: boolean;
        setDropdownIsOpen: Dispatch<SetStateAction<boolean>>;
    };
    user: TypeUserFromServer;
    setIsAuthorized: Dispatch<SetStateAction<boolean>>;
    setJwt: Dispatch<SetStateAction<string>>;
    children: ReactNode;
};

export const Navbar = ({ dropdown, user, setIsAuthorized, setJwt, children }: TypeProps): ReactNode => {
    return (
        <nav className="header__nav">
            <ul className="header__list">
                <li className="header__item">
                    <Link to="/" className="header__link">
                        Главная
                    </Link>
                </li>
                {children}
                {user.id && (
                    <li className="header__item">
                        <button
                            className="header__button header__button-dropdown"
                            onClick={() => dropdown.setDropdownIsOpen(!dropdown.dropdownIsOpen)}>
                            {`${user.second_name} ${user.first_name[0]}. ${user.patronymic[0]}.`}
                        </button>
                        <Dropdown isOpen={dropdown.dropdownIsOpen} setIsAthorized={setIsAuthorized} setJwt={setJwt} />
                    </li>
                )}
            </ul>
        </nav>
    );
};
