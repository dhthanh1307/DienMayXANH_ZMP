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
                    className="absolute right-0 top-1/3 m-2 rounded-3xl bg-softgray bg-opacity-50 p-2">
                    <img className="size-6" src="https://cdn-icons-png.flaticon.com/512/130/130884.png" />
                </button>
                <button
                    type="button"
                    onClick={() => swiperRef.current?.next()}
                    className="absolute left-0 top-1/3 m-2 rotate-180 rounded-3xl bg-softgray bg-opacity-50 p-2">
                    <img className="size-6" src="https://cdn-icons-png.flaticon.com/512/130/130884.png" />
                </button>
            </div>
            <div className=" w-full overflow-x-auto">
                <div className="inline-flex gap-1 p-1">
                    <div className="w-10"><img src="https://cdnv2.tgdd.vn/webmwg/2024/ContentMwg/images/icon-feature-active-min.png?v=1" className="h-10" /></div>
                    {images.map((image, index) => (
                        <div key={index} className="w-10">
                            <img src={image} className="h-10" />
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};