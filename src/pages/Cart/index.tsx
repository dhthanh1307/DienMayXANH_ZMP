import { CartInfo, CartItem } from "@components/index";
import { Infomation, Search } from "@modules/index";
import { RootState } from "@store/store";
import { cartReselector } from "@store/cartReselector";
import classNames from "classnames";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Page } from "zmp-ui";

const CartPage: React.FunctionComponent = () => {
    const { products, counts } = useSelector((state: RootState) => state.cart);

    const navigate = useNavigate();

    const total = useSelector(cartReselector);

    const { selectedDistrict, selectedProvince, selectedStreet, selectedWard } = useSelector((state: RootState) => state.location);

    const { userName, userGener, userPhone } = useSelector((state: RootState) => state.information)
    const [tab, setTab] = useState<string>("giao");

    const [isOpen, setIsOpen] = useState(false);
    const handleBuy = () => {
        if (!userName) {
            setIsOpen(true);
            return;
        }
        navigate('/payment')
    }
    return (
        <Page className="overflow-y-auto">
            <Search />
            {products.length === 0 ? (<div className="mt-24 gap-4 text-center">
                <i className="iconcart-empty mx-auto" />
                <div className="mt-2.5 w-full text-20 font-bold">Giỏ hàng trống</div>
                <div className="mt-2.5 text-14 text-blackgray">Không có sản phẩm nào trong giỏ hàng</div>
                <div className="mx-2.5 mt-24 rounded-lg bg-navi p-2.5 text-14 font-bold text-white" onClick={() => { navigate("/") }}>Về trang chủ</div>
                < div className="mt-2.5 text-12" > Khi cần trợ giúp vui lòng gọi <span className="text-navi" > 1900 232 461 </span> hoặc <span className="text-navi">028.3948.6789 </span><span className="text-blackgray">(8h00-21h30)</span></div>
            </div >)
                : (<div>

                    <div className="m-2.5 flex text-16 font-bold">
                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" /></svg>
                        <span className="mx-auto">Giỏ hàng</span>
                    </div >

                    <div className="flex">
                        <div onClick={() => setTab("giao")} className={classNames("flex gap-2 w-1/2 items-center justify-center p-3", { "rounded-tr-xl bg-white": tab === "giao" })}>
                            <input type="radio" checked={tab === "giao"} className="size-4" />
                            <span>Giao tận nơi</span>
                        </div>
                        <div onClick={() => setTab("nhan")} className={classNames("flex gap-2 w-1/2 items-center justify-center p-3", { "rounded-tl-xl bg-white": tab === "nhan" })}>
                            <input type="radio" checked={tab === "nhan"} className="size-4" />
                            <span> Nhận tại siêu thị</span>
                        </div>
                    </div>
                    <div className="bg-white px-2.5 py-3 ">
                        <div className=" flex w-full items-center justify-between rounded-lg border border-navi bg-lightblue p-2 text-14">
                            <div>
                                {userName !== "" ? (
                                    <div>
                                        <span className="font-bold">
                                            Người nhận:
                                        </span>
                                        <span> {userGener} {userName} - {userPhone}</span>
                                    </div>
                                ) : (
                                    <div className="text-navi px-1">
                                        Vui lòng cung cấp thông tin nhận hàng
                                    </div>
                                )

                                }

                                <div className="text-gray-500">
                                    <i className="iconcart-label-location" />
                                    <span>{[
                                        selectedStreet,
                                        selectedWard?.name,
                                        selectedDistrict?.name,
                                        selectedProvince?.name,
                                    ]
                                        .filter(Boolean)
                                        .join(', ')}</span>
                                </div>
                            </div>
                            <div className="w-5" onClick={()=>setIsOpen(true)}>
                                <svg className="h-5 w-5 rotate-180 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white px-2.5">
                        <div className="rounded-lg border">
                            {products.map((product, index) => (
                                <div key={index} className={classNames({ "border-b": index !== products.length - 1 })}>
                                    <CartItem product={product} count={counts[index]} />
                                </div>
                            ))
                            }
                        </div>
                        <div className="flex justify-between p-2.5 text-blackgray">
                            <span>Tạm tính ({products.length} sản phẩm):</span>
                            <span>{total.toLocaleString("vi-VN")} đ</span>
                        </div>
                    </div>
                    <div className="my-1 bg-white p-2.5">
                        <div className="py-2.5 text-16 font-bold">Thông tin nhận hàng:</div>
                        {products.map((product, index) => (
                            <CartInfo key={index} product={product} count={counts[index]} />
                        ))
                        }
                    </div >
                    <div className="my-1 bg-white px-2.5 py-4">
                        <div className="text-16 font-bold">Yêu cầu đặc biệt</div>
                        <div className="flex items-center  gap-1 py-2 text-14 text-blackgray">
                            <input type="checkbox" />
                            Xuất hóa đơn công ty
                        </div>
                        <div className="flex items-center gap-1 pb-2 text-14 text-blackgray" >
                            <input type="checkbox" />
                            Yêu cầu khác
                        </div>
                    </div>
                    <div className="my-1 bg-white px-2.5 text-blackgray">
                        <div className="flex items-center gap-1 border-b pb-3 pt-5">
                            <i className="iconcart-coupon" />
                            <div>
                                Sử dụng mã giảm giá
                            </div>
                        </div>
                        <div className="flex gap-1 border-b py-3">
                            <i className="sprire-cart-qtv-tgdd" />
                            <div>Dùng điểm Quà Tặng VIP</div>
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        <div className="flex justify-between pb-1 pt-3 text-16 font-bold text-black">
                            <div >Tổng tiền</div>
                            <div>{products.reduce((total, product, index) => total + (product.price * (100 - product.discountPercentage) / 100) * counts[index], 0).toLocaleString("vi-VN")} đ  </div>
                        </div>
                        <div className="flex justify-between pb-4 text-14 text-blackgray">
                            <div>Điểm tích lũy Quà Tặng VIP</div>
                            <div>1.000 điểm</div>
                        </div>
                    </div>
                    <div className="my-1 bg-white px-2.5 py-4">
                        <div className="text-16 font-bold">Hình thức thanh toán </div>
                        <div className="flex items-center  gap-1 py-2 text-14 text-blackgray">
                            <input type="radio" name="radio-2" className="size-4" />
                            <i className="choose-payment-default" />
                            Thanh toán tiền mặt khi nhận hàng
                        </div>
                        <div className="flex items-center gap-1 pb-2 text-14 text-blackgray" >
                            <input type="radio" name="radio-2" className="size-4" />
                            <i className="choose-payment-bank" />
                            Chuyển khoản ngân hàng
                        </div>
                        <div className="mt-2.5 flex items-center gap-1">
                            <input type="checkbox" className="size-4" />
                            <div className="text-14"> Tôi đồng ý với <span className="text-navi">Chính sách xử lý dữ liệu cá nhân</span> của điện máy xanh</div>
                        </div>
                    </div>
                    <div className="sticky bottom-0 z-10 flex  bg-white p-2.5 pb-5 ">
                        <div className="w-full">
                            <div className="text-14 text-blackgray">Cần thanh toán</div>
                            <div className="text-16 font-bold text-red">{products.reduce((total, product, index) => total + (product.price * (100 - product.discountPercentage) / 100) * counts[index], 0).toLocaleString("vi-VN")} đ</div>
                        </div>
                        <div onClick={() => handleBuy()} className="w-full rounded-lg bg-orange py-2.5 text-center text-white">Đặt hàng</div>
                    </div>
                </div>)
            }
            <Infomation isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </Page >);
};

export default CartPage;
