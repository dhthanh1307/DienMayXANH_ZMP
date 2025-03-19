import { Drawer, Input } from "@components/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { setGener, setName, setPhone } from "@store/slices/informationSlice";
import { setSelectedStreet } from "@store/slices/locationSlice";
import { DrawerMenu } from "@type/index";
import { TabShip } from "@utilities/enum/enum";
import classNames from "classnames";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
    userGener: z.string().min(1, "Vui lòng chọn danh xưng"),
    userName: z.string().min(1, "Vui lòng nhập họ và tên"),
    userPhone: z.string()
        .min(10, "Số điện thoại phải có ít nhất 10 chữ số")
        .max(10, "Số điện thoại không hợp lệ")
        .regex(/^\d{10}$/, "Số điện thoại không hợp lệ"),
    userStreet: z.string().min(3, "Số nhà, tên đường cần ít nhất 3 ký tự"),
});

type FormData = z.infer<typeof formSchema>;

export const Infomation: FC<DrawerMenu> = ({ isOpen, onClose }) => {
    const [inputValue, setInputValue] = useState('');

    const { userName, userGener, userPhone } = useAppSelector(state => state.information);

    const { selectedDistrict, selectedStreet, selectedProvince, selectedWard } = useAppSelector(state => state.location)

    const location = [selectedWard?.name, selectedDistrict?.name, selectedProvince?.name,].filter(Boolean).join(', ');

    const [tab, setTab] = useState<string>(TabShip.Ship);

    
    const dispatch = useAppDispatch();

    const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userGener: userGener || "",
            userName: userName || "",
            userPhone: userPhone || "",
            userStreet: selectedStreet || "",
        },
    });

    const onSubmit = (data: FormData) => {
        dispatch(setGener(data.userGener));

        dispatch(setName(data.userName));

        dispatch(setPhone(data.userPhone));

        dispatch(setSelectedStreet(data.userStreet));

        onClose();
    };
    

    return (
        <Drawer isOpen={isOpen} onClose={onClose} title="Thông tin giao hàng">
            <form onSubmit={handleSubmit(onSubmit)} className="border px-3 pb-6">
                <div className="py-3  font-bold text-blackgray">Thông tin người đặt</div>
                <div className="flex flex-wrap gap-2  pb-3   ">
                    <div className="flex w-full items-center gap-2">
                        <input type="radio" className="size-4" value="Anh" {...register("userGener")} />
                        <span>Anh</span>
                        <input type="radio" className="ms-4 size-4" value="Chị" {...register("userGener")} />
                        <span>Chị</span>
                    </div>
                    <div className="w-full">
                        {errors.userGener && <p className="text-sm text-red">{errors.userGener.message}</p>}

                    </div>

                </div>
                <div className="space-y-2">
                    <Input id="name" label="Họ và tên" {...register("userName")} value={watch("userName")} />
                    {errors.userName && <p className="text-sm text-red">{errors.userName.message}</p>}
                    <Input id="phone" label="Số điện thoại" {...register("userPhone")} value={watch("userPhone")} />
                    {errors.userPhone && <p className="text-sm text-red">{errors.userPhone.message}</p>}
                </div>
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
                        <Input id="street" label="Nhập số nhà, tên đường"  {...register("userStreet")} value={watch("userStreet")} />
                        {errors.userStreet && <p className="text-sm text-red">{errors.userStreet.message}</p>}
                    </div>) :
                        (<div className="my-4 flex gap-3 bg-yellow-50 p-2.5 text-blackgray">
                            <i className="receive-at-store__error--icon" />
                            <div>
                                <div>Giỏ hàng đang có sản phẩm không hỗ trợ nhận hàng tại siêu thị</div>
                                <li>Điều hòa Nagakawa Inverter 9000 BTU NIS-C09R2T28</li>
                                <div>Vui lòng chọn <span className="text-navi">Giao tận nơi</span> để đặt hàng</div>
                            </div>
                        </div>)}
                {tab === TabShip.Ship &&
                    (<div className="flex items-center space-x-1 p-3 ">
                        <input type="checkbox" className="size-4" />
                        <span>Người khác nhận hàng</span>
                    </div>)
                }
                <div className="flex-grow" />
                <div className="w-full px-2.5">
                    <button type="submit" className="mb-10 w-full rounded-lg bg-navi p-2.5 text-center text-white">
                        Xác nhận
                    </button>
                </div>
            </form>

        </Drawer>
    );
};


