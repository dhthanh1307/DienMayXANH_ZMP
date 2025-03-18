import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "zmp-ui";

import categories from "../../mock/categories.json";
export const Categories: FC = () => {
    const navigate=useNavigate();

    return (
        <Box className="bg-white">
            <div className="overflow-x-auto">
                <div className="inline-flex items-center justify-center rounded-lg bg-white text-12">
                    {categories.map((category, index) => (
                        <div onClick={()=>navigate('/category')} key={index} className=" mx-auto flex w-28 flex-wrap items-center justify-center">
                            <img src={category.link} className="size-12 duration-300 hover:-translate-y-2" />
                            <span className="w-full p-1 text-center">{category.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Box>
    );
};
