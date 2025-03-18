import { CategoryType } from "@type/index";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

export const MenuItem: FC<{ category: CategoryType }> = ({category}) => {
    const navigate=useNavigate();

    return (
        <div onClick={()=>navigate("/category")} className="mx-auto  h-90 w-1/3 justify-center  text-center text-12 ">
            <img className="mx-auto block size-12 justify-center" src={category.link} />
            <div>
                {category.name}
            </div>
        </div>
    );
};