import { ProductItem, ShowMore } from "@components/index";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { fetchProductCategory } from "@store/actions/productAction";
import { categoryReselector } from "@store/reselector/productReselector";
import {   } from "@store/store";
import React, { FC, useEffect, useMemo } from "react";
import {  useSelector } from "react-redux";

export const Recommend: FC = () => {
    const showAll = useAppSelector(state => state.showmore.showMoreById["productGridView"] ?? false);

    const products = useSelector(categoryReselector);

    const dispatch = useAppDispatch();

    const displayed = useMemo(
        () => (showAll ? products : products.slice(0, 6)),
        [showAll, products]
    );

    useEffect(() => {
        dispatch(fetchProductCategory());
    }, [dispatch]);

    return (
        <div className="flex flex-wrap items-center justify-center bg-white py-4">
            {displayed.map((promotion, index) => (
                <div className="w-1/2" key={index}>
                    <ProductItem  key={index} product={promotion} />
                </div>
            ))}
            <ShowMore id="productGridView" />
        </div>
    );
};
