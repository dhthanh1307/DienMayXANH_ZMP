import { Search } from "@modules/index";
import { RootState } from "@store/store";
import { cartReselector } from "@utilities/cartReselector";
import React, { } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Page } from "zmp-ui";

const PaymentPage: React.FunctionComponent = () => {
    const { selectedDistrict, selectedProvince, selectedWard, selectedStreet } = useSelector((state: RootState) => state.location)

    const { products, counts } = useSelector((state: RootState) => state.cart)

    const navigate = useNavigate();

    const total=useSelector(cartReselector)

    return (
        <Page className="overflow-y-auto">
            <Search />
            <div className="m-2.5 text-center font-bold  text-green-600">
                <i className="iconcart-thankyou-succcess" />
                ĐẶT HÀNG THÀNH CÔNG
            </div>

            <div className="w-full bg-white p-5">
                <div>
                    Cảm ơn anh <span className="font-bold">Nguyễn Văn A</span> đã cho điện máy XANH cơ hội phục vụ.
                </div>
                <div className=" mt-3 bg-lightgray p-2.5">
                    <div className="flex justify-between">
                        <div>ĐƠN HÀNG: #98987654</div>
                        <div className="flex space-x-2">
                            <span className="text-navi">Quản lý đơn hàng</span>
                            <span className="text-red">Hủy</span>
                        </div>
                    </div>

                    <li>
                        <span className="font-bold">Người nhận hàng:</span>
                        <span>Anh Nguyễn Văn A, 0967066872</span>
                    </li>
                    <li>
                        <span className="font-bold">Giao đến:</span>
                        <span>{[
                            selectedStreet,
                            selectedWard?.name,
                            selectedDistrict?.name,
                            selectedProvince?.name,
                        ]
                            .filter(Boolean)
                            .join(', ')} </span>
                    </li>
                    <li>
                        <span className="font-bold">Tổng tiền: </span>
                        <span className="text-16 font-bold text-red">{total.toLocaleString("vi-VN")} đ</span>
                    </li>
                </div>
                <div className="mt-2 flex bg-lightblue p-2.5 ">
                    <div className="w-fit px-2">
                        <i className="iconcart-AccumulatePoints " />
                    </div>

                    <div >Bạn tích được <span className="font-bold">1000</span> điểm cho đơn hàng này. Xem hướng dẫn dùng điểm <span className="text-navi">tại đây</span></div>
                </div>
                <div className="my-2 rounded-lg border border-green-500 bg-green-50 p-2.5 text-center text-green-500"> Đơn hàng chưa được thanh toán </div>
                <div className="my-1 bg-white px-2.5 py-4">
                    <div className="text-16 font-bold">Hình thức thanh toán </div>
                    <div className="flex items-center  gap-1 py-2 text-14 text-blackgray">
                        <input type="radio" name="radio-1" defaultChecked className="size-4" />
                        <i className="choose-payment-default" />
                        Thanh toán tiền mặt khi nhận hàng
                    </div>
                    <div className="flex items-center gap-1 pb-2 text-14 text-blackgray" >
                        <input type="radio" name="radio-1" className="size-4" />
                        <i className="choose-payment-bank" />
                        Chuyển khoản ngân hàng
                    </div>
                    <div className="text-navi">5 hình thức thanh toán khác</div>
                </div>
                <div className="rounded-lg bg-[#90C8FC] p-2.5 text-center font-bold text-white">Xác nhận</div>
                <div className="mt-5 text-center text-navi">Xem chính sách hoàn tiền online</div>
                <div className="my-2.5 ">THỜI GIAN NHẬN HÀNG</div>
                <div className="my-2.5 border  p-2.5 text-14">
                    <div>   Giao trước 16h00 Hôm nay (11/03)</div>
                    <div className="flex gap-2">
                        <img src={products[0]?.thumbnail} className="w-12 " />
                        <div >
                            <div>{products[0]?.title} </div>
                            <div className="flex gap-4 text-12 text-gray-400">
                                <div>Màu: Trắng</div>
                                <div>Số lượng {counts[0]}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={() => navigate('/')} className="border border-navi p-2.5 text-center text-navi">Mua thêm sản phẩm khác</div>
            </div>
        </Page>);
};

export default PaymentPage;
