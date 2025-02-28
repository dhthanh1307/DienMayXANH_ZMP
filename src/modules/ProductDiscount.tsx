import React, { FC, useEffect, useState } from "react";
import { Button } from "zmp-ui";
import { ShowMore } from "@components/ShowMoreButton";
import axios from "axios";
import { Product } from "@components/Product/type";
import { useNavigate } from "react-router-dom";

export const ProductDiscount: FC = () => {
    const [showAll, setShowAll] = React.useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const displayedPromotions = showAll ? products : products.slice(0, 6);
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
    const navigate=useNavigate();
    const handleDetail=(product:Product)=>{
        navigate("/detail",{state:{product}});
    };
    return (
        <div className="flex flex-wrap gap-4 justify-center items-center bg-white py-4">
            {displayedPromotions.map((promotion, index) => (
                <div onClick={()=>handleDetail(promotion)} key={index} className="w-44  rounded-lg border border-gray-300 flex justify-center flex-wrap">
                    <div className="w-30 h-36  flex  justify-center items-center">
                        <img src={promotion.thumbnail} className="w-30 h-36" />
                    </div>
                    <div className="m-2 w-full text-12">
                        <span>
                            {promotion.title}
                        </span>
                        <div  >
                            <div className="text-red-600 font-bold text-14">
                                {(promotion.price * (100 - promotion.discountPercentage) / 100).toLocaleString("vi-VN")} ₫
                            </div>
                            <del className="text-gray-300 ">
                                {promotion.price.toLocaleString("vi-VN")} ₫
                            </del>
                            <span className="text-red-600"> -{promotion.discountPercentage}%</span>

                        </div>
                        <div className="text-10 my-1  bg-yellow-100 w-full rounded-xl text-center flex"
                            style={{
                                background: `linear-gradient(to right, #facc15 ${(promotion.stock / 100) * 100}%, #e5e7eb ${(promotion.stock / 100) * 100}%)`,
                            }}>
                            <img src="https://cdnv2.tgdd.vn/webmwg/2024/ContentMwg/images/homev2/flash-sale.png" className="w-4 h-4" />
                            <div className="mx-auto ms-6 text-center">
                                Còn <span>{promotion.stock}/30</span>
                            </div>
                        </div>
                        <Button className="w-full">
                            Mua ngay
                        </Button>
                    </div>
                </div>
            ))}
            <ShowMore showAll={showAll} setShowAll={setShowAll} />


        </div>
    );
};