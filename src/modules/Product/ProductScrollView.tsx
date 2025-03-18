import { ProductItem } from "@components/index";
import { categoryReselector } from "@store/reselector/productReselector";
import React, { FC, useEffect } from "react";
import {  useSelector } from "react-redux";

export const ListView: FC = () => {
    const products = useSelector(categoryReselector);

    return (
        <div className="mx-2 overflow-x-auto bg-white">
            <div className="inline-flex py-2">
                {products.map((product, index) => (
                    <div className="w-180"  key={index}>
                        <ProductItem product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};
