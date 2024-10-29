import React, { useId } from "react";
import { Link } from "react-router-dom";

export default function AccordionItem({
    isActive,
    setIsActive,
    data,
    icon,
    button,
    checker,
}) {
    const key = useId();
    return (
        <div
            className={
                checker
                    ? isActive
                        ? "accordion-menu__item active checker"
                        : "accordion-menu__item checker"
                    : isActive
                    ? "accordion-menu__item active"
                    : "accordion-menu__item"
            }
            onClick={setIsActive}
        >
            {icon && (
                <img
                    src={data?.icon}
                    className="accordion-menu__icon"
                    alt=""
                ></img>
            )}
            <div className="accordion-menu__title">
                <p>{data.title}</p>
                {checker && (
                    <div
                        className={
                            isActive
                                ? "accordion-menu__checker active"
                                : "accordion-menu__checker"
                        }
                    >
                        +
                    </div>
                )}
            </div>
            <div className="accordion-menu__content">
                <p className="accordion-menu__decription">{data.decription}</p>
                {button && (
                    <Link to="" className="accordion-menu__link">
                        Перейти в каталог
                    </Link>
                )}
            </div>
        </div>
    );
}
