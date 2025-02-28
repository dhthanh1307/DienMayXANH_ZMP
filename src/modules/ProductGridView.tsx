import React, { FC, useEffect, useState } from "react";
import { ShowMore } from "@components/ShowMoreButton";
import { ProductItem } from "@components/Product/ItemProduct";
import axios from "axios";
import { Product } from "../components/Product/type";
export const Recommend: FC = () => {
    const [showAll, setShowAll] = React.useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const displayed = showAll ? products : products.slice(0, 6);
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
                console.log(response.data);
                console.log(response.data.products);
                console.log(products);


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
        <div className="flex flex-wrap gap-4 justify-center items-center bg-white py-4 ">
            {displayed.map((promotion, index) => (
                <ProductItem key={index} product={promotion} />
            ))}
            <ShowMore showAll={showAll} setShowAll={setShowAll} />
        </div>
    );
};
