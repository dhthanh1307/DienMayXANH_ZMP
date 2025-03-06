import { Location } from "@components/Location";
import { Product } from "@product/type";
import { RootState } from "@store/store";
import React, { FC, useState } from "react";
import { useSelector } from "react-redux";

export const PricingCard: FC<{ product: Product }> = ({ product }) => {
    const [isOpenLocation, setIsOpenLocation] = useState(false);

    const { selectedDistrict, selectedProvince, selectedWard, selectedStreet } = useSelector((state: RootState) => state.location);

    return (
        <div className="mt-2 rounded-xl bg-red-600 pb-1 text-white">
            <div className="flex flex-wrap p-2">
                <div>
                    <div className="text-16 font-bold text-white">
                        Online giá rẻ quá
                    </div>
                    <div className="my-2 text-24 font-bold text-yellow-300">
                        {product.price} $
                    </div>
                    <div  >
                        <del className="text-14 text-gray-300">
                            {product.price.toLocaleString("vi-VN")} $
                        </del>
                        <span className="text-14 text-white">   (-{product.discountPercentage}%)</span>
                    </div>
                </div>
                <div className="mx-auto ms-16">
                    <span>Kết thúc sau</span>
                    <div className="my-1 flex h-2  w-180 rounded-xl bg-yellow-100 text-center text-10"
                        style={{
                            background: `linear-gradient(to right,#faeec0,  #facc15 ${(product.stock / 100) * 100}%, #e5e7eb ${(product.stock / 100) * 100}%)`,
                        }}
                    />
                    <span className="w-full text-right">Còn lại {product.stock}/100 suất</span>
                </div>
            </div>

            <div className="m-2 rounded-lg bg-gray-50">
                <div className="p-2.5 text-black">
                    <div className="text-16 font-bold"> Khuyến mãi trị giá 900.000đ</div>
                    <span className="text-14 text-gray-600" >Giá và khuyến mãi có thể kết thúc sớm hơn dự kiến </span>
                    <div className="my-2 flex items-center gap-2 text-14">
                        <div className="flex size-4 items-center justify-center rounded-2xl bg-softblue text-11 text-white">1</div>
                        <span>Tặng quạt đứng Rapido</span>
                    </div>
                    <div className="mb-2 flex items-center gap-2 text-14">
                        <div className="flex size-4 items-center justify-center rounded-2xl bg-softblue text-11 text-white">2</div>
                        <span>Miễn phí công lắp đặt</span>
                    </div>
                    <hr />
                </div>
                <div className="m-2 h-90 rounded-lg bg-yellow-100 text-red-400 ">
                    <div className="p-4">
                        <li> Không áp dụng kèm khuyến mãi khác </li>
                        <li> Không áp dụng mua buôn/mua sỉ</li>
                        <li> 1 số điện thoại mua được 2 sản phẩm</li>
                    </div>
                </div>
                {!(selectedProvince && selectedDistrict && selectedStreet && selectedWard) ?
                    (<div onClick={() => setIsOpenLocation(true)} className="mx-2 text-softblue">
                        Chọn địa chỉ để bàn giao
                    </div>) :
                    (
                        <div className="m-2.5 text-14 text-black">
                            <span className="text-16 font-bold">Thông tin vận chuyển</span>
                            <div className="mt-2">
                                <span className="font-bold text-gray-700">Giao đến: </span>
                                {[
                                    selectedStreet,
                                    selectedWard?.name,
                                    selectedDistrict?.name,
                                    selectedProvince?.name,
                                ]
                                    .filter(Boolean)
                                    .join(', ')}
                                <span className="ms-1 text-navi underline" onClick={() => setIsOpenLocation(true)}>Thay đổi</span>
                            </div>
                            <div >
                                <div className="font-bold text-gray-700">Giao tiết kiệm </div>
                                Giao từ 20h-22h, hôm nay (05/03)
                            </div>
                        </div>
                    )}
                <div className="m-2.5">
                    <div className="border-y-4 border-gray-100 py-2">
                        <span className="text-16 font-bold text-black">Ưu đãi thanh toán Online</span>
                        <span className="text-gray-400">  (Click chọn để áp dụng)</span>
                        <div className=" my-1 flex rounded-lg border p-1">
                            <input type="checkbox" className="ms-2" />
                            <div className="h-10">
                                <span className="ms-4 text-black">
                                    Giảm giá từ 50.000 đến 200.000
                                </span>
                                <p className="ms-4 text-12 text-gray-300">
                                    Sản phẩm từ giá 500.000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" text-12 text-black flex gap-1">
                        <span className="font-bold">
                            +2.945 
                        </span>
                        <span>
                             điểm tích lũy Quà tặng VIP
                        </span>
                    </div>
                    <div className=" flex h-12 gap-2 pb-4">
                        <div className=" flex w-1/2 items-center justify-center rounded-lg border border-blue-400 text-center">
                            <img className="h-10" src="https://cdn-icons-png.flaticon.com/512/5166/5166615.png" />
                            <span className="text-center text-blue-400">Thêm vào giỏ</span>
                        </div>
                        <div className="flex w-1/2 items-center p-2.5 justify-center rounded-lg bg-orange text-center">
                            <span>Mua ngay </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src="https://cdn-icons-png.flaticon.com/512/17147/17147304.png" className="size-4" />
                        <span className="text-14 text-black">Gọi đặt mua <span className="text-navi">1900 232 461</span> (8:00-21:30)</span>
                    </div>
                    <div className="flex items-center gap-1 pb-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/15524/15524222.png" className="size-4" />
                        <span className="text-14 text-navi">Siêu thị có hàng</span>
                    </div>
                </div>
            </div>
            <div className="text-black">
                <Location isOpen={isOpenLocation} onClose={() => setIsOpenLocation(false)} />
            </div>


        </div>
    );
};