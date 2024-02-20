import { ReactNode } from "react";
import { AuthForm } from "./AuthForm";

type TypeProps = {
    loginForm: {
        loginFormIsOpen: boolean;
        setLoginFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    };
};

export const LoginForm = ({ loginForm }: TypeProps): ReactNode => {
    return (
        <AuthForm
            authForm={{ authFormIsOpen: loginForm.loginFormIsOpen, setAuthFormIsOpen: loginForm.setLoginFormIsOpen }}
            title="Войти">
            <input className="auth__input" type="text" name="login" placeholder="Логин" />
            <input className="auth__input" type="password" name="password" placeholder="Пароль" />
            <button className="auth__button" type="submit">
                Войти
            </button>
        </AuthForm>
    );
};
