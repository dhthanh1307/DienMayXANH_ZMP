import { MenuItem } from "@components/Menu/itemMenu";
import React, { FC, useState } from "react";

import categories from "../../mock/categories.json"
interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const names = ["Chương trình hot", "Điện tử, điện máy", "Điện gia dung", "Điện tử viễn thông", "Phụ kiện", "Máy cũ, trưng bày", "Sản phấm khác", "Thông tin", "Dịch vụ tiện ích"]

export const Menu: FC<DrawerProps> = ({ isOpen, onClose }) => {
    const [selected, setSelected] = useState(names[0]);

    return (
        <div className={`fixed right-0 top-0 z-50 h-full w-full  bg-softgray
                transition-transform duration-300 ease-in-out 
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex items-center justify-between bg-white px-2">
                <span className="p-2.5 text-14 font-bold">Danh mục sản phẩm
                </span>
                <img onClick={() => onClose()} className="size-4" src="https://cdn-icons-png.flaticon.com/512/106/106830.png" />
            </div>
            <div className="mt-2 flex h-full w-full ">
                <div className="max-h-full w-100 items-center justify-center gap-1 bg-lightgray">
                    {names.map((name, index) => (
                        <div onClick={() => setSelected(name)} key={index} className={`   text-12 ${selected === name ? "border-l-2 border-navi bg-white font-bold text-navi" : "border-b border-gray-300"}`}>
                            <div className="w-90 p-2">
                                {name}
                            </div>
                        </div>
                    )
                    )}
                </div>
                <div className="ms-3 flex h-500 flex-wrap justify-center bg-white p-2">
                    <div className="w-full text-14 font-bold uppercase">{selected}</div>
                    <div className="flex h-450 w-full flex-wrap overflow-y-auto">
                        {categories.map((category, index) => (
                            <MenuItem category={category} key={index}/>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
