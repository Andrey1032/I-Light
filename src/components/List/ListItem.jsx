import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconDownload } from "../../assets/files/icons/icon-download.svg";

export default function ListItem({ item }) {
    return (
        <div className="list__item">
            <p className="list__item-title">{item}</p>
            <div className="list__buttons">
                <Link className="list__btn">Посмотреть</Link>
                <button className="list__btn">Скачать</button>
                <IconDownload className="list__icon-btn" />
            </div>
        </div>
    );
}
