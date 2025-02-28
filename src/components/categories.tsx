import React, { FC } from "react";
import { Box } from "zmp-ui";
import categories from "../../mock/categories.json";
export const Categories: FC = () => {
    return (
        <Box className="bg-white">
            <div className="overflow-x-auto scrollbar-hidden">
                <div className="w-300 inline-flex flex justify-center items-center bg-white rounded-lg text-12">
                    {categories.map((category, index) => (
                        <div key={index} className=" w-28 h-30 items-center flex-wrap flex justify-center mx-auto">
                            <img src={category.link} className="w-12 h-12 hover:-translate-y-2 duration-300" />
                            <span className="w-full text-center p-1">{category.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Box>
    );
};
