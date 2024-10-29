import React from "react";

export default function Form() {
    return (
        <form className="section__form form" action="">
            <input
                className="form__input"
                type="text"
                placeholder="Ваше имя*"
            />
            <input
                className="form__input"
                type="text"
                placeholder="Ваш e-mail*"
            />
            <textarea
                className="form__textarea"
                type="text"
                placeholder="Сообщение"
            />
            <button className="btn" type="submit">
                Отправить
            </button>
        </form>
    );
}
