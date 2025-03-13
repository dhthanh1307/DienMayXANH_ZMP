import {ProductType} from "@type/index";
import React, { FC } from "react";
import { Icon, useNavigate } from "zmp-ui";

export const ProductItem: FC<{ product: ProductType }> = ({ product }) => {
    const navigate = useNavigate();

    const handleDetail = (product: ProductType) => {
        navigate("/detail", { state: { product } });
    };

    return (
        <div onClick={() => handleDetail(product)} className="flex h-400 w-full flex-wrap justify-center p-1.5">
            <div className=" w-full rounded-lg border border-gray-300">
                {product.warrantyInformation && (
                    <div className="ms-2 mt-2 w-full justify-start">
                        <span className="rounded-sm bg-gray-200 px-1 py-0.5 text-10">Trả chậm 0%</span>
                    </div>
                )}
                <div className="mx-auto flex  h-150  items-center justify-center">
                    <img src={product.thumbnail} className="w-32" />
                </div>
                <div className="m-2 w-full text-12">
                    {product.warrantyInformation && (
                        <div className="mb-1 flex h-5 w-fit items-center gap-1 rounded-2xl bg-red pe-2  ">
                            <img className="size-5" src="https://cdnv2.tgdd.vn/mwg-static/common/Campaign/51/e2/51e2fff2daf6268049d452bd8f174035.png" alt="" />
                            <span className="text-10 text-white">{product.warrantyInformation}</span>
                        </div>
                    )}
                    <span className="mb-1 mt-2 line-clamp-2 text-14">
                        {product.title}
                    </span>
                    <div className="my-2 flex flex-wrap gap-1">
                        {product.tags.map((tag, index) => (
                            <span key={index} className="text-nowrap rounded-sm  bg-gray-100 px-2 text-10 text-gray-600">
                                {tag}
                            </span>
                        ))
                        }
                    </div>
                    <div  >
                        <div className="my-1 text-14 font-bold text-red">
                            {(product.price * (100 - product.discountPercentage) / 100).toLocaleString("vi-VN")} $
                        </div>
                        <del className="my-1 text-gray-300">
                            {product.price.toLocaleString("vi-VN")} $
                        </del>
                        <span className="text-red"> -{product.discountPercentage}%</span>
                    </div>
                    <div className="my-1 flex w-full items-center gap-2 text-gray-600">
                        <div>
                            <Icon icon="zi-star-solid" size={16} className="text-yellow-400" />
                            <span> {product.rating}</span>
                        </div>
                        <li className="text-nowrap">Đã bán {product.stock}</li>
                    </div>
                </div>
            </div >
        </div>

    );
};