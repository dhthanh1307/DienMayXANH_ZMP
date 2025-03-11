import { Location } from "@components/Location";
import { Product } from "@product/type";
import { addToCart } from "@store/cartReducer";
import { AppDispatch, RootState } from "@store/store";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const PricingCard: FC<{ product: Product }> = ({ product }) => {
    const [isOpenLocation, setIsOpenLocation] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { selectedDistrict, selectedProvince, selectedWard, selectedStreet } = useSelector((state: RootState) => state.location);
    const [toast, setToast] = useState(false);

    const handleAddToCart = async (product: Product) => {
        if (!selectedProvince) {
            setIsOpenLocation(true);
            setToast(true);
        }
        await dispatch(addToCart({ product }));
        setToast(true);
    }
    const handleBuy = async (product: Product) => {
        if (!selectedProvince) {
            setIsOpenLocation(true);
            return;
        }
        await handleAddToCart(product);
        navigate('/cart')
    }
    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | null = null;
        if (toast) {
            timer = setTimeout(() => setToast(false), 3000);
        }
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [toast]);
    return (
        <div className="mt-2 rounded-xl bg-red pb-1 text-white">
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
                <div className="flex-grow ms-16">
                    <span>Kết thúc sau</span>
                    <div className="my-1 w-full flex h-2  rounded-xl bg-yellow-100 text-center text-10"
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
                <div className="m-2 h-90 rounded-lg bg-yellow-100 text-red ">
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
                    <div className=" flex gap-1 text-12 text-black">
                        <span className="font-bold">
                            +2.945
                        </span>
                        <span>
                            điểm tích lũy Quà tặng VIP
                        </span>
                    </div>
                    <div className=" flex gap-2 pb-4 text-16 ">
                        <div onClick={() => handleAddToCart(product)}
                            className=" w-1/2 rounded-lg border border-blue-400 p-1 text-center">
                            <i className="icondetail-addtocart" />
                            <div className="text-center text-blue-400">Thêm vào giỏ</div>
                        </div>
                        <div onClick={() => { handleBuy(product) }} className="flex w-1/2 items-center  justify-center rounded-lg bg-orange text-center">
                            <span className="my-2.5">Mua ngay </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <i className="icondetail-hotline" />
                        <span className="text-14 text-black">Gọi đặt mua <span className="text-navi">1900 232 461</span> (8:00-21:30)</span>
                    </div>
                    <div className="flex items-center gap-1 pb-4">
                        <i className="icondetail-store" />
                        <span className="text-14 text-navi">Siêu thị có hàng</span>
                    </div>
                </div>
            </div>
            <div className="text-black">
                <Location isOpen={isOpenLocation} onClose={() => setIsOpenLocation(false)} />
            </div>
            {toast && (<div className="toast absolute top-12 right-1 h-fit rounded-lg border border-gray1 bg-white p-2.5 text-black">
                <div>
                    <i className="view-cart" />
                    <span>Đã thêm vào giỏ hàng</span>
                </div>
                <div onClick={() => navigate('/cart')} className=" rounded-lg bg-lightblue p-2.5 text-center text-16 font-bold text-navi">Xem giỏ hàng</div>
            </div>)
            }
        </div>
    );
};