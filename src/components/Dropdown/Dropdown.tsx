import { Dispatch, ReactNode, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { removeJWT } from "../../helpers/jwtHelper";
import "./scss/Dropdown.scss";

type TypeProps = {
    isOpen: boolean;
    setIsAthorized: Dispatch<SetStateAction<boolean>>;
    setJwt: Dispatch<SetStateAction<string>>;
};

export const Dropdown = ({ isOpen, setIsAthorized, setJwt }: TypeProps): ReactNode => {
    const handleLogout = (): void => {
        setIsAthorized(false);
        setJwt("");
        removeJWT();
    };

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
                        <button className="header__dropdown-link" onClick={handleLogout}>
                            Выход
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};
