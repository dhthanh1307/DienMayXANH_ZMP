import "../css/icon.css";

import { Location, Menu } from "@components/index";
import { useAppSelector } from "@hooks/useAppSelector";
import { categoryReselector } from "@store/reselector/productReselector";
import { ProductType } from "@type/ProductType";
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Icon } from "zmp-ui";

export const Search: FC = () => {
    const navigate = useNavigate();

    const [keyword, setKeyword] = useState("");

    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const [isOpenLocation, setIsOpenLocation] = useState(false);

    const { selectedDistrict, selectedProvince, selectedWard, selectedStreet } = useAppSelector(state => state.location)

    const { counts } = useAppSelector(state => state.cart);

    const totalCount = counts.reduce((sum, count) => sum + count, 0);

    const [isFocused, setIsFocused] = useState(false);

    const products = useSelector(categoryReselector);

    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

    const handleSearch = () => {
        navigate("/search", { state: { keyword } });
    };

    const handleCart = () => {
        navigate("/cart");
    }

    const handleHome = () => {
        navigate("/");
    };

    useEffect(() => {
        if (keyword.trim() !== "") {
            const results = products.filter((product) =>
                product.title.toLowerCase().includes(keyword.toLowerCase())
            );

            setFilteredProducts(results);
        } else {
            setFilteredProducts([]);
        }
    }, [keyword]);

    return (
        <Box className="bg-navi ">
            <div className="flex w-full justify-center space-x-1 px-2.5 py-2">
                {/* <div className="flex-none">
                    <img className="h-8 " src="https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-The-Gioi-Di-Dong-MWG.png" />
                </div> */}
                <div className="flex-none">
                    <i onClick={() => handleHome()} className="icon-logo" />
                </div>
                <div onClick={() => setIsOpenLocation(true)} className="flex flex-1 h-8 flex-1  items-center justify-start rounded-2xl bg-softblue p-2 text-10 text-white ">
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
                            .join(', ')} readOnly />
                    {/* <span className="flex-1 min-w-[90px] max-w-full truncate bg-softblue p-1 text-10">{[
                        selectedStreet,
                        selectedWard?.name,
                        selectedDistrict?.name,
                        selectedProvince?.name,
                    ]
                        .filter(Boolean)
                        .join(', ')} </span> */}
                    <Icon icon="zi-chevron-right" size={16} />
                </div>
                <div onClick={() => navigate('/login')} className="flex h-8 w-90 items-center justify-center rounded-2xl bg-softblue text-10 text-white">
                    <i className="iconnewglobal-user" />
                    <span className="text-nowrap p-1">Đăng nhập</span>
                </div>
            </div>
            <div className="relative  flex w-full justify-center  px-2.5 pb-2">
                <div onClick={() => setIsOpenDrawer(true)} className="flex w-10 items-center justify-center rounded-l-lg bg-softgray p-2">
                    <i className="iconnewglobal-menu" />
                </div>
                <div className="flex w-full  items-center justify-center bg-white">
                    <div onClick={() => handleSearch()}><i className="icon-search m-2" /></div>
                    <input
                        className="w-full bg-white p-1 text-13 focus:outline-none "
                        type="text" onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSearch();
                            }
                        }}
                        placeholder="Bạn tìm gì..." value={keyword} onChange={(e) => setKeyword(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setTimeout(() => setIsFocused(false), 0)} />
                </div>

                <div onClick={() => handleCart()} className="relative flex w-10 items-center justify-center rounded-r-lg bg-softgray">
                    {(totalCount > 0) && (<span className="cart-number">{totalCount}</span>)}
                    <i className="iconnewglobal-blackcart" />
                </div>
                {isFocused && filteredProducts.length > 0 && (
                    <div className=" absolute top-10 h-450 w-full overflow-y-auto ">
                        <div className="mx-2.5   rounded-lg ">
                            <div className="w-full rounded-tl-lg rounded-tr-lg bg-lightgray px-2.5 py-1 text-13 text-blackgray">
                                Có phải bạn muốn tìm
                            </div>
                            <div className="w-full bg-white text-12 text-navi">
                                {filteredProducts.slice(0, 5).map((product, index) => (
                                    <div onClick={() => navigate("/detail", { state: { product } })} key={index} className="ms-1 border-b p-2.5">
                                        <span className="">{product.title}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full bg-lightgray px-2.5 py-1 text-13 text-blackgray">
                                Sản phẩm gợi ý
                            </div>
                            <div className="w-full bg-white text-12 ">
                                {filteredProducts.slice(0, 5).map((product, index) => (
                                    <div onClick={() => navigate("/detail", { state: { product } })} key={index} className="ms-1 flex border-b p-2.5">
                                        <img src={product.thumbnail} className="w-60" />
                                        <div>
                                            <div className="text-14">{product.title}</div>
                                            <div className="font-bold text-orange">Online giá quá rẻ</div>
                                            <div className="flex gap-1">
                                                <span className="text-14 font-bold text-red">{(product.price * (100 - product.discountPercentage) / 100).toLocaleString("vi-VN")} $</span>
                                                <del>{product.price.toLocaleString("vi-VN")}$</del>
                                                <span>{product.discountPercentage}%</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}


            </div>

            <Menu isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} />
            <Location isOpen={isOpenLocation} onClose={() => setIsOpenLocation(false)} />
        </Box>
    );
};
