import React, { useState } from "react";
import logo from "../../assets/files/logo.png";
import { ReactComponent as IconPlus } from "../../assets/files/icon-plus.svg";
import { ReactComponent as IconPhone } from "../../assets/files/icon-phone.svg";
import { ReactComponent as IconEmail } from "../../assets/files/icon-email.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    console.log(isOpenMenu);
    return (
        <header>
            <nav className={isOpenMenu ? "navbar navbar-active" : "navbar"}>
                <img className="logo navbar__logo" src={logo} alt="logo" />

                <div className="navbar__menu">
                    <Link to={"/"} className="navbar__link">
                        <p>О компании</p>
                    </Link>
                    <Link to={"/"} className="navbar__link">
                        <p>Услуги</p>
                    </Link>
                    <Link to={"/"} className="navbar__link">
                        <p>Проекты</p>
                    </Link>
                    <Link to={"/"} className="navbar__link">
                        <p>Доставка и оплата</p>
                    </Link>
                    <Link to={"/"} className="navbar__link">
                        <p>Контакты</p>
                    </Link>
                    <Link
                        to={"/"}
                        className="navbar__link navbar__link_selection"
                    >
                        <p>Подборка</p>
                        <IconPlus className="navbar__link-icon" />
                    </Link>
                </div>
                <div className="navbar__menu">
                    <Link to={"/"} className="navbar__link navbar__link_email">
                        <IconEmail className="navbar__link-icon" />
                        <p>info@i-lights.ru</p>
                    </Link>
                    <Link to={"/"} className="navbar__link navbar__link_phone">
                        <IconPhone className="navbar__link-icon" />
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
