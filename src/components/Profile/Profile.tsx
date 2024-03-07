import { Dispatch, FormEvent, ReactNode, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypeUser } from "../../api/types/DatabaseTypes";
import { putData } from "../../api/Data";
import { endpoints_current } from "../../api/config";
import { getJWT } from "../../helpers/jwtHelper";
import { TypeDataFromPut } from "../../api/types/RequestTypes";
import "./scss/Profile.scss";

type TypeProps = {
    user: {
        user: TypeUser;
        setUser: Dispatch<SetStateAction<TypeUser>>;
    }
};

export const Profile = ({ user }: TypeProps): ReactNode => {
    const [userData, setUserData] = useState({ ...user.user, new_password: "" });

    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if(userData.new_password) {
            userData.password = userData.new_password;
        }

        const userUpdated: TypeDataFromPut = await putData(endpoints_current.user(user.user.id), userData, getJWT());

        if(userUpdated instanceof Error) return;

        user.setUser(userUpdated);
    };

    return (
        <section className="profile">
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__inputs-container profile__inputs-container--horizontal">
                    <div className="profile__input-container">
                        <label htmlFor="secondName" className="profile__label">
                            Фамилия
                        </label>
                        <input
                            type="text"
                            id="secondName"
                            className="profile__input"
                            value={userData.second_name}
                            onChange={(e) => setUserData({ ...userData, second_name: e.target.value })}
                        />
                        <span
                            className={`profile__input-error ${
                                !userData.second_name && "profile__input-error--active"
                            }`}>
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
                            value={userData.first_name}
                            onChange={(e) => setUserData({ ...userData, first_name: e.target.value })}
                        />
                        <span
                            className={`profile__input-error ${
                                !userData.first_name && "profile__input-error--active"
                            }`}>
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
                            value={userData.patronymic}
                            onChange={(e) => setUserData({ ...userData, patronymic: e.target.value })}
                        />
                        <span
                            className={`profile__input-error ${
                                !userData.patronymic && "profile__input-error--active"
                            }`}>
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
                                value={userData.login}
                                onChange={(e) => setUserData({ ...userData, login: e.target.value })}
                            />
                            <span
                                className={`profile__input-error ${!userData.login && "profile__input-error--active"}`}>
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
                                value={userData.email}
                                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                            />
                            <span
                                className={`profile__input-error ${!userData.email && "profile__input-error--active"}`}>
                                *Заполните поле почты
                            </span>
                        </div>
                        <div className="profile__input-container">
                            <label htmlFor="password" className="profile__label">
                                Новый пароль
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="profile__input"
                                value={userData.new_password}
                                onChange={(e) => setUserData({ ...userData, new_password: e.target.value })}
                            />
                            <span
                                className={`profile__input-error ${
                                    !userData.password && "profile__input-error--active"
                                }`}>
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
                        disabled={
                            !userData.second_name ||
                            !userData.first_name ||
                            !userData.patronymic ||
                            !userData.login ||
                            !userData.email
                        }>
                        Сохранить изменения
                    </button>
                    <button
                        className="profile__button"
                        type="button"
                        onClick={() => {
                            navigate("/");
                        }}>
                        Отмена
                    </button>
                </div>
            </form>
        </section>
    );
};
