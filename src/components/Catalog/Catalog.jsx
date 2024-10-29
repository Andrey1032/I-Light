import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

export default function Catalog({ items }) {
    return (
        <div className="menu-catalog">
            <div className="menu-catalog__list">
                {items?.map((item, id) => (
                    <Card key={id} data={item} />
                ))}
            </div>
            <Link to={""} className="btn">
                Перейти в каталог
            </Link>
        </div>
    );
}
