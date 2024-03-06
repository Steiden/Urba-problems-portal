import { Dispatch, FormEventHandler, ReactNode, SetStateAction, useState } from "react";
import { AuthForm } from "./AuthForm";
import { postData } from "../../api/Data";
import { endpoints_auth } from "../../api/config";
import { TypeAuthData, TypeDataToComePost } from "../../api/types/RequestTypes";
import { getJWT, putJWT } from "../../helpers/jwtHelper";

type TypeProps = {
    loginForm: {
        loginFormIsOpen: boolean;
        setLoginFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    };
    setIsAuthorized: Dispatch<SetStateAction<boolean>>;
    setJwt: Dispatch<SetStateAction<string>>;
    setDropdownIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const LoginForm = ({ loginForm, setIsAuthorized, setJwt, setDropdownIsOpen }: TypeProps): ReactNode => {
    const [authData, setAuthData] = useState({ login: "", password: "" });

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const data: TypeDataToComePost = await postData(endpoints_auth.login, authData);

        if (data instanceof Error) return;

        putJWT((data as TypeAuthData).access_token);
        setJwt(getJWT());
        setIsAuthorized(true);

        loginForm.setLoginFormIsOpen(false);
        setDropdownIsOpen(false);
    };

    return (
        <AuthForm
            authForm={{ authFormIsOpen: loginForm.loginFormIsOpen, setAuthFormIsOpen: loginForm.setLoginFormIsOpen }}
            title="Войти"
            onSubmit={handleSubmit}>
            <input
                className="auth__input"
                type="text"
                name="login"
                placeholder="Логин"
                value={authData.login}
                onChange={(e) => setAuthData({ ...authData, login: e.target.value })}
            />
            <input
                className="auth__input"
                type="password"
                name="password"
                placeholder="Пароль"
                value={authData.password}
                onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
            />
            <button className="auth__button" type="submit">
                Войти
            </button>
        </AuthForm>
    );
};
