import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./scss/RequestForm.scss";

export const RequestForm = (): ReactNode => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const navigate = useNavigate();

    return (
        <section className="profile">
            <form action="/me/new-request" method="POST" className="profile__form">
                <div className="profile__inputs-container profile__inputs-container--vertical">
                    <div className="profile__input-container">
                        <label htmlFor="title" className="profile__label">
                            Название
                        </label>
                        <input
                            type="text"
                            id="title"
                            className="profile__input"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <span className={`profile__input-error ${!title && "profile__input-error--active"}`}>
                            *Заполните поле названия
                        </span>
                    </div>
                    <div className="profile__input-container">
                        <label htmlFor="description" className="profile__label">
                            Описание
                        </label>
                        <textarea
                            id="description"
                            className="profile__input profile__input--textarea"
                            rows={5}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <span className={`profile__input-error ${!description && "profile__input-error--active"}`}>
                            *Заполните поле описания
                        </span>
                    </div>
                    <div className="profile__input-container">
                        <label htmlFor="image" className="profile__label">
                            Загрузите изображение
                        </label>
                        <input
                            type="file"
                            id="image"
                            className="profile__input"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <span className={`profile__input-error ${!image && "profile__input-error--active"}`}>
                            *Заполните поле изображения
                        </span>
                    </div>
                </div>
                <div className="profile__buttons-container">
                    <button
                        className="profile__button profile__button--save"
                        type="submit"
                        disabled={!title || !description || !image}>
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
