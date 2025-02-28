import React, { FC } from "react";
import { Swiper } from "zmp-ui";
export const Discount: FC = () => {
    return (
        <Swiper loop={false}
            autoplay={true}
            className="w-full bg-white">
            <Swiper.Slide key={"slide-1"}>
                <div className="w-full h-12 flex justify-center items-center">
                    {[
                        "https://cdnv2.tgdd.vn/mwg-static/common/Campaign/d9/2f/d92f547da2b474af28bab4130f81c292.png",
                        "https://cdnv2.tgdd.vn/mwg-static/common/Campaign/81/af/81af71d1c496a1aec9b3a0486fa89d9e.png",
                        "https://cdnv2.tgdd.vn/mwg-static/common/Campaign/fc/b5/fcb52b54d1230bc4da350c5640d92bc1.png",
                        "https://cdnv2.tgdd.vn/mwg-static/common/Campaign/f7/42/f74227901dfae55242988fd05679d8d9.png",
                    ].map((imgSrc, index) => (
                        <div className="flex mx-4" key={index}>
                            <img  src={imgSrc} className="w-16 h-8 mx-auto" alt={`image-${index}`} />
                        </div>
                    ))}
                </div>

            </Swiper.Slide>

            <Swiper.Slide key={"slide-2"} className="w-full h-13 flex justify-center items-center pt-3 ">
                {["Máy giặt", "Máy lọc nước", "Ti vi", "Nồi chiên"].map((text, index) => (
                        <span key={index} className="w-16 mx-4">{text}</span>
                ))}
            </Swiper.Slide>

        </Swiper>
    );
};

