import React, { FC } from "react";
import { Box, Icon, useNavigate } from "zmp-ui";
import { Product } from "../type";

export const ProductItem: FC<{ product: Product }> = ({ product }) => {
    const navigate=useNavigate();
    const handleDetail=(product:Product)=>{
        navigate('/detail',{state:{product}})
    }
    return (
        <div onClick={()=>handleDetail(product)}  className="w-44 h-90 rounded-lg border border-gray-300 flex justify-center flex-wrap">
            <div className="w-44 h-36  flex  justify-center items-center">
                <img src={product.thumbnail} className="w-32" />
            </div>
            <div className="m-2 w-full text-[12px]">

                {product.warrantyInformation && (
                    <div className="h-5 w-3/4 mb-1 bg-red-600 flex rounded-2xl items-center gap-1  ">
                        <img className="w-5 h-5" src="https://cdnv2.tgdd.vn/mwg-static/common/Campaign/51/e2/51e2fff2daf6268049d452bd8f174035.png" alt="" />
                        <span className="text-[10px] text-white">{product.warrantyInformation}</span>
                    </div>
                )}
                <span className="line-clamp-2">
                    {product.title}
                </span>
                <div className="flex flex-warp gap-1">
                    {product.tags.map((tag, index) => (
                        <div key={index} className="bg-gray-200 text-gray-600 px-2 my-2 p-1 rounded text-[10px]">
                            {tag}
                        </div>))
                    }
                </div>


                <div  >
                    <div className="text-red-600 font-bold text-[14px]">
                        {(product.price * (100 - product.discountPercentage) / 100).toLocaleString("vi-VN")} $
                    </div>
                    <del className="text-gray-300 ">
                        {product.price.toLocaleString("vi-VN")} $
                    </del>
                    <span className="text-red-600"> -{product.discountPercentage}%</span>
                </div>
                <div className="text-gray-600 flex gap-2 items-center">
                    <div>
                        <Icon icon="zi-star-solid" size={16} className="text-yellow-400"></Icon>
                        <span> {product.rating}</span>
                    </div>
                    <li className="text-nowrap">Còn lại {product.stock}</li>
                </div>
            </div>
        </div >
    )
};