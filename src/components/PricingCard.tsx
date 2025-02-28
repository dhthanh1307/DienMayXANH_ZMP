import React, { FC } from "react";
// import { Box, Icon, Swiper } from "zmp-ui";
import { Product } from "./Product/type";
export const PricingCard: FC<{ product: Product }> = ({ product }) => {
    return (
        <div className="bg-red-600 h-12 mt-2 rounded-xl h-400 text-white">
            <div className="flex p-2">
                <div>
                    <div className="text-white text-18 font-bold">
                        Online giá rẻ quá
                    </div>
                    <div className="text-yellow-300 text-36 font-bold my-2">
                        {product.price} $
                    </div>
                    <div  >
                        <del className="text-gray-300 ">
                            {product.price.toLocaleString("vi-VN")} $
                        </del>
                        <span className="text-white">   (-{product.discountPercentage}%)</span>
                    </div>
                </div>
                <div className="ms-16 mx-auto">
                    <span>Kết thúc sau</span>
                    <div className="h-2 text-10 my-1  bg-yellow-100 w-100 rounded-xl text-center flex"
                        style={{
                            background: `linear-gradient(to right, #facc15 ${(product.stock / 100) * 100}%, #e5e7eb ${(product.stock / 100) * 100}%)`,
                        }} />
                    <span className="text-right w-full">Còn lại {product.stock}/100 suất</span>

                </div>

            </div>
            <div className="m-2 rounded-lg h-270 bg-gray-100">
                <div className="bg-yellow-100 h-90 m-2 rounded-lg text-red-400 ">
                    <div className="p-4">
                        <li> Không áp dụng kèm khuyến mãi khác </li>
                        <li> Không áp dụng mua buôn/mua sỉ</li>
                        <li> 1 số điện thoại mua được 2 sản phẩm</li>
                    </div>

                </div>
                <div className="text-softblue mx-2">
                    Chọn địa chỉ để bàn giao
                </div>
                <div className="dflex h-8 my-2">
                    <span className="text-black text-bold mx-2 font-bold">Ưu đãi thanh toán Online</span>
                    <span className="text-gray-400">  (Click chọn để áp dụng)</span>
                    <div className="flex mx-2 my-1 border p-1 rounded-lg">
                        <input type="checkbox" className="ms-2" />
                        <div className="h-10">
                            <span className="text-black ms-4">
                                Giảm giá từ 50.000 đến 200.000
                            </span>
                            <p className="text-12 text-gray-300 ms-4">
                                Sản phẩm từ giá 500.000
                            </p>
                        </div>
                    </div>
                    <div className="text-black text-12 mx-2">
                        <span className="font-bold">
                            +2.945
                        </span>
                        <span>
                            điểm tích lũy Quà tặng VIP
                        </span>
                    </div>
                    <div className="flex gap-2 h-12 mx-2 pb-4">
                        <div className=" border border-blue-400 flex text-center rounded-lg items-center justify-center w-1/2">
                            <img className="h-10" src="https://cdn-icons-png.flaticon.com/512/5166/5166615.png" />
                            <span className="text-blue-400 text-center">Thêm vào giỏ</span>
                        </div>
                        <div className="w-1/2 bg-yellow-500 rounded-lg text-center flex items-center justify-center">
                            <span>Mua ngay </span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};