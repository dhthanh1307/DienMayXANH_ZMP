import { ProductItem } from "@components/Product/ItemProduct";
import { fetchProductCategory } from "@store/productReducer";
import { AppDispatch, RootState } from "@store/store";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ListView: FC = () => {
    const products = useSelector((state: RootState) =>
        state.products.category
    )

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchProductCategory());
    }, [dispatch]);

    useEffect(() => {
    }, [products]);

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
