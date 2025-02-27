import React, { FC } from "react";
import { Box, Swiper } from "zmp-ui";
import images from "../../mock/images.json"
export const Carousel : FC = () => {
    return (
        <div className="m-2">
            <Swiper autoplay={true}>
                {images.map((image,index) => (
                    <Swiper.Slide key={index}>
                    <img
                        className="slide-img"
                        src={image}/>
                    </Swiper.Slide>))}
            </Swiper>
        </div>
    )
};