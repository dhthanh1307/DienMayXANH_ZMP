import { fetchDistrict, fetchProvince, fetchWard, setSelectedDistrict, setSelectedProvince, setSelectedStreet, setSelectedWard } from "@store/locationReducer";
import { AppDispatch, RootState } from "@store/store";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "zmp-ui";

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Location: FC<DrawerProps> = ({ isOpen, onClose }) => {
    const { provinces, wards, districts, selectedDistrict, selectedProvince, selectedWard, selectedStreet } = useSelector((state: RootState) => state.location);
    const [tab, setTab] = useState<string>("province");
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchProvince());
    }, [dispatch]);

    useEffect(() => {
        if (selectedProvince !== null) {
            dispatch(fetchDistrict(selectedProvince));
        }
    }, [dispatch, selectedProvince]);

    useEffect(() => {
        if (selectedDistrict !== null) {
            dispatch(fetchWard(selectedDistrict));
        }
    }, [dispatch, selectedDistrict]);

    return (
        <div className={`fixed right-0 top-0 z-50 h-full w-full bg-white
                transition-transform duration-300 ease-in-out 
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex items-center justify-between bg-white px-2">
                <div className="p-2.5 pt-6  text-18  font-semibold">Chọn địa chỉ nhận hàng
                </div>
                <img onClick={() => onClose()} className="size-4" src="https://cdn-icons-png.flaticon.com/512/106/106830.png" />
            </div>
            <hr />
            <div className="m-2.5 ps-2">
                <span className="text-gray-400">Địa chỉ được chọn: </span>
                <span>
                    {[
                        selectedStreet,
                        selectedWard?.name,
                        selectedDistrict?.name,
                        selectedProvince?.name,
                    ]
                        .filter(Boolean)
                        .join(', ')}
                </span>
                {tab === "finish" && (<span onClick={() => setTab("province")} className="text-navi"> Thay đổi</span>)}
            </div>
            {tab === "finish" ?
                (<div className="m-2.5 bg-white ">
                    <div className=" rounded-lg border p-2">
                        <input
                            className="w-full bg-white text-14 focus:outline-none"
                            type="text"
                            placeholder="Số nhà tên đường"
                            value={selectedStreet || ""}
                            onChange={(e) => dispatch(setSelectedStreet(e.target.value))} />
                    </div>
                    <div className="h-360 pt-2 text-gray-500">
                        Vui lòng cho điện máy XANH biết số nhà, tên đường để thuận tiện giao hàng cho quý khách.
                    </div>
                    <hr className="m-2 border" />
                    <div onClick={() => onClose()} className="w-full rounded-lg bg-navi p-2 text-center text-white">Xác nhận địa chỉ</div>
                </div>) :
                (<div className="m-2">
                    <div className="m-2.5  flex items-center justify-center rounded-lg  border bg-white p-2">
                        <div >
                            <Icon icon="zi-search" size={20} />
                        </div>
                        <input
                            className="w-full  bg-white text-14 focus:outline-none"
                            type="text"
                            placeholder="Tìm nhanh tỉnh thành, quận huyện, phường xã" />
                    </div>
                    <div className="m-2.5 flex items-center justify-center gap-2 text-14">
                        <hr className="w-32" />
                        <span className="text-nowrap">Hoặc chọn</span>
                        <hr className="w-32" />
                    </div>
                    <div className="flex px-2 text-center">
                        <div onClick={() => setTab("province")}
                            className={`w-1/3 p-2.5 ${tab === "province" ? "border-b-2 border-navi bg-lightblue font-bold text-navi" : ""}`}>
                            <span>Tỉnh/TP</span>
                        </div>
                        <div onClick={() => selectedProvince && setTab("district")}
                            className={`w-1/3 p-2.5 ${tab === "district" ? "border-b-2 border-navi bg-lightblue font-bold text-navi" : ""}`}>
                            <span className={`${selectedProvince ? (tab === "district" ? "text-navi" : "text-black") : "text-gray1"}`}>
                                Quận/Huyện
                            </span>
                        </div>
                        <div onClick={() => selectedDistrict && setTab('ward')}
                            className={`w-1/3 p-2.5 ${tab === "ward" ? "border-b-2 border-navi bg-lightblue font-bold text-navi" : ""}`}>
                            <span className={`${selectedDistrict ? (tab === "ward" ? "text-navi" : "text-black") : "text-gray1"}`}>
                                Phường/Xã
                            </span>
                        </div>
                    </div>
                    {tab === "province" ?
                        (<div className="flex h-360 w-full flex-wrap overflow-y-auto text-nowrap p-2 text-14">
                            {provinces.map((province, index) => (
                                <div className={`w-1/2 border-b p-2.5  ${province === selectedProvince ? "bg-lightblue" : ""}`} key={index}
                                    onClick={() => {
                                        dispatch(setSelectedProvince(province));

                                        dispatch(fetchDistrict(province))

                                        setTab("district");
                                    }
                                    }>
                                    {province.name}
                                </div>
                            ))}
                        </div>)
                        : tab === "district" ?
                            (<div className="flex max-h-[360px] w-full flex-wrap overflow-y-auto p-2 text-14">
                                {districts.map((district, index) => (
                                    <div className={`w-1/2 border-b p-2.5
                                ${district === selectedDistrict ? "bg-lightblue" : ""}`} key={index}
                                        onClick={() => {
                                            dispatch(setSelectedDistrict(district));

                                            dispatch(fetchWard(district));

                                            setTab("ward");
                                        }}>
                                        {district.name}
                                    </div>
                                ))}
                            </div>)
                            : tab === "ward" &&
                            (<div className="flex w-full flex-wrap overflow-y-auto p-2 text-14 ">
                                {wards.map((ward, index) => (
                                    <div className="w-1/2 border-b p-2.5" key={index} onClick={() => {
                                        dispatch(setSelectedWard(ward));

                                        setTab("finish");
                                    }}>
                                        {ward.name}
                                    </div>
                                ))}
                            </div>)
                    }
                </div>)}




        </div>
    )
}