import React, { FC } from "react";
import { Box, ImageViewer, Swiper } from "zmp-ui";
// import images from "../../mock/images.json"
export const ImageView: FC<{ images: string[] }> = ({ images }) => {
    return (
        <div className="m-2">
            <Swiper autoplay={true}>
                {images.map((image, index) => (
                    <Swiper.Slide key={index}>
                        <img
                            className="slide-img"
                            src={image} />
                    </Swiper.Slide>))}
            </Swiper>
            <div className="flex gap-1 p-1">
                {images.map((image, index) => (
                    <div key={index} className="border border-2" >
                        <img src={image} className="h-10"/>
                    </div>
                ))
                }
            </div>
        </div>

    )
};