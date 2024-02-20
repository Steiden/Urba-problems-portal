import { ReactNode } from "react";
import { AuthForm } from "./AuthForm";

type TypeProps = {
    registerForm: {
        registerFormIsOpen: boolean;
        setRegisterFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    };
};

export const RegisterForm = ({ registerForm }: TypeProps): ReactNode => {
    return (
        <AuthForm
            authForm={{
                authFormIsOpen: registerForm.registerFormIsOpen,
                setAuthFormIsOpen: registerForm.setRegisterFormIsOpen,
            }}
            title="Регистрация">
            <input className="auth__input" type="text" name="fio" placeholder="ФИО" required />
            <input className="auth__input" type="text" name="login" placeholder="Логин" required />
            <input className="auth__input" type="email" name="email" placeholder="E-mail" required />
            <input className="auth__input" type="password" name="password" placeholder="Пароль" required />
            <input className="auth__input" type="password" placeholder="Повторите пароль" required />
            <div className="auth__input-container">
                <input className="auth__checkbox" type="checkbox" name="consent" id="consent" checked={true} />
                <label className="auth__label" htmlFor="consent">Согласие на обработку персональных данных</label>
            </div>
            <button className="auth__button" type="submit">
                Зарегистрироваться
            </button>
        </AuthForm>
    );
};
