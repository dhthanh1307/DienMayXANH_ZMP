import { Input } from "@components/index";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { setGener, setName, setPhone } from "@store/slices/informationSlice";
import { setSelectedStreet } from "@store/slices/locationSlice";
import { RootState } from "@store/store";
import { DrawerMenu } from "@type/index";
import classNames from "classnames";
import React, { FC, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";


export const Infomation: FC<DrawerMenu> = ({ isOpen, onClose }) => {
    const [inputValue, setInputValue] = useState('');
    const { userName, userGener, userPhone } = useSelector((state: RootState) => state.information);
    const { selectedDistrict, selectedStreet, selectedProvince, selectedWard } = useSelector((state: RootState) => state.location)
    const location = [selectedWard?.name, selectedDistrict?.name, selectedProvince?.name,].filter(Boolean).join(', ');
    const [tab, setTab] = useState<string>('giao');
    const [tempUserName, setTempUserName] = useState(userName);
    const [tempUserPhone, setTempUserPhone] = useState(userPhone);
    const [tempStreet, setTempStreet] = useState(selectedStreet);
    const [tempUserGener, setTempUserGener] = useState(userGener);
    const [errors, setErrors] = useState<{ userName: string, userPhone: string, userStreet: string, userGener: string }>({ userName: "", userPhone: "", userStreet: "", userGener: "" });
    const dispatch = useAppDispatch();

    const handleConfirm = () => {
        let newErrors = { userName: "", userPhone: "", userStreet: "", userGener: "" };
        if (!tempUserGener) {
            newErrors.userGener = "Vui lòng chọn danh xưng";
        }
        if (!tempUserName.trim()) {
            newErrors.userName = "Vui lòng nhập họ và tên"
        }
        if (!tempUserPhone.trim()) {
            newErrors.userPhone = "Vui lòng nhập số điện thoại";
        } else if (!tempUserPhone.match(/^\d{10}$/)) {
            newErrors.userPhone = "Số điện thoại không hợp lệ";
        }
        if (!tempStreet.trim()) {
            newErrors.userStreet = "Vui lòng nhập số nhà, tên đường";
        } else if (!/^.{3,}$/.test(tempStreet)) {
            newErrors.userStreet = "Số nhà, tên đường cần ít nhất 3 kí tự";
        }
        if (Object.values(newErrors).some((error) => error !== "")) {
            setErrors(newErrors);
            return;
        }

        setErrors({ userName: "", userPhone: "", userStreet: "", userGener: "" });
        dispatch(setName(tempUserName));
        dispatch(setPhone(tempUserPhone));
        dispatch(setSelectedStreet(tempStreet));
        dispatch(setGener(tempUserGener));
        onClose();

    };
    return (
        <div className={`fixed right-0 top-0 z-50 h-full w-full  bg-white 
                transition-transform duration-300 ease-in-out text-14 flex flex-col
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex items-center justify-between px-2">
                <span className="p-2.5 text-16 font-bold text-center mx-auto">Thông tin giao hàng
                </span>
                <img onClick={() => onClose()} className="size-4" src="https://cdn-icons-png.flaticon.com/512/106/106830.png" />
            </div>
            <div className="border pb-6 px-3">
                <div className="font-bold  py-3 text-blackgray">Thông tin người đặt</div>
                <div className="gap-2 flex flex-wrap  pb-3   ">
                    <div className="w-full gap-2 flex items-center">
                        <input type="radio" name="gener" className="size-4" checked={tempUserGener === "Anh"} onChange={() => setTempUserGener("Anh")} />
                        <span>Anh</span>
                        <input type="radio" name="gener" className="size-4 ms-4" checked={tempUserGener === "Chị"} onChange={() => setTempUserGener("Chị")} />
                        <span>Chị</span>
                    </div>
                    <div className="w-full">
                        {errors.userGener && <p className="text-red text-sm">{errors.userGener}</p>}

                    </div>

                </div>
                <div className="space-y-2 px">
                    <Input id="name" label="Họ và tên" value={tempUserName} onChange={(e) => setTempUserName(e.target.value)} />
                    {errors.userName && <p className="text-red text-sm">{errors.userName}</p>}
                    <Input id="phone" label="Số điện thoại" value={tempUserPhone} onChange={(e) => setTempUserPhone(e.target.value)} />
                    {errors.userPhone && <p className="text-red text-sm">{errors.userPhone}</p>}
                </div>
            </div>
            <div className="border-y-4 border  border-softgray px-3">
                <div className="font-bold  py-3 text-blackgray">Chọn hình thức giao hàng</div>
                <div className="flex gap-2 text-center ">
                    <div onClick={() => setTab("giao")} className={classNames("p-2.5 flex justify-center items-center gap-2 w-1/2  border rounded-lg", { "border-navi  bg-lightblue": tab === "giao" })}>
                        <i className="iconcart-label-giaotannoi" />
                        Giao tận nơi
                    </div>
                    <div onClick={() => setTab("nhan")} className={classNames("p-2.5 gap-2 flex justify-center items-center w-1/2  border rounded-lg", { "border-navi  bg-lightblue": tab === "nhan" })}>
                        <i className="iconcart-label-nhantaisieuthi" />
                        Nhận tại siêu thị
                    </div>
                </div>
                {tab === "giao" ? (<div className="space-y-2 py-4">
                    <Input id="location" label="Chọn Tỉnh/Thành-Quận/Huyện-Phường/Xã" value={location} onChange={(e) => setInputValue(e.target.value)} />
                    <Input id="street" label="Nhập số nhà, tên đường" value={tempStreet} onChange={(e) => setTempStreet(e.target.value)} />
                    {errors.userStreet && <p className="text-red text-sm">{errors.userStreet}</p>}
                </div>) :
                    (<div className="bg-yellow-50 p-2.5 flex gap-3 text-blackgray my-4">
                        <i className="receive-at-store__error--icon" />
                        <div>
                            <div>Giỏ hàng đang có sản phẩm không hỗ trợ nhận hàng tại siêu thị</div>
                            <li>Điều hòa Nagakawa Inverter 9000 BTU NIS-C09R2T28</li>
                            <div>Vui lòng chọn <span className="text-navi">Giao tận nơi</span> để đặt hàng</div>
                        </div>
                    </div>)}
            </div>
            {tab === "giao" &&
                (<div className="p-3 space-x-1 flex items-center ">
                    <input type="checkbox" className="size-4" />
                    <span>Người khác nhận hàng</span>
                </div>)
            }
            <div className="flex-grow"></div>
            <div onClick={() => { handleConfirm(); }} className="text-white p-2.5 bg-navi mx-2.5 rounded-lg text-center mb-10">
                Xác nhận
            </div>
        </div>
    );
};
