import { Location } from "@components/Location"
import { Menu } from "@components/Menu";
import { RootState } from "@store/store";
import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Icon } from "zmp-ui";

export const Search: FC = () => {
    const navigate = useNavigate();

    const [keyword, setKeyword] = useState("");

    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const [isOpenLocation, setIsOpenLocation] = useState(false);

    const { selectedDistrict, selectedProvince, selectedWard, selectedStreet } = useSelector((state: RootState) => state.location)

    const handleSearch = () => {
        navigate("/search", { state: { keyword } });
    };

    const handleHome = () => {
        navigate("/");
    };

    return (
        <Box className="bg-white">
            <div className="flex h-20 flex-wrap justify-center bg-navi">
                <div className="flex w-full justify-center gap-1 py-2 mx-2.5">
                    <img onClick={() => handleHome()} className="size-8" src="https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-The-Gioi-Di-Dong-MWG.png" />
                    <div className="flex h-8 w-full items-center justify-between rounded-2xl bg-softblue p-2 text-10 text-white ">
                        <div className="flex w-full items-center" onClick={() => setIsOpenLocation(true)}>
                            <Icon icon="zi-location" size={16} />
                            <div className="mx-auto ms-1 truncate">
                                {[
                                    selectedStreet,
                                    selectedWard?.name,
                                    selectedDistrict?.name,
                                    selectedProvince?.name,
                                ]
                                    .filter(Boolean)
                                    .join(', ')}</div>
                            <Icon icon="zi-chevron-right" size={16} />
                        </div>
                    </div>
                    <div className="flex h-8 w-90 items-center justify-center rounded-2xl bg-softblue text-10 text-white">
                        <Icon icon="zi-user" size={16} />
                        <span className="text-nowrap p-1">Đăng nhập</span>
                    </div>
                </div>
                <div className="flex h-9 w-full justify-center px-2.5 pb-2">
                    <div onClick={() => setIsOpenDrawer(true)} className="flex w-10 items-center justify-center rounded-l-lg bg-softgray">
                        <img src="https://cdn-icons-png.flaticon.com/512/2889/2889278.png"/>
                    </div>
                    <div className="flex w-full  items-center justify-center bg-white">
                        <div onClick={() => handleSearch()}><Icon icon="zi-search" size={16} /></div>
                        <input
                            className="w-full p-1 text-10 focus:outline-none"
                            type="text"
                            placeholder="Bạn tìm gì..." value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                    </div>
                    <div className="flex w-10 justify-center rounded-r-lg bg-softgray">
                        <img src="https://cdn-icons-png.flaticon.com/512/5166/5166615.png" />
                    </div>
                </div>
            </div>
            <Menu isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} />
            <Location isOpen={isOpenLocation} onClose={() => setIsOpenLocation(false)} />
        </Box>
    );
};
