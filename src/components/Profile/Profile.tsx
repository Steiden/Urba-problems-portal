import { Dispatch, FormEvent, ReactNode, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getJWT } from "../../helpers/jwtHelper";
import { TypeUser, TypeUserFromServer } from "../../api/users/UsersTypes";
import { updateUser } from "../../api/users/Users";
import "./scss/Profile.scss";

type TypeProps = {
    userData: {
        user: TypeUserFromServer;
        setUser: Dispatch<SetStateAction<TypeUserFromServer>>;
    };
};

type TypeUserDataToUpdate = {
    user: TypeUserFromServer;
    new_password: string;
};

export const Profile = ({ userData }: TypeProps): ReactNode => {
    const [userDataToUpdate, setUserDataToUpdate]: [TypeUserDataToUpdate, Dispatch<SetStateAction<TypeUserDataToUpdate>>] = useState({
        user: userData.user,
        new_password: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        setUserDataToUpdate({ user: userData.user, new_password: "" });
    }, [userData.user]);


    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if (userDataToUpdate.new_password) {
            userDataToUpdate.user.password = userDataToUpdate.new_password;
        }

        const userToUpdate: TypeUser = { ...userDataToUpdate.user, role_id: userDataToUpdate.user.role.id };

        const userUpdated: TypeUserFromServer = await updateUser(userData.user.id, userToUpdate, getJWT()) as TypeUserFromServer;

        if (userUpdated instanceof Error) return;

        userData.setUser(userUpdated);
        console.log(userData, userDataToUpdate);
    };

    return (
        <section className="profile">
            {userDataToUpdate.user !== ({} as TypeUserFromServer) && (
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
                                value={userDataToUpdate.user.second_name}
                                onChange={(e) =>
                                    setUserDataToUpdate({
                                        ...userDataToUpdate,
                                        user: { ...userDataToUpdate.user, second_name: e.target.value },
                                    })
                                }
                            />
                            <span className={`profile__input-error ${!userDataToUpdate.user.second_name && "profile__input-error--active"}`}>
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
                                value={userDataToUpdate.user.first_name}
                                onChange={(e) =>
                                    setUserDataToUpdate({
                                        ...userDataToUpdate,
                                        user: { ...userDataToUpdate.user, first_name: e.target.value },
                                    })
                                }
                            />
                            <span className={`profile__input-error ${!userDataToUpdate.user.first_name && "profile__input-error--active"}`}>
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
                                value={userDataToUpdate.user.patronymic}
                                onChange={(e) =>
                                    setUserDataToUpdate({
                                        ...userDataToUpdate,
                                        user: { ...userDataToUpdate.user, patronymic: e.target.value },
                                    })
                                }
                            />
                            <span className={`profile__input-error ${!userDataToUpdate.user.patronymic && "profile__input-error--active"}`}>
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
                                    value={userDataToUpdate.user.login}
                                    onChange={(e) =>
                                        setUserDataToUpdate({
                                            ...userDataToUpdate,
                                            user: { ...userDataToUpdate.user, login: e.target.value },
                                        })
                                    }
                                />
                                <span className={`profile__input-error ${!userDataToUpdate.user.login && "profile__input-error--active"}`}>
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
                                    value={userDataToUpdate.user.email}
                                    onChange={(e) =>
                                        setUserDataToUpdate({
                                            ...userDataToUpdate,
                                            user: { ...userDataToUpdate.user, email: e.target.value },
                                        })
                                    }
                                />
                                <span className={`profile__input-error ${!userDataToUpdate.user.email && "profile__input-error--active"}`}>
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
                                    value={userDataToUpdate.new_password}
                                    onChange={(e) => setUserDataToUpdate({ ...userDataToUpdate, new_password: e.target.value })}
                                />
                                <span className={`profile__input-error ${!userDataToUpdate.user.password && "profile__input-error--active"}`}>
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
                                !userDataToUpdate.user.second_name ||
                                !userDataToUpdate.user.first_name ||
                                !userDataToUpdate.user.patronymic ||
                                !userDataToUpdate.user.login ||
                                !userDataToUpdate.user.email
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
            )}
        </section>
    );
};
