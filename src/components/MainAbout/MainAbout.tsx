import { ReactNode } from "react";
import "./scss/MainAbout.scss";

export const MainAbout = (): ReactNode => {
    return (
        <section className="main__about">
            <h1 className="main__title">Привет, дорогой друг!</h1>
            <p className="main__text">
                Вместе мы сможем улучшить наш любимый город. Нам очень сложно узнать обо всех проблемах города, поэтому
                мы предлагаем тебе помочь своему городу!
            </p>
            <p className="main__text">Увидел проблему? Дай нам знать о ней и мы ее решим!</p>

            <div className="main__button-container">
                <button className="main__button main__button_green">Сообщить о проблеме</button>
                <button className="main__button main__button_blue">Присоединиться к проекту</button>
            </div>
        </section>
    );
};
