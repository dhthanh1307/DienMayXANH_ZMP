import { Search } from "@modules/Search";
import { SearchView } from "@modules/SearchGridView";
import { RootState } from "@store/store";
import React, { } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Page } from "zmp-ui";

const PaymentPage: React.FunctionComponent = () => {
    const location = useLocation();
    const { selectedDistrict, selectedProvince, selectedWard, selectedStreet } = useSelector((state: RootState) => state.location)
    const { products, counts } = useSelector((state: RootState) => state.cart)
    const keyword = location.state?.keyword;
    const navigate=useNavigate();
    return (
        <Page className="overflow-y-auto">
            <Search />
            <div className="text-center text-green-600 font-bold  m-2.5">
                <i className="iconcart-thankyou-succcess" />
                ĐẶT HÀNG THÀNH CÔNG
            </div>

            <div className="w-full bg-white p-5">
                <div>
                    Cảm ơn anh <span className="font-bold">Nguyễn Văn A</span> đã cho điện máy XANH cơ hội phục vụ.
                </div>
                <div className=" bg-lightgray p-2.5 mt-3">
                    <div className="flex justify-between">
                        <div>ĐƠN HÀNG: #98987654</div>
                        <div className="space-x-2 flex">
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
                        <span className="text-16 font-bold text-red">{products.reduce((total, product, index) => total + (product.price * (100 - product.discountPercentage) / 100) * counts[index], 0).toLocaleString("vi-VN")} đ</span>
                    </li>
                </div>
                <div className="bg-lightblue mt-2 p-2.5 flex ">
                    <div className="w-fit px-2">
                        <i className="iconcart-AccumulatePoints " />
                    </div>

                    <div >Bạn tích được <span className="font-bold">1000</span> điểm cho đơn hàng này. Xem hướng dẫn dùng điểm <span className="text-navi">tại đây</span></div>
                </div>
                <div className="text-green-500 bg-green-50 border border-green-500 p-2.5 rounded-lg text-center my-2"> Đơn hàng chưa được thanh toán </div>
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
                <div className="font-bold text-white bg-[#90C8FC] p-2.5 text-center rounded-lg">Xác nhận</div>
                <div className="text-navi text-center mt-5">Xem chính sách hoàn tiền online</div>
                <div className="my-2.5 ">THỜI GIAN NHẬN HÀNG</div>
                <div className="p-2.5 my-2.5  text-14 border">
                    <div>   Giao trước 16h00 Hôm nay (11/03)</div>
                    <div className="flex gap-2">
                        <img src={products[0]?.thumbnail} className="w-12 " />
                        <div >
                            <div>{products[0]?.title} </div>
                            <div className="text-gray-400 text-12 flex gap-4">
                                <div>Màu: Trắng</div>
                                <div>Số lượng {counts[0]}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={()=>navigate('/')} className="text-navi border border-navi p-2.5 text-center">Mua thêm sản phẩm khác</div>
            </div>
        </Page>);
};

export default PaymentPage;
