import "../icon/icon.css";

import { Location } from "@components/Location"
import { Menu } from "@components/Menu";
import { RootState } from "@store/store";
import React, { FC, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Icon } from "zmp-ui";

export const Search: FC = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const [isOpenLocation, setIsOpenLocation] = useState(false);
    const { selectedDistrict, selectedProvince, selectedWard, selectedStreet } = useSelector((state: RootState) => state.location)
    const { counts } = useSelector((state: RootState) => state.cart);
    const totalCount = counts.reduce((sum, count) => sum + count, 0);

    const handleSearch = () => {
        navigate("/search", { state: { keyword } });
    };
    const handleCart = () => {
        navigate("/cart");
    }
    const handleHome = () => {
        navigate("/");
    };

    return (
        <Box className="bg-navi ">
            <div className="flex w-full justify-center space-x-1 px-2.5 py-2">
                <div className="flex-none">
                    <img onClick={() => handleHome()} className="h-8 " src="https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-The-Gioi-Di-Dong-MWG.png" />
                </div>
                <div onClick={() => setIsOpenLocation(true)} className="flex h-8 w-full flex-1  items-center justify-start rounded-2xl bg-softblue p-2 text-10 text-white ">
                    <i className="iconnewglobal-whitelocation" />
                    <input
                        className="w-full truncate bg-softblue p-1 text-10 focus:outline-none"
                        type="text"
                        value={[
                            selectedStreet,
                            selectedWard?.name,
                            selectedDistrict?.name,
                            selectedProvince?.name,
                        ]
                            .filter(Boolean)
                            .join(', ')} onChange={()=>{}} />
                    <Icon icon="zi-chevron-right" size={16} />
                </div>
                <div className="flex h-8 w-90 items-center justify-center rounded-2xl bg-softblue text-10 text-white">
                    <i className="iconnewglobal-user" />
                    <span className="text-nowrap p-1">Đăng nhập</span>
                </div>
            </div>
            <div className="flex  w-full justify-center px-2.5  pb-2">
                <div onClick={() => setIsOpenDrawer(true)} className="flex w-10 items-center justify-center rounded-l-lg bg-softgray p-2">
                    <i className="iconnewglobal-menu" />
                </div>
                <div className="flex w-full  items-center justify-center bg-white">
                    <div onClick={() => handleSearch()}><i className="icon-search m-2" /></div>
                    <input
                        className="w-full bg-white p-1 text-13 focus:outline-none"
                        type="text"
                        placeholder="Bạn tìm gì..." value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                </div>
                <div onClick={() => handleCart()} className="relative flex w-10 items-center justify-center rounded-r-lg bg-softgray">
                    {(totalCount>0)&&(<span className="cart-number">{totalCount}</span>)}
                    <i className="iconnewglobal-blackcart" />
                </div>
            </div>
            <Menu isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} />
            <Location isOpen={isOpenLocation} onClose={() => setIsOpenLocation(false)} />
        </Box>
    );
};
