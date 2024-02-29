import { ReactNode } from "react";
import "./scss/Profile.scss";

export const Profile = (): ReactNode => {
    return (
        <section className="profile">
            <form action="/me/update" method="POST" className="profile__form">
                <div className="profile__inputs-container profile__inputs-container--horizontal">
                    <div className="profile__input-container">
                        <label htmlFor="secondName" className="profile__label">
                            Фамилия
                        </label>
                        <input type="text" id="secondName" className="profile__input" />
                    </div>
                    <div className="profile__input-container">
                        <label htmlFor="firstName" className="profile__label">
                            Имя
                        </label>
                        <input type="text" id="firstName" className="profile__input" />
                    </div>
                    <div className="profile__input-container">
                        <label htmlFor="patronymic" className="profile__label">
                            Отчество
                        </label>
                        <input type="text" id="patronymic" className="profile__input" />
                    </div>
                </div>
                <div className="profile__split">
                    <div className="profile__inputs-container profile__input-container--vertical">
                        <div className="profile__input-container">
                            <label htmlFor="login" className="profile__label">
                                Логин
                            </label>
                            <input type="text" id="login" className="profile__input" />
                        </div>
                        <div className="profile__input-container">
                            <label htmlFor="email" className="profile__label">
                                Почта
                            </label>
                            <input type="email" id="email" className="profile__input" />
                        </div>
                        <div className="profile__input-container">
                            <label htmlFor="password" className="profile__label">
                                Пароль
                            </label>
                            <input type="password" id="password" className="profile__input" />
                        </div>
                    </div>
                    <div className="profile__avatar-container">
                        <img
                            src="/img/1476434895129645719.jpg"
                            alt="user avatar"
                            className="profile__avatar"
                            width={250}
                            height={250}
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="profile__buttons-container">
                    <button className="profile__button profile__button--save" type="submit">
                        Сохранить изменения
                    </button>
                    <button className="profile__button">Отмена</button>
                </div>
            </form>
        </section>
    );
};
