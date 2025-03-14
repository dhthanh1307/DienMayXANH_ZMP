import { ProductItem, ShowMore } from "@components/index";
import { fetchSearchProducts } from "@store/actions/productAction";
import { AppDispatch, RootState } from "@store/store";
import { searchProductReselector } from "@store/productReselector";
import React, { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "zmp-ui";
export const SearchView: FC<{ keyword: string }> = ({ keyword }) => {
    const showAll = useSelector((state: RootState) => state.showmore.showMoreById["searchGridView"] ?? false);

    const products = useSelector(searchProductReselector);

    const dispatch = useDispatch<AppDispatch>();

    const displayed = useMemo(() =>
        (showAll ? products : products.slice(0, 4)),
        [showAll, products]);

    useEffect(() => {
        dispatch(fetchSearchProducts(keyword))
    }, [dispatch, keyword]);

    return (
        <Box className="bg-white">
            <h3 className="p-4 font-bold">Tìm thấy kết quả:</h3>
            <div className="flex flex-wrap justify-center  bg-white">
                {displayed.map((product, index) => (
                    <div className="w-1/2">
                        <ProductItem key={index} product={product} />
                    </div>
                ))}
            </div>
            <ShowMore id="searchGridView" />
        </Box>
    );
};