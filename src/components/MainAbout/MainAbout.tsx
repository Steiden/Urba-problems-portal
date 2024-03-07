import { Dispatch, ReactNode, SetStateAction } from "react";
import "./scss/MainAbout.scss";
import { NavigateFunction, useNavigate } from "react-router-dom";

type TypeProps = {
    loginForm: {
        isOpen: boolean;
        setIsOpen: Dispatch<SetStateAction<boolean>>;
    };
    registerForm: {
        isOpen: boolean;
        setIsOpen: Dispatch<SetStateAction<boolean>>;
    };
    isAuthorized: boolean;
};

export const MainAbout = ({ loginForm, registerForm, isAuthorized }: TypeProps): ReactNode => {
    const navigate: NavigateFunction = useNavigate();

    const handleReportProblem = (): void => {
        if (isAuthorized) {
            navigate("/me/new-request");
        } else {
            loginForm.setIsOpen(true);
        }
    };

    const handleSignUp = (): void => {
        if (!isAuthorized) {
            registerForm.setIsOpen(true);
        }
    };

    return (
        <section className="main__about">
            <h1 className="main__title">Привет, дорогой друг!</h1>
            <p className="main__text">
                Вместе мы сможем улучшить наш любимый город. Нам очень сложно узнать обо всех проблемах города, поэтому
                мы предлагаем тебе помочь своему городу!
            </p>
            <p className="main__text">Увидел проблему? Дай нам знать о ней и мы ее решим!</p>

            <div className="main__button-container">
                <button className="main__button main__button--green" onClick={() => handleReportProblem()}>
                    Сообщить о проблеме
                </button>
                {!isAuthorized && (
                    <button className="main__button main__button--blue" onClick={() => handleSignUp()}>
                        Присоединиться к проекту
                    </button>
                )}
            </div>
        </section>
    );
};
