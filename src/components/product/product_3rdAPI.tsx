import React, { FC, useEffect, useState } from "react";
import { Box, Icon } from "zmp-ui";
import axios from "axios";
import { ProductItem } from "./items/itemsProductAPI";
import { Product } from "./type";

export const ProductAPI: FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products",
                    {
                        params: { limit: 10, skip: 10 },
                        headers: {
                            "Content-Type": "application/json"
                        },
                        timeout: 5000,
                    }
                );
                setProducts(response.data.products);
                console.log(response.data)
                console.log(response.data.products)
                console.log(products)


            } catch (error) {
                console.error("Error when call API:", error);
            }
        };

        fetchProducts();
    }, []);
    useEffect(() => {
        console.log("Fecth product", products);
    }, [products]);
    return (
        <Box className="bg-white">
            <h3 className="p-4 font-bold">Một số sản phẩm khác</h3>
            <div className="bg-white flex flex-wrap gap-3 justify-center">
                {products.map((product, index) => (
                    <ProductItem key={index} product={product} />
                ))}
            </div>

        </Box>
    );
};
