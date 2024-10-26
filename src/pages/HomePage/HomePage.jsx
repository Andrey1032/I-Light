import React, { useState } from "react";
import Slider from "../../components/Slider/Slider";

import img from "../../assets/files/home-slider.png";
import { ABOUT_COMPANY_ROUTE } from "../../utils/consts";
import { Link } from "react-router-dom";
import Accordion from "../../components/Accordion/Accordion";

export default function HomePage() {
    const dataSlides = [img, img, img];
    const [slideNumber, setSlideNumber] = useState(0);
    const [dataCatalog] = useState([
        {
            title: "Трековые светильники",
            decription:
                "Органично вписываются в интерьеры в стиле хай-тек, лофт ",
        },
        {
            title: "Встраиваемые светильники",
            decription:
                "Органично вписываются в интерьеры в стиле хай-тек, лофт ",
        },
        {
            title: "Фигурные светильники",
            decription:
                "Органично вписываются в интерьеры в стиле хай-тек, лофт ",
        },
        {
            title: "Светильники Армстронг",
            decription:
                "Органично вписываются в интерьеры в стиле хай-тек, лофт ",
        },
        {
            title: "Светильники Армстронг с равномерной засветкой",
            decription:
                "Органично вписываются в интерьеры в стиле хай-тек, лофт ",
        },
    ]);
    const [dataServices] = useState([
        {
            icon: require("../../assets/files/forSections/icon-1.png"),
            title: "Изготовление счетильников для торгового и общественного освещени",
            decription:
                "Мы ценим Ваше время, поэтому, коротко о главном.Наша компания была образована с целью предложить Российскому рынку профессиональные светотехнические решения для освещения магазинов, офисов и объектов общественно-развлекательного назначения. Сегодня мы поставляем осветительное оборудование различных ценовых категорий из стран Юго-Восточной Азии и Европы, а так же являемся дистрибьюторами лучших Российских производителей. А среди наших клиентов, сетевые и частные магазины одежды и обуви, продуктовые магазины, торговые и офисные центры, представители индустрии красоты и здоровья, кафе, рестораны, отели, коттеджные поселки и частные заказчики.",
        },
        {
            icon: require("../../assets/files/forSections/icon-2.png"),
            title: "Поставки дизайнерского света от ведущих европейских производителей",
            decription:
                "Мы ценим Ваше время, поэтому, коротко о главном.Наша компания была образована с целью предложить Российскому рынку профессиональные светотехнические решения для освещения магазинов, офисов и объектов общественно-развлекательного назначения. Сегодня мы поставляем осветительное оборудование различных ценовых категорий из стран Юго-Восточной Азии и Европы, а так же являемся дистрибьюторами лучших Российских производителей. А среди наших клиентов, сетевые и частные магазины одежды и обуви, продуктовые магазины, торговые и офисные центры, представители индустрии красоты и здоровья, кафе, рестораны, отели, коттеджные поселки и частные заказчики.",
        },
        {
            icon: require("../../assets/files/forSections/icon-3.png"),
            title: "Проектирование, светотехнические расчеты и разработка концепции освещения",
            decription:
                "Мы ценим Ваше время, поэтому, коротко о главном.Наша компания была образована с целью предложить Российскому рынку профессиональные светотехнические решения для освещения магазинов, офисов и объектов общественно-развлекательного назначения. Сегодня мы поставляем осветительное оборудование различных ценовых категорий из стран Юго-Восточной Азии и Европы, а так же являемся дистрибьюторами лучших Российских производителей. А среди наших клиентов, сетевые и частные магазины одежды и обуви, продуктовые магазины, торговые и офисные центры, представители индустрии красоты и здоровья, кафе, рестораны, отели, коттеджные поселки и частные заказчики.",
        },
        {
            icon: require("../../assets/files/forSections/icon-4.png"),
            title: "Модернизация светильников",
            decription:
                "Мы ценим Ваше время, поэтому, коротко о главном.Наша компания была образована с целью предложить Российскому рынку профессиональные светотехнические решения для освещения магазинов, офисов и объектов общественно-развлекательного назначения. Сегодня мы поставляем осветительное оборудование различных ценовых категорий из стран Юго-Восточной Азии и Европы, а так же являемся дистрибьюторами лучших Российских производителей. А среди наших клиентов, сетевые и частные магазины одежды и обуви, продуктовые магазины, торговые и офисные центры, представители индустрии красоты и здоровья, кафе, рестораны, отели, коттеджные поселки и частные заказчики.",
        },
        {
            icon: require("../../assets/files/forSections/icon-5.png"),
            title: "Ремонт светодиодных светильников",
            decription:
                "Мы ценим Ваше время, поэтому, коротко о главном.Наша компания была образована с целью предложить Российскому рынку профессиональные светотехнические решения для освещения магазинов, офисов и объектов общественно-развлекательного назначения. Сегодня мы поставляем осветительное оборудование различных ценовых категорий из стран Юго-Восточной Азии и Европы, а так же являемся дистрибьюторами лучших Российских производителей. А среди наших клиентов, сетевые и частные магазины одежды и обуви, продуктовые магазины, торговые и офисные центры, представители индустрии красоты и здоровья, кафе, рестораны, отели, коттеджные поселки и частные заказчики.",
        },
    ]);
    return (
        <div className="home-page">
            <section className="home-page__section-head section-head">
                <div className="section-head__content">
                    <p className="section-head__title">
                        <span className="section-head__name-company">
                            i-lights
                        </span>{" "}
                        - Эффективные решения
                    </p>
                    <div className="section-head__description">
                        Компания I-lights это современная
                        производственно-проектная организация с многолентим
                        опытом работы в сфере разработки
                    </div>
                    <Link
                        to={ABOUT_COMPANY_ROUTE}
                        className="section-head__link"
                    >
                        Подробнее
                    </Link>
                </div>
                <div className="section-head__arrows">
                    <button
                        className="section-head__arrow"
                        onClick={() =>
                            setSlideNumber((slideNumber) =>
                                slideNumber > 0 ? slideNumber - 1 : slideNumber
                            )
                        }
                    >
                        <svg
                            width="7"
                            height="11"
                            viewBox="0 0 7 11"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.55868e-08 5.5L5.5 1.78873e-08L7 1.5L3 5.5L7 9.5L5.4 11L6.55868e-08 5.5Z"
                                fill="#535353"
                            />
                        </svg>
                    </button>
                    <button
                        className="section-head__arrow"
                        onClick={() =>
                            setSlideNumber((slideNumber) =>
                                slideNumber < dataSlides.length - 1
                                    ? slideNumber + 1
                                    : slideNumber
                            )
                        }
                    >
                        <svg
                            width="7"
                            height="11"
                            viewBox="0 0 7 11"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 5.5L1.5 11L1.78873e-08 9.5L4 5.5L1.13286e-07 1.5L1.6 1.90798e-08L7 5.5Z"
                                fill="#535353"
                            />
                        </svg>
                    </button>
                </div>
                <Slider dataSlides={dataSlides} slideNumber={slideNumber} />
            </section>

            <section className="section">
                <p className="section__title title">Каталог</p>
                <div className="section__content">
                    <Accordion data={dataCatalog} button={true}></Accordion>
                    <table className="section__images">
                        <tr>
                            <td className="section__img"></td>
                            <td className="section__img section__img_center">
                                <Link className="section__img-link">Arco</Link>
                            </td>
                            <td className="section__img"></td>
                        </tr>
                        <tr>
                            <td className="section__img">
                                <Link className="section__img-link">Evo M</Link>
                            </td>
                            <td className="section__img section__img_center">
                                <Link className="section__img-link">Evo L</Link>
                            </td>
                            <td className="section__img">
                                <Link className="section__img-link">Alfa</Link>
                            </td>
                        </tr>
                    </table>
                </div>
            </section>
            <section className="section">
                <p className="section__title title">Услуги</p>
                <div className="section__content services">
                    <Accordion
                        data={dataServices}
                        icon={true}
                        checker={true}
                    ></Accordion>
                </div>
            </section>
            <section className="section">
                <p className="section__title title">Новинки</p>
            </section>
        </div>
    );
}
