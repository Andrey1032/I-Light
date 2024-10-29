import React from "react";
import logo_footer from "../../assets/files/logo-footer.png";
import { ReactComponent as IconGeo } from "../../assets/files/icons/icon-geo.svg";
import { ReactComponent as IconPhone } from "../../assets/files/icons/icon-phone.svg";
import { ReactComponent as IconEmail } from "../../assets/files/icons/icon-email.svg";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <img
                    className="logo footer__logo"
                    src={logo_footer}
                    alt="logo"
                />
                <p className="footer__copyright">© Technolight 2015-2021</p>
                <div className="menu footer__menu">
                    <Link to={""} className="menu__link footer__link">
                        <span className="footer__text footer__text_bold footer__text_fs_14">
                            Каталог товаров
                        </span>
                    </Link>

                    <Link
                        to={""}
                        className="menu__link footer__link  footer__link_hover-ul"
                    >
                        <span className="footer__text">
                            Трековые светильники
                        </span>
                    </Link>
                    <Link
                        to={""}
                        className="menu__link footer__link text_bold footer__link_hover-ul"
                    >
                        <span className="footer__text">
                            Встраиваемые светильники
                        </span>
                    </Link>
                    <Link
                        to={""}
                        className="menu__link footer__link footer__link_hover-ul"
                    >
                        <span className="footer__text">
                            Профильные светильники
                        </span>
                    </Link>
                    <Link
                        to={""}
                        className="menu__link footer__link footer__link_hover-ul"
                    >
                        <span className="footer__text">
                            Фигурные светильники
                        </span>
                    </Link>
                    <Link
                        to={""}
                        className="menu__link footer__link footer__link_hover-ul"
                    >
                        <span className="footer__text">
                            Светильники Армстронг
                        </span>
                    </Link>
                    <Link
                        to={""}
                        className="menu__link footer__link footer__link_hover-ul"
                    >
                        <span className="footer__text">
                            Армстронг с равномерной засветкой
                        </span>
                    </Link>
                    <Link
                        to={""}
                        className="menu__link footer__link footer__link_hover-ul"
                    >
                        <span className="footer__text">Произовдители</span>
                    </Link>
                </div>
                <div className="menu footer__menu">
                    <Link to={""} className="menu__link footer__link">
                        <span className="footer__text footer__text_bold">
                            Как заказать
                        </span>
                    </Link>
                    <Link to={""} className="menu__link footer__link ">
                        <span className="footer__text footer__text_bold">
                            Оплата
                        </span>
                    </Link>
                    <Link to={""} className="menu__link footer__link ">
                        <span className="footer__text footer__text_bold">
                            Доставка
                        </span>
                    </Link>
                    <Link to={""} className="menu__link footer__link ">
                        <span className="footer__text footer__text_bold">
                            Реквизиты компании
                        </span>
                    </Link>
                    <Link to={""} className="menu__link footer__link ">
                        <span className="footer__text footer__text_bold">
                            Правовая информация
                        </span>
                    </Link>
                    <Link to={""} className="menu__link footer__link ">
                        <span className="footer__text footer__text_bold">
                            FAQ
                        </span>
                    </Link>
                </div>
                <div className="menu footer__menu">
                    <p className="footer__text footer__text_bold footer__text_fs_14">
                        Контакты
                    </p>
                    <Link to={"/"} className="menu__link footer__link">
                        <IconGeo className="menu__link-icon" />
                        <span className="footer__text footer__text_fs_14">
                            место магазина
                        </span>
                    </Link>
                    <Link to={"/"} className="menu__link footer__link">
                        <IconPhone className="menu__link-icon" />
                        <span className="footer__text footer__text_fs_14">
                            +7 (495) 233 55 57
                        </span>
                    </Link>
                    <Link to={"/"} className="menu__link footer__link">
                        <IconEmail className="menu__link-icon" />
                        <span className="footer__text footer__text_fs_14">
                            info@i-lights.ru
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
