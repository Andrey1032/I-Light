import React, { useState } from "react";
import logo from "../../assets/files/logo.png";
import { ReactComponent as IconPlus } from "../../assets/files/icons/icon-plus.svg";
import { ReactComponent as IconPhone } from "../../assets/files/icons/icon-phone.svg";
import { ReactComponent as IconEmail } from "../../assets/files/icons/icon-email.svg";
import { Link } from "react-router-dom";
import { ABOUT_COMPANY_ROUTE, HOME_ROUTE, SERVICES_ROUTE } from "../../utils/consts";

export default function Navbar() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    return (
        <header>
            <nav className={isOpenMenu ? "navbar navbar-active" : "navbar"}>
                <Link
                    to={HOME_ROUTE}
                    onClick={() => setIsOpenMenu(false)}
                >
                    <img className="logo navbar__logo" src={logo} alt="logo" />
                </Link>

                <div className="menu navbar__menu">
                    <Link
                        to={ABOUT_COMPANY_ROUTE}
                        className="menu__link"
                        onClick={() => setIsOpenMenu(false)}
                    >
                        <p>О компании</p>
                    </Link>
                    <Link
                        to={SERVICES_ROUTE}
                        className="menu__link"
                        onClick={() => setIsOpenMenu(false)}
                    >
                        <p>Услуги</p>
                    </Link>
                    <Link
                        to={"/"}
                        className="menu__link"
                        onClick={() => setIsOpenMenu(false)}
                    >
                        <p>Проекты</p>
                    </Link>
                    <Link
                        to={"/"}
                        className="menu__link"
                        onClick={() => setIsOpenMenu(false)}
                    >
                        <p>Доставка и оплата</p>
                    </Link>
                    <Link
                        to={"/"}
                        className="menu__link"
                        onClick={() => setIsOpenMenu(false)}
                    >
                        <p>Контакты</p>
                    </Link>
                    <Link
                        to={"/"}
                        className="menu__link menu__link_selection"
                        onClick={() => setIsOpenMenu(false)}
                    >
                        <p>Подборка</p>
                        <IconPlus className="menu__link-icon" />
                    </Link>
                </div>
                <div className="navbar__menu menu">
                    <Link
                        to={"/"}
                        className="menu__link menu__link_email"
                        onClick={() => setIsOpenMenu(false)}
                    >
                        <IconEmail className="menu__link-icon" />
                        <p>info@i-lights.ru</p>
                    </Link>
                    <Link
                        to={"/"}
                        className="menu__link menu__link_phone"
                        onClick={() => setIsOpenMenu(false)}
                    >
                        <IconPhone className="menu__link-icon" />
                        <p>+7 (495) 233 55 57</p>
                    </Link>
                </div>
                <div className="navbar__ham-menu ham-menu">
                    <input
                        className="ham-menu__input"
                        type="checkbox"
                        name="menu"
                        id="menu"
                    />
                    <label
                        className="ham-menu__icon-menu"
                        htmlFor="menu"
                        onClick={() =>
                            setIsOpenMenu((isOpenMenu) => !isOpenMenu)
                        }
                    >
                        <span className="ham-menu__span"></span>
                        <span className="ham-menu__span"></span>
                        <span className="ham-menu__span"></span>
                    </label>
                </div>
            </nav>
        </header>
    );
}
