import { CartInfo, CartItem } from "@components/index";
import { useAppSelector } from "@hooks/useAppSelector";
import { Infomation, Search } from "@modules/index";
import { cartReselector } from "@store/reselector/cartReselector";
import { TabShip } from "@utilities/enum/enum";
import classNames from "classnames";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Page } from "zmp-ui";

export const CartPage: React.FunctionComponent = () => {
    const { products, counts } = useAppSelector(state => state.cart);

    const navigate = useNavigate();

    const total = useSelector(cartReselector);

    const { selectedDistrict, selectedProvince, selectedStreet, selectedWard } = useAppSelector(state => state.location);

    const { userName, userGener, userPhone } = useAppSelector(state => state.information)

    const [tab, setTab] = useState<string>(TabShip.Ship);

    const [isOpen, setIsOpen] = useState(false);

    const handleBuy = () => {
        if (!userName) {
            setIsOpen(true);

            return;
        }

        navigate('/payment')
    }

    return (
        <Page className="h-full">

            <Search />
            {products.length === 0 ?
                (<div className="mt-24 gap-4 text-center">
                    <i className="iconcart-empty mx-auto" />
                    <div className="mt-2.5 w-full text-20 font-bold">Giỏ hàng trống</div>
                    <div className="mt-2.5 text-14 text-blackgray">Không có sản phẩm nào trong giỏ hàng</div>
                    <div className="mx-2.5 mt-24 rounded-lg bg-navi p-2.5 text-14 font-bold text-white" onClick={() => { navigate("/") }}>Về trang chủ</div>
                    < div className="mt-2.5 text-12" > Khi cần trợ giúp vui lòng gọi <span className="text-navi" > 1900 232 461 </span> hoặc <span className="text-navi">028.3948.6789 </span><span className="text-blackgray">(8h00-21h30)</span></div>
                </div >)
                : (
                    <Box >
                        <div className="m-2.5   flex text-16 font-bold">
                            <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" /></svg>
                            <span className="mx-auto">Giỏ hàng</span>
                        </div >

                        <div className="flex">
                            <div onClick={() => setTab(TabShip.Ship)} className={classNames("flex gap-2 w-1/2 items-center justify-center p-3", { "rounded-tr-xl bg-white": tab === TabShip.Ship })}>
                                <input type="radio" checked={tab === TabShip.Ship} className="size-4" />
                                <span>Giao tận nơi</span>
                            </div>
                            <div onClick={() => setTab(TabShip.Recive)} className={classNames("flex gap-2 w-1/2 items-center justify-center p-3", { "rounded-tl-xl bg-white": tab === TabShip.Recive })}>
                                <input type="radio" checked={tab === TabShip.Recive} className="size-4" />
                                <span> Nhận tại siêu thị</span>
                            </div>
                        </div>
                        <div onClick={() => setIsOpen(true)} className="bg-white px-2.5 py-3 ">
                            <div className=" flex w-full items-center justify-between rounded-lg border border-navi bg-lightblue p-2 text-14">
                                <div onClick={() => setIsOpen(true)}>
                                    {userName !== "" ? (
                                        <div>
                                            <span className="font-bold">
                                                Người nhận:
                                            </span>
                                            <span> {userGener} {userName} - {userPhone}</span>
                                        </div>
                                    ) : (
                                        <div className="px-1 text-navi">
                                            Vui lòng cung cấp thông tin nhận hàng
                                        </div>
                                    )}

                                    <div className="text-gray-500">
                                        <i className="iconcart-label-location" />
                                        <span>{[
                                            selectedStreet,
                                            selectedWard?.name,
                                            selectedDistrict?.name,
                                            selectedProvince?.name,
                                        ].filter(Boolean).join(', ')}</span>
                                    </div>
                                </div>
                                <div className="w-5" >
                                    <svg className="h-5 w-5 rotate-180 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden bg-white px-2.5">
                            <div className="rounded-lg border">
                                {/* {products.map((product, index) => (
                                    <div key={index} className={classNames({ "border-b": index !== products.length - 1 })}>
                                        <CartItem product={product} count={counts[index]} />
                                    </div>
                                ))} */}
                            </div>
                            <div className="flex justify-between p-2.5 text-blackgray">
                                <span>Tạm tính ({products.length} sản phẩm):</span>
                                <span>{total.toLocaleString("vi-VN")} đ</span>
                            </div>
                        </div>
                        <div className="my-1 bg-white p-2.5 ">
                            <div className="py-2.5 text-16 font-bold">Thông tin nhận hàng:</div>
                            {/* <div className="flex gap-2 flex-col">
                                {products.map((product, index) => (
                                    <CartInfo key={index} product={product} count={counts[index]} />
                                ))}
                            </div> */}
                        </div >
                        <div className="my-1 bg-white px-2.5 py-4">
                            <div className="text-16 font-bold">Yêu cầu đặc biệt</div>
                            <label className="flex items-center  gap-1 py-2 text-14 text-blackgray">
                                <input type="checkbox" />
                                Xuất hóa đơn công ty
                            </label>
                            <label className="flex items-center gap-1 pb-2 text-14 text-blackgray" >
                                <input type="checkbox" />
                                Yêu cầu khác
                            </label>
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
                                <label className="inline-flex cursor-pointer items-center ms-2">
                                    <input type="checkbox" value="" className="peer sr-only" />
                                    <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-checked:bg-blue-600 " />
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
                            <label className="flex items-center  gap-1 py-2 text-14 text-blackgray">
                                <input type="radio" name="radio-2" className="size-4" />
                                <i className="choose-payment-default" />
                                Thanh toán tiền mặt khi nhận hàng
                            </label>
                            <label className="flex items-center gap-1 pb-2 text-14 text-blackgray" >
                                <input type="radio" name="radio-2" className="size-4" />
                                <i className="choose-payment-bank" />
                                Chuyển khoản ngân hàng
                            </label>
                            <label className="mt-2.5 flex items-center gap-1">
                                <input type="checkbox" className="size-4" />
                                <div className="text-14"> Tôi đồng ý với <span className="text-navi">Chính sách xử lý dữ liệu cá nhân</span> của điện máy xanh</div>
                            </label>
                        </div>
                        <Infomation isOpen={isOpen} onClose={() => setIsOpen(false)} />
                        <div className="sticky bottom-0 left-0 z-10 flex w-full bg-white p-2.5 pb-5 ">
                            <div className="w-full">
                                <div className="text-14 text-blackgray">Cần thanh toán</div>
                                <div className="text-16 font-bold text-red">{products.reduce((total, product, index) => total + (product.price * (100 - product.discountPercentage) / 100) * counts[index], 0).toLocaleString("vi-VN")} đ</div>
                            </div>
                            <div onClick={() => handleBuy()} className="w-full rounded-lg bg-orange py-2.5 text-center text-white">Đặt hàng</div>
                        </div>
                    </Box>)

            }

        </Page >);
};

export default CartPage;
