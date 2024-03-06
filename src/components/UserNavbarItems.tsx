import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const UserNavbarItems = (): ReactNode => {
    return (
        <>
            <li className="header__item">
                <Link to="/problems" className="header__link">
                    Проблемы
                </Link>
            </li>
        </>
    );
};
