import { ProductItem } from "@components/Product/ItemProduct";
import { ShowMore } from "@components/ShowMoreButton";
import { fetchProductCategory } from "@store/productReducer";
import { AppDispatch, RootState } from "@store/store";
import React, { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Recommend: FC = () => {
    const showAll = useSelector((state: RootState) => state.showmore.showMoreById["productGridView"] ?? false);

    const products = useSelector((state: RootState) => state.products.category);

    const dispatch = useDispatch<AppDispatch>();

    const displayed = useMemo(
        () => (showAll ? products : products.slice(0, 6)),
        [showAll, products]
    );

    useEffect(() => {
        dispatch(fetchProductCategory());
    }, [dispatch]);

    return (
        <div className="flex flex-wrap items-center justify-center gap-4 bg-white py-4 ">
            {displayed.map((promotion, index) => (
                <ProductItem key={index} product={promotion} />
            ))}
            <ShowMore id="productGridView" />
        </div>
    );
};
