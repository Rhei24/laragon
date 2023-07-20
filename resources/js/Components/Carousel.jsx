import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();

// import Swiper styles
import "swiper/css";
/*
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { effectCoverflow, Pagination, Navigation } from "swiper";
*/

export default function Carousel({ className = "", data }) {
    return (
        <div className={"" + className}>
            <swiper-container
                slides-per-view="3"
                speed="500"
                loop="true"
                css-mode="true"
            >
                {data.map((slide) => (
                    <swiper-slide key={slide.profileName}>
                        <img src={slide.image} alt={slide.profileName} />
                    </swiper-slide>
                ))}

                <swiper-slide>2</swiper-slide>
                <swiper-slide>3</swiper-slide>
                <swiper-slide>4</swiper-slide>
                <swiper-slide>5</swiper-slide>
            </swiper-container>
        </div>
    );
}
