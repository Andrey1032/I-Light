import React from "react";
import { Link } from "react-router-dom";

export default function AccordionItem({
    isActive,
    setIsActive,
    data,
    icon,
    button,
    checker,
}) {
    return (
        <div
            className={
                checker
                    ? isActive
                        ? "catalog-menu__item active checker"
                        : "catalog-menu__item checker"
                    : isActive
                    ? "catalog-menu__item active"
                    : "catalog-menu__item"
            }
            onClick={setIsActive}
        >
            {icon && (
                <img
                    src={data?.icon}
                    className="catalog-menu__icon"
                    alt=""
                ></img>
            )}
            <div className="catalog-menu__title">
                <p>{data.title}</p>
                {checker && (
                    <div
                        className={
                            isActive
                                ? "catalog-menu__checker active"
                                : "catalog-menu__checker"
                        }
                    >
                        +
                    </div>
                )}
            </div>
            <div className="catalog-menu__content">
                <p className="catalog-menu__decription">{data.decription}</p>
                {button && (
                    <Link to="" className="catalog-menu__link">
                        Перейти в каталог
                    </Link>
                )}
            </div>
        </div>
    );
}
