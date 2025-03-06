import React, { FC, useRef } from "react";
import { Swiper } from "zmp-ui";
import { SwiperRefObject } from "zmp-ui/swiper";
export const ImageView: FC<{ images: string[] }> = ({ images }) => {
    const swiperRef = useRef<SwiperRefObject>(null);

    return (
        <div className="m-2">
            <div className="relative h-240">
                <Swiper ref={swiperRef} dots={false} loop={true}>
                    {images.map((image, index) => (
                        <Swiper.Slide key={index} className="flex items-center justify-center">
                            <img src={image} alt={`Slide ${index}`} className="mx-auto h-240" />
                        </Swiper.Slide>
                    ))}
                </Swiper>

                <button
                    type="button"
                    onClick={() => swiperRef.current?.next()}
                    className="absolute top-1/3 right-0 bg-opacity-50 bg-softgray p-2 m-2 rounded-3xl">
                    <img className="size-6" src="https://cdn-icons-png.flaticon.com/512/130/130884.png" />
                </button>
                <button
                    type="button"
                    onClick={() => swiperRef.current?.next()}
                    className="absolute top-1/3 left-0 bg-opacity-50 bg-softgray p-2 m-2 rounded-3xl rotate-180">
                    <img className="size-6" src="https://cdn-icons-png.flaticon.com/512/130/130884.png" />
                </button>
            </div>

            <div className="flex gap-1 p-1 ">
                {images.map((image, index) => (
                    <div key={index} className="rounded-md border-2" >
                        <img src={image} className="h-10" />
                    </div>
                ))
                }
            </div>
        </div>

    );
};