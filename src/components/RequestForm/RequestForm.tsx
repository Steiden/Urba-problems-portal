import { FormEvent, FormEventHandler, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypeProblemFromServer } from "../../api/problems/ProblemsTypes";
import { addProblem } from "../../api/problems/Problems";
import { TypeUserFromServer } from "../../api/users/UsersTypes";
import { getJWT } from "../../helpers/jwtHelper";
import "./scss/RequestForm.scss";

type TypeProps = {
    user: TypeUserFromServer;
};

export const RequestForm = ({ user }: TypeProps): ReactNode => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const navigate = useNavigate();

    const handleImageChange: FormEventHandler<HTMLInputElement> = (e: FormEvent<HTMLInputElement>) => {
        const imageChanged: string = e.currentTarget.value;

        if (!imageChanged.endsWith(".png") && !imageChanged.endsWith(".jpg") && !imageChanged.endsWith(".jpeg") && !imageChanged.endsWith(".webp")) {
            setImage(image);
        } else {
            setImage(imageChanged);
        }
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const problem: TypeProblemFromServer | Error = await addProblem(
            {
                title: title,
                description: description,
                image: image,
                user_id: user.id,
            },
            getJWT()
        );

        if (problem instanceof Error) return;

        navigate("/me/requests");
    };

    return (
        <section className="profile">
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__inputs-container profile__inputs-container--vertical">
                    <div className="profile__input-container">
                        <label htmlFor="title" className="profile__label">
                            Название
                        </label>
                        <input type="text" id="title" className="profile__input" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <span className={`profile__input-error ${!title && "profile__input-error--active"}`}>*Заполните поле названия</span>
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
                            maxLength={500}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <span className={`profile__input-error ${!description && "profile__input-error--active"}`}>*Заполните поле описания</span>
                    </div>
                    <div className="profile__input-container">
                        <label htmlFor="image" className="profile__label">
                            Загрузите изображение
                        </label>
                        <div className="profile__input--custom">
                            <label className="profile__input-button" htmlFor="image">
                                Загрузить
                            </label>
                            <label htmlFor="image">{image}</label>
                        </div>
                        <input type="file" id="image" className="profile__input profile__input--hidden" value={image} onChange={handleImageChange} />
                        <span className={`profile__input-error ${!image && "profile__input-error--active"}`}>*Заполните поле изображения</span>
                    </div>
                </div>
                <div className="profile__buttons-container">
                    <button className="profile__button profile__button--save" type="submit" disabled={!title || !description || !image}>
                        Добавить проблему
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
