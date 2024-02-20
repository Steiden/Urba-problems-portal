import { ReactNode } from "react";
import "./scss/AuthForm.scss";
import { Overlay } from "../Overlay/Overlay";

type TypeProps = {
    authForm: {
        authFormIsOpen: boolean;
        setAuthFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    };
};

export const AuthForm = ({ authForm }: TypeProps): ReactNode => {
    return (
        <>
            {authForm.authFormIsOpen && <Overlay onClick={() => authForm.setAuthFormIsOpen(false)} />}
            <section className={`auth ${authForm.authFormIsOpen ? "auth_active" : ""}`}>
                <h2 className="auth__title">Авторизация</h2>
                <form className="auth__form">
                    <input className="auth__input" type="text" placeholder="Логин" />
                    <input className="auth__input" type="password" placeholder="Пароль" />
                    <button className="auth__button" type="submit">
                        Войти
                    </button>
                </form>
                <button className="auth__close-button" onClick={() => authForm.setAuthFormIsOpen(false)}>
                    ✕
                </button>
            </section>
        </>
    );
};
