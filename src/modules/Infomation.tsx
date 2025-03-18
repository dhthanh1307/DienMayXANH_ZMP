import { Drawer, Input } from "@components/index";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { setGener, setName, setPhone } from "@store/slices/informationSlice";
import { setSelectedStreet } from "@store/slices/locationSlice";
import { DrawerMenu } from "@type/index";
import { TabShip } from "@utilities/enum/enum";
import classNames from "classnames";
import React, { FC, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";


export const Infomation: FC<DrawerMenu> = ({ isOpen, onClose }) => {
    const [inputValue, setInputValue] = useState('');

    const { userName, userGener, userPhone } = useAppSelector(state => state.information);

    const { selectedDistrict, selectedStreet, selectedProvince, selectedWard } = useAppSelector(state => state.location)

    const location = [selectedWard?.name, selectedDistrict?.name, selectedProvince?.name,].filter(Boolean).join(', ');

    const [tab, setTab] = useState<string>(TabShip.Ship);

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
        <Drawer isOpen={isOpen} onClose={onClose} title="Thông tin giao hàng">
            <div className="border px-3 pb-6">
                <div className="py-3  font-bold text-blackgray">Thông tin người đặt</div>
                <div className="flex flex-wrap gap-2  pb-3   ">
                    <div className="flex w-full items-center gap-2">
                        <input type="radio" name="gener" className="size-4" checked={tempUserGener === "Anh"} onChange={() => setTempUserGener("Anh")} />
                        <span>Anh</span>
                        <input type="radio" name="gener" className="ms-4 size-4" checked={tempUserGener === "Chị"} onChange={() => setTempUserGener("Chị")} />
                        <span>Chị</span>
                    </div>
                    <div className="w-full">
                        {errors.userGener && <p className="text-sm text-red">{errors.userGener}</p>}

                    </div>

                </div>
                <div className="px space-y-2">
                    <Input id="name" label="Họ và tên" value={tempUserName} onChange={(e) => setTempUserName(e.target.value)} />
                    {errors.userName && <p className="text-sm text-red">{errors.userName}</p>}
                    <Input id="phone" label="Số điện thoại" value={tempUserPhone} onChange={(e) => setTempUserPhone(e.target.value)} />
                    {errors.userPhone && <p className="text-sm text-red">{errors.userPhone}</p>}
                </div>
            </div>
            <div className="border border-y-4  border-softgray px-3">
                <div className="py-3  font-bold text-blackgray">Chọn hình thức giao hàng</div>
                <div className="flex gap-2 text-center ">
                    <div onClick={() => setTab(TabShip.Ship)} className={classNames("p-2.5 flex justify-center items-center gap-2 w-1/2  border rounded-lg", { "border-navi  bg-lightblue": tab === TabShip.Ship })}>
                        <i className="iconcart-label-giaotannoi" />
                        Giao tận nơi
                    </div>
                    <div onClick={() => setTab(TabShip.Recive)} className={classNames("p-2.5 gap-2 flex justify-center items-center w-1/2  border rounded-lg", { "border-navi  bg-lightblue": tab === TabShip.Recive })}>
                        <i className="iconcart-label-nhantaisieuthi" />
                        Nhận tại siêu thị
                    </div>
                </div>
                {tab === TabShip.Ship ? (<div className="space-y-2 py-4">
                    <Input id="location" label="Chọn Tỉnh/Thành-Quận/Huyện-Phường/Xã" value={location} onChange={(e) => setInputValue(e.target.value)} />
                    <Input id="street" label="Nhập số nhà, tên đường" value={tempStreet} onChange={(e) => setTempStreet(e.target.value)} />
                    {errors.userStreet && <p className="text-sm text-red">{errors.userStreet}</p>}
                </div>) :
                    (<div className="my-4 flex gap-3 bg-yellow-50 p-2.5 text-blackgray">
                        <i className="receive-at-store__error--icon" />
                        <div>
                            <div>Giỏ hàng đang có sản phẩm không hỗ trợ nhận hàng tại siêu thị</div>
                            <li>Điều hòa Nagakawa Inverter 9000 BTU NIS-C09R2T28</li>
                            <div>Vui lòng chọn <span className="text-navi">Giao tận nơi</span> để đặt hàng</div>
                        </div>
                    </div>)}
            </div>
            {tab === TabShip.Ship &&
                (<div className="flex items-center space-x-1 p-3 ">
                    <input type="checkbox" className="size-4" />
                    <span>Người khác nhận hàng</span>
                </div>)
            }
            <div className="flex-grow" />
            <div onClick={() => { handleConfirm(); }} className="mx-2.5 mb-10 rounded-lg bg-navi p-2.5 text-center text-white">
                Xác nhận
            </div>
        </Drawer>
    );
};
