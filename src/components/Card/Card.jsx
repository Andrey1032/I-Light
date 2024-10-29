import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconRuble } from "../../assets/files/icons/icon-ruble.svg";

/*
{
    power: null,
    img: require("../../assets/files/catalog/light-1.png"),
    title: "Дизайнерский светильник изготавливаемый по проекту",
    features: [
        "Длинна до 3 метров.",
        "Углы поворота между секторами по проекту. ",
        "Мощность рассчитывается индивидуально.",
    ],
    price: 21300,
},
 */
export default function Card({ data }) {
    return (
        <div className="card">
            <div className="card__content">
                <div className="card__power">{data?.power} Вт</div>
                <img src={data.img} alt="иллюстрация" className="card__img" />
                <div className="card__info">
                    <div className="card__title">{data.title}</div>
                    <ul className="card__features">
                        {data.features?.map((feature) => (
                            <li className="card__features-item">{feature}</li>
                        ))}
                    </ul>
                    <div className="card__price">
                        <p>{data.price}</p>
                        <IconRuble className="card__icon-price" />
                    </div>
                </div>
            </div>
            <div className="card__buttons">
                <Link className="card__link">Подробнее</Link>
                <button className="card_btn">+</button>
            </div>
        </div>
    );
}
