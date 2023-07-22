import React from "react";
import Card from "@/Components/Card";

// depreciated version
// import { Swiper, SwiperSlide } from "swiper/react";

import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();

// import Swiper styles
import "swiper/css";

// depreciated version
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
                navigation="true"
                pagination="true"
                scrollbar="true"
                autoplay="2000"
            >
                {/* <img src={slide.image} alt={slide.profileName} /> */}
                {/* <Card data={data} className="h-24 w-24" /> */}
                {/* editing Card here for now cause idk how to put Card component */}
                {data.map((slide) => (
                    <swiper-slide key={slide.profileName}>
                        {/* need to set width to fixed LEARN THIS */}
                        <div className="mb-12 mx-1 shadow-lg brightness-75 dark:bg-gray-800 rounded-lg hover:transition hover:scale-125 object-cover hover:cursor-pointer">
                            <img
                                src={slide.image}
                                alt={slide.profileName}
                                className="rounded-lg h-56 w-full shrink-0 grow-0"
                            />
                            {/* Text div */}
                            <div className="p-2">
                                <p className="text-lg font-bold">
                                    {slide.profileName}
                                </p>
                                <a className="text-base text-blue-400 hover:cursor-pointer hover:underline">
                                    {slide.profileLink}
                                </a>
                                <p className="text-xs truncate text-gray-500">
                                    {slide.profileDescription}
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                ))}
            </swiper-container>
        </div>
    );
}
