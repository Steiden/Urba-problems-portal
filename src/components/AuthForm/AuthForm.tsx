import { Dispatch, FormEventHandler, ReactNode, SetStateAction } from "react";
import { Overlay } from "../Overlay/Overlay";
import "./scss/AuthForm.scss";

type TypeProps = {
    authForm: {
        authFormIsOpen: boolean;
        setAuthFormIsOpen: Dispatch<SetStateAction<boolean>>;
    };
    title: string;
    onSubmit: FormEventHandler<HTMLFormElement>;
    children: ReactNode;
};

export const AuthForm = ({ authForm, title, onSubmit, children }: TypeProps): ReactNode => {
    return (
        <>
            {authForm.authFormIsOpen && <Overlay onClick={() => authForm.setAuthFormIsOpen(false)} />}
            <section className={`auth ${authForm.authFormIsOpen && "auth_active"}`}>
                <h2 className="auth__title">{title}</h2>
                <form className="auth__form" onSubmit={onSubmit}>
                    {children}
                </form>
                <button className="auth__close-button" onClick={() => authForm.setAuthFormIsOpen(false)}>
                    ✕
                </button>
            </section>
        </>
    );
};
