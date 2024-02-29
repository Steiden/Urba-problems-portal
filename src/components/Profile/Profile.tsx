import { ReactNode, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./scss/Profile.scss";

export const Profile = (): ReactNode => {
    const [secondName, setSecondName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
        <section className="profile">
            <form action="/me/update" method="POST" className="profile__form">
                <div className="profile__inputs-container profile__inputs-container--horizontal">
                    <div className="profile__input-container">
                        <label htmlFor="secondName" className="profile__label">
                            Фамилия
                        </label>
                        <input
                            type="text"
                            id="secondName"
                            className="profile__input"
                            value={secondName}
                            onChange={(e) => setSecondName(e.target.value)}
                        />
                        <span className={`profile__input-error ${!secondName && "profile__input-error--active"}`}>
                            *Заполните поле фамилии
                        </span>
                    </div>
                    <div className="profile__input-container">
                        <label htmlFor="firstName" className="profile__label">
                            Имя
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="profile__input"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <span className={`profile__input-error ${!firstName && "profile__input-error--active"}`}>
                            *Заполните поле имени
                        </span>
                    </div>
                    <div className="profile__input-container">
                        <label htmlFor="patronymic" className="profile__label">
                            Отчество
                        </label>
                        <input
                            type="text"
                            id="patronymic"
                            className="profile__input"
                            value={patronymic}
                            onChange={(e) => setPatronymic(e.target.value)}
                        />
                        <span className={`profile__input-error ${!patronymic && "profile__input-error--active"}`}>
                            *Заполните поле отчества
                        </span>
                    </div>
                </div>
                <div className="profile__split">
                    <div className="profile__inputs-container profile__input-container--vertical">
                        <div className="profile__input-container">
                            <label htmlFor="login" className="profile__label">
                                Логин
                            </label>
                            <input
                                type="text"
                                id="login"
                                className="profile__input"
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                            />
                            <span className={`profile__input-error ${!login && "profile__input-error--active"}`}>
                                *Заполните поле логина
                            </span>
                        </div>
                        <div className="profile__input-container">
                            <label htmlFor="email" className="profile__label">
                                Почта
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="profile__input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className={`profile__input-error ${!email && "profile__input-error--active"}`}>
                                *Заполните поле почты
                            </span>
                        </div>
                        <div className="profile__input-container">
                            <label htmlFor="password" className="profile__label">
                                Пароль
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="profile__input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className={`profile__input-error ${!password && "profile__input-error--active"}`}>
                                *Заполните поле пароля
                            </span>
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
                    <button
                        className="profile__button profile__button--save"
                        type="submit"
                        disabled={!secondName || !firstName || !patronymic || !login || !email || !password}>
                        Сохранить изменения
                    </button>
                    <button className="profile__button" type="button" onClick={() => {navigate('/')}}>
                        Отмена
                    </button>
                </div>
            </form>
        </section>
    );
};
