import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
export const DiscountSwiper: FC = () => {
    const navigate=useNavigate();

    return (
        <div className="flex h-12 items-center gap-2 overflow-x-auto bg-white">
            {[
                "https://cdnv2.tgdd.vn/mwg-static/common/Campaign/d9/2f/d92f547da2b474af28bab4130f81c292.png",
                "https://cdnv2.tgdd.vn/mwg-static/common/Campaign/81/af/81af71d1c496a1aec9b3a0486fa89d9e.png",
                "https://cdnv2.tgdd.vn/mwg-static/common/Campaign/fc/b5/fcb52b54d1230bc4da350c5640d92bc1.png",
                "https://cdnv2.tgdd.vn/mwg-static/common/Campaign/f7/42/f74227901dfae55242988fd05679d8d9.png",
            ].map((imgSrc, index) => (
                <div onClick={()=>navigate('/category')} key={index} className="w-100 flex-none">
                    <img src={imgSrc} className="mx-auto w-16" />
                </div>
            ))}
            {["Máy giặt", "Máy lọc nước", "Ti vi", "Nồi chiên"].map((text, index) => (
                <div onClick={()=>navigate('/category')} key={index} className="w-100 flex-none justify-center text-center text-12">
                    <span>{text}</span>
                </div>
            ))}
        </div>
    );
};

