import { FC, useEffect, useState } from "react";
import { Box } from "zmp-ui";
import { Product } from "../components/Product/type";
import axios from "axios";
import React from "react";
import { ProductItem } from "@components/Product/ItemProduct";
import { ShowMore } from "@components/ShowMoreButton";
export const SearchView: FC<{ keyword: string }> = ({ keyword }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [showAll, setShowAll] = React.useState(false);
    const displayed = showAll ? products : products.slice(0, 4);
    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products/search",
                {
                    params: { q: keyword },
                    headers: {
                        "Content-Type": "application/json"
                    },
                    timeout: 5000,
                }
            );
            setProducts(response.data.products);
            console.log(response.data);
            console.log(response.data.products);
            console.log(products);


        } catch (error) {
            console.error("Error when call API:", error);
        }
    };

    useEffect(() => {

        fetchProducts();
    }, []);
    useEffect(() => {
        console.log("Fecth product", products);
    }, [products]);
    useEffect(() => {
        fetchProducts();
    }, [keyword]);
    return (
        <Box className="bg-white">
            <h3 className="p-4 font-bold">Tìm thấy kết quả:</h3>
            <div className="bg-white flex flex-wrap gap-3 justify-center">
                {displayed.map((product, index) => (
                    <ProductItem key={index} product={product} />
                ))}
            </div>
            <ShowMore showAll={showAll} setShowAll={setShowAll} />

        </Box>
    );
};