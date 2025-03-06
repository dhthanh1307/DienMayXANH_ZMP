import { ProductItem } from "@components/Product/ItemProduct";
import { ShowMore } from "@components/ShowMoreButton";
import { fetchSearchProducts } from "@store/productReducer";
import { AppDispatch, RootState } from "@store/store";
import React, { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "zmp-ui";
export const SearchView: FC<{ keyword: string }> = ({ keyword }) => {
    const showAll = useSelector((state: RootState) => state.showmore.showMoreById["searchGridView"] ?? false);

    const products = useSelector((state: RootState) => state.products.searchProducts);

    const dispatch = useDispatch<AppDispatch>();

    const displayed = useMemo(() =>
        (showAll ? products : products.slice(0, 4)),
        [showAll, products]);

    useEffect(() => {
        dispatch(fetchSearchProducts(keyword))
    },[dispatch,keyword]);

    return (
        <Box className="bg-white">
            <h3 className="p-4 font-bold">Tìm thấy kết quả:</h3>
            <div className="flex flex-wrap justify-center gap-3 bg-white">
                {displayed.map((product, index) => (
                    <ProductItem key={index} product={product} />
                ))}
            </div>
            <ShowMore id="searchGridView" />
        </Box>
    );
};