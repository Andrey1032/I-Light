import React from "react";
import img from "../../assets/files/home-slider.png";

export default function Slider({ dataSlides, slideNumber }) {
    return (
        <div className="slider">
            <div
                className="slider__list"
                style={{ transform: `translateX(-${slideNumber * 100}%)` }}
            >
                {dataSlides?.map((slide, slide_id) => (
                    <div key={slide_id} className="slider__item">
                        <img src={img} alt="slider-img" />{" "}
                    </div>
                ))}
            </div>
            <div className="slider__markers">
                {dataSlides?.map((slide, slide_id) => (
                    <span
                        key={`line-${slide_id}`}
                        className={
                            slide_id === 0
                                ? "slider__line active"
                                : "slider__line"
                        }
                        style={{
                            transform: `translateX(${slideNumber * 100}%)`,
                        }}
                    ></span>
                ))}
            </div>
        </div>
    );
}
