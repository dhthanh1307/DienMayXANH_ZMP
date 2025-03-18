import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { fetchDistrict, fetchProvince, fetchWard } from "@store/actions/locationAction";
import { setSelectedDistrict, setSelectedProvince, setSelectedStreet, setSelectedWard } from "@store/slices/locationSlice";
import { DrawerLocation } from "@type/index";
import { TabLocation } from "@utilities/enum/enum";
import classNames from "classnames";
import React, { FC, useEffect, useState } from "react";
import { Icon } from "zmp-ui";

import { Drawer } from "./general";


export const Location: FC<DrawerLocation> = ({ isOpen, onClose }) => {
    const { provinces, wards, districts, selectedDistrict, selectedProvince, selectedWard, selectedStreet } = useAppSelector(state => state.location);

    const [tab, setTab] = useState<string>(TabLocation.Province);

    const dispatch = useAppDispatch();

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
        <Drawer isOpen={isOpen} onClose={onClose} title="Chọn địa chỉ nhận hàng">
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
                {tab === "finish" && (<span onClick={() => setTab(TabLocation.Province)} className="text-navi"> Thay đổi</span>)}
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
                        <div onClick={() => setTab(TabLocation.Province)}
                            className={classNames("w-1/3 p-2.5", { "border-b-2 border-navi bg-lightblue font-bold text-navi": tab === TabLocation.Province })}>
                            <span>Tỉnh/TP</span>
                        </div>
                        <div onClick={() => selectedProvince && setTab(TabLocation.District)}
                            className={classNames("w-1/3 p-2.5", { "border-b-2 border-navi bg-lightblue font-bold text-navi": tab === TabLocation.District })}>
                            <span className={classNames({ "text-navi": selectedProvince && tab === TabLocation.District, "text-black": selectedProvince && tab !== TabLocation.District, "text-gray1": !selectedProvince, })}>
                                Quận/Huyện
                            </span>
                        </div>
                        <div onClick={() => selectedDistrict && setTab('ward')}
                            className={classNames("w-1/3 p-2.5", { "border-b-2 border-navi bg-lightblue font-bold text-navi": tab === TabLocation.Ward })}>
                            <span className={classNames({
                                "text-navi": selectedDistrict && tab === TabLocation.Ward,
                                "text-black": selectedDistrict && tab !== TabLocation.Ward  ,
                                "text-gray1": !selectedDistrict,
                            })}>
                                Phường/Xã
                            </span>
                        </div>
                    </div>
                    {tab === TabLocation.Province ?
                        (<div className="flex h-360 w-full flex-wrap overflow-y-auto text-nowrap p-2 text-14">
                            {provinces.map((province, index) => (
                                <div className={classNames("w-1/2 border-b p-2.5", { "bg-lightblue": province === selectedProvince })} key={index}
                                    onClick={() => {
                                        dispatch(setSelectedProvince(province));

                                        dispatch(fetchDistrict(province))

                                        setTab(TabLocation.District);
                                    }
                                    }>
                                    {province.name}
                                </div>
                            ))}
                        </div>)
                        : tab === TabLocation.District ?
                            (<div className="flex max-h-[360px] w-full flex-wrap overflow-y-auto p-2 text-14">
                                {districts.map((district, index) => (
                                    <div className={classNames("w-1/2 border-b p-2.5", { "bg-lightblue": district === selectedDistrict })} key={index}
                                        onClick={() => {
                                            dispatch(setSelectedDistrict(district));

                                            dispatch(fetchWard(district));

                                            setTab(TabLocation.Ward);
                                        }}>
                                        {district.name}
                                    </div>
                                ))}
                            </div>)
                            : tab === TabLocation.Ward &&
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
        </Drawer>
    )
}