import { ReactNode } from "react";
import "./scss/Dropdown.scss";
import { Link } from "react-router-dom";

type TypeProps = {
    isOpen: boolean;
};

export const Dropdown = ({ isOpen }: TypeProps): ReactNode => {
    return (
        <>
            <div className={`dropdown ${isOpen ? "dropdown_active" : ""}`}>
                <ul className="header__dropdown">
                    <li className="header__dropdown-item">
                        <Link to="/me" className="header__dropdown-link">
                            Мои данные
                        </Link>
                    </li>
                    <li className="header__dropdown-item">
                        <Link to="/me/requests" className="header__dropdown-link">
                            Мои заявки
                        </Link>
                    </li>
                    <li className="header__dropdown-item">
                        <Link to="/me/new-request" className="header__dropdown-link">
                            Новая заявка
                        </Link>
                    </li>
                    <hr className="header__dropdown-hr" />
                    <li className="header__dropdown-item">
                        <Link to="/me/logout" className="header__dropdown-link">
                            Выход
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};
