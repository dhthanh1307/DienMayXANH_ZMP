import { Product } from "@components/Product/type";
import { ShowMore } from "@components/ShowMoreButton";
import { fetchProducts } from "@store/productReducer";
import { AppDispatch, RootState } from "@store/store";
import React, { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ProductDiscount: FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector((state: RootState) => state.products.products);
    const showAll = useSelector((state: RootState) => state.showmore.showMoreById["productDiscount"] ?? false);

    const handleDetail = (product: Product) => {
        navigate("/detail", { state: { product } });
    };

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
                <div onClick={() => handleDetail(promotion)} key={index} className="w-1/2 pb-2.5 ps-2.5">
                    <div className="rounded-lg border border-gray-100 px-2">
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
                            <div className="my-3 h-8 rounded-md bg-lightblue px-2 py-1 text-center font-bold text-navi">
                                Mua ngay
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <ShowMore id="productDiscount" />


        </div>
    );
};