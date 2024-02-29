import { ReactNode } from "react";
import "./scss/Dropdown.scss";

type TypeProps = {
    isOpen: boolean;
};

export const Dropdown = ({ isOpen }: TypeProps): ReactNode => {
    return (
        <>
            <div className={`dropdown ${isOpen ? "dropdown_active" : ""}`}>
                <ul className="header__dropdown">
                    <li className="header__dropdown-item">
                        <a href="#" className="header__dropdown-link">
                            Мои данные
                        </a>
                    </li>
                    <li className="header__dropdown-item">
                        <a href="#" className="header__dropdown-link">
                            Мои заявки
                        </a>
                    </li>
                    <li className="header__dropdown-item">
                        <a href="#" className="header__dropdown-link">
                            Новая заявка
                        </a>
                    </li>
                    <hr className="header__dropdown-hr" />
                    <li className="header__dropdown-item">
                        <a href="#" className="header__dropdown-link">
                            Выход
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};
