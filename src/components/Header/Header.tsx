import { ReactNode, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import "./scss/Header.scss";

export const Header = (): ReactNode => {
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header__container">
                <a href="#" className="header__logo">
                    Городской портал
                </a>
                <Navbar dropdownIsOpen={dropdownIsOpen} setDropdownIsOpen={setDropdownIsOpen} />
            </div>
            {dropdownIsOpen && <div className="dropdown__overlay" onClick={() => setDropdownIsOpen(false)}></div>}
        </header>
    );
};
