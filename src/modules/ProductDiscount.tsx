import { Location, ShowMore } from "@components/index";
import { fetchProducts } from "@store/actions/productAction";
import { addToCart } from "@store/slices/cartSlice";
import { AppDispatch, RootState } from "@store/store";
import { ProductType } from "@type/index";
import { productReselector } from "@store/productReselector";
import React, { FC, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ProductDiscount: FC = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch<AppDispatch>();

    const products = useSelector(productReselector);

    const showAll = useSelector((state: RootState) => state.showmore.showMoreById["productDiscount"] ?? false);

    const {selectedProvince } = useSelector((state: RootState) => state.location);

    const [isOpenLocation, setIsOpenLocation] = useState(false);

    const [toast, setToast] = useState(false);

    const handleDetail = (product: ProductType) => {
        navigate("/detail", { state: { product } });
    };

    const handleAddToCart = async (product: ProductType) => {
        if (!selectedProvince) {
            setIsOpenLocation(true);
            setToast(true);
        }
        await dispatch(addToCart({ product }));
        setToast(true);
    }

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | null = null;
        if (toast) {
            timer = setTimeout(() => setToast(false), 3000);
        }
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [toast]);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const displayed = useMemo(
        () => (showAll ? products : products.slice(0, 6)),
        [showAll, products]
    );

    return (
        <div className="flex flex-wrap items-center justify-center bg-white py-4 pe-2.5">
            {displayed.map((promotion, index) => (
                <div key={index} className="w-1/2 pb-2.5 ps-2.5">
                    <div onClick={() => handleDetail(promotion)} className="rounded-lg border border-gray-100 px-2">
                        <div className="flex h-150 items-center justify-center pt-4">
                            <img src={promotion.thumbnail} className="h-36" />
                        </div>
                        <div className="mt-2.5 text-12">
                            <div className="h-10 ">
                                {promotion.title}
                            </div>
                            <div className="mt-2" >
                                <div className="text-14 font-bold text-red">
                                    {(promotion.price * (100 - promotion.discountPercentage) / 100).toLocaleString("vi-VN")} ₫
                                </div>
                                <del className="text-13 text-gray-300">
                                    {promotion.price.toLocaleString("vi-VN")} ₫
                                </del>
                                <span className="text-red"> -{promotion.discountPercentage}%</span>

                            </div>
                            <div className="flex rounded-xl text-center text-10"
                                style={{
                                    background: `linear-gradient(to right,#faeec0, #facc15 ${(promotion.stock / 100) * 100}%, #e5e7eb ${(promotion.stock / 100) * 100}%)`,
                                }}>
                                <div className="flex items-center">
                                    <img src="https://cdnv2.tgdd.vn/webmwg/2024/ContentMwg/images/homev2/flash-sale.png" className="size-4" />
                                </div>
                                <div className="w-full text-center"> Còn {promotion.stock}/30</div>
                            </div>
                            <div onClick={(e) => {
                                e.stopPropagation();
                                handleAddToCart(promotion)
                            }} className="my-3 h-8 rounded-md bg-lightblue px-2 py-1 text-center font-bold text-navi">
                                Mua ngay
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <ShowMore id="productDiscount" />
            {toast && (<div className="toast absolute right-1 top-12 h-fit rounded-lg border border-gray1 bg-white p-2.5 text-black">
                <div>
                    <i className="view-cart" />
                    <span>Đã thêm vào giỏ hàng</span>
                </div>
                <div onClick={() => navigate('/cart')} className=" rounded-lg bg-lightblue p-2.5 text-center text-16 font-bold text-navi">Xem giỏ hàng</div>
            </div>)
            }
            <div className="text-black">
                <Location isOpen={isOpenLocation} onClose={() => setIsOpenLocation(false)} />
            </div>
        </div>
    );
};