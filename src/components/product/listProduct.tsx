import React, { FC, useEffect, useState } from "react";
import { Box, Icon } from "zmp-ui";
import promotions from "../../../mock/products.json"
import { ProductItem } from "./items/item";
import { Product } from "./type";
import axios from "axios";
export const ListView: FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products/category/mobile-accessories",
                    {
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
        <div className="overflow-x-auto scrollbar-hidden mx-2 bg-white">
            <div className="inline-flex gap-2 py-2">
                {products.map((product, index) => (
                    <ProductItem key={index} product={product} />
                ))}
            </div>
        </div>
    )
};
