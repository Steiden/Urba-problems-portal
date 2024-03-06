import { Dispatch, ReactNode } from "react";

type TypeProps = {
    setLoginFormIsOpen: Dispatch<React.SetStateAction<boolean>>;
    setRegisterFormIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const GuestNavbarItems = ({ setLoginFormIsOpen, setRegisterFormIsOpen }: TypeProps): ReactNode => {
    return (
        <>
            <li className="header__item">
                <button className="header__button" onClick={() => setRegisterFormIsOpen(true)}>
                    Зарегистрироваться
                </button>
            </li>
            <li className="header__item">
                <button className="header__button" onClick={() => setLoginFormIsOpen(true)}>
                    Войти
                </button>
            </li>
        </>
    );
};
