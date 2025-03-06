import React, { FC } from "react";
interface Category {
    link: string;
    name: string;
}
export const MenuItem: FC<{ category: Category }> = ({category}) => {
    return (
        <div className="mx-auto  h-90 w-1/3 justify-center  text-center text-12 ">
            <img className="mx-auto block size-12 justify-center" src={category.link} />
            <div>
                {category.name}
            </div>
        </div>
    );
};