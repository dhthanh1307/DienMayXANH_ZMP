import { ProductItem, ShowMore } from "@components/index";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { fetchProductCategory } from "@store/actions/productAction";
import { categoryReselector } from "@store/reselector/productReselector";
import { } from "@store/store";
import React, { FC, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

export const CategoryView: FC<{ button: string }> = ({ button }) => {

    const products = useSelector(categoryReselector);

    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(fetchProductCategory());
    }, [dispatch]);

    return (
        <div className="flex flex-wrap items-center justify-center bg-white px-2.5 py-4">
            {products.slice(0, 4).map((product, index) => (
                <div className="w-1/2" key={index}>
                    <ProductItem key={index} product={product} />
                </div>
            ))}
            <div className="m-2 w-full rounded-3xl border border-black p-2 text-center">
                <span>Xem thêm </span>
                <span className="font-bold">{button} </span>
                <span>cao cấp</span>
            </div>
            {/* <ShowMore id="productGridView" /> */}
        </div>
    );
};
