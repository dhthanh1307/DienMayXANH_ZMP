import { Product } from "@components/Product/type";
import React, { FC } from "react";

export const Review: FC<{product:Product}> = ({product}) => {
    return (
        <div >
            <div className="flex my-2.5">
                <div className="w-1/2 text-center">
                    <div className="flex w-full justify-center my-1 py-2 gap-1 ">
                        <i className="iconcmt-allstar" />
                        <div className="text-36 font-bold">4.9</div>
                        <div className="text-gray-400"> /5</div>
                    </div>
                    <div className="my-1" >68,2k khách hàng hài lòng</div>
                    <div className="text-gray-500 my-1">251 đánh giá</div>
                </div>
                <div className="w-1/2 text-center">
                    <div className="flex items-center gap-1">
                        5 <i className="iconcmt-allstar" />
                        <div className="my-1  flex-grow h-2  rounded-xl text-center text-10"
                            style={{
                                background: `linear-gradient(to right,#64b2fa 80%, #e5e7eb 0%)`,
                            }} />
                        80%
                    </div>
                    <div className="flex items-center gap-1">
                        4 <i className="iconcmt-allstar" />
                        <div className="my-1  flex-grow h-2  rounded-xl text-center text-10"
                            style={{
                                background: `linear-gradient(to right,#64b2fa 20%, #e5e7eb 0%)`,
                            }} />
                        20%
                    </div>
                    <div className="flex items-center gap-1">
                        3 <i className="iconcmt-allstar" />
                        <div className="my-1  flex-grow h-2 rounded-xl text-center text-10 bg-lightgray" />
                        0%
                    </div>
                    <div className="flex items-center gap-1">
                        2 <i className="iconcmt-allstar" />
                        <div className="my-1  flex-grow h-2 rounded-xl  text-center text-10  bg-lightgray" />
                        0%
                    </div>
                    <div className="flex items-center gap-1">
                        1 <i className="iconcmt-allstar" />
                        <div className="my-1  flex-grow h-2 rounded-xl text-center text-10  bg-lightgray" />
                        0%
                    </div>
                </div>
            </div>
            {product.images.map((image, index) => (
                <img key={index} className="rounded-lg w-1/4 border" src={image} alt="" />
            ))}
            <div className="my-2.5 space-y-2 border-b py-2.5">
                <div>
                    <span className="font-bold">Ngô Văn Thùy</span>
                    <i className="iconcmt-confirm ms-2" />
                    <span className="text-red text-12">Đã mua tại ĐMX</span>
                </div>
                <div className="flex items-center ">
                    <i className="iconcmt-starbuy" />
                    <i className="iconcmt-starbuy" />
                    <i className="iconcmt-starbuy" />
                    <i className="iconcmt-starbuy" />
                    <i className="iconcmt-starbuy" />
                    <div className="border-s ms-2 ps-2">
                        <i className="iconcmt-heart" />
                        Sẽ giới thiệu cho bạn bè, người thân
                    </div>
                </div>
                <div>Nhân viên phục vụ chu đáo. Máy hoạt động ok</div>
                <div className="flex items-center text-12">
                    <div className="flex items-center">
                        <i className="iconcmt-thumpup" />
                        Hữu ích (2)
                    </div>
                    <div className="border-s ms-2 ps-2 text-gray-400">
                        Đã dùng khoảng 6 ngày
                    </div>
                </div>
            </div>
        </div>
    );
};
