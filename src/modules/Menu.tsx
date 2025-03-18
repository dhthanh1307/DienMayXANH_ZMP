import { Drawer, MenuItem } from "@components/index";
import { DrawerMenu } from "@type/index";
import React, { FC, useState } from "react";

import categories from "../../mock/categories.json"


const names = ["Chương trình hot", "Điện tử, điện máy", "Điện gia dung", "Điện tử viễn thông", "Phụ kiện", "Máy cũ, trưng bày", "Sản phấm khác", "Thông tin", "Dịch vụ tiện ích"]

export const Menu: FC<DrawerMenu> = ({ isOpen, onClose }) => {
    const [selected, setSelected] = useState(names[0]);

    return (
        <Drawer isOpen={isOpen} onClose={onClose} title="Danh mục sản phẩm">
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
                <div className="ms-3 flex h-full flex-wrap justify-center bg-white p-2">
                    <div className="h-fit w-full text-14 font-bold uppercase">{selected}</div>
                    <div className="flex h-full w-full flex-wrap overflow-y-auto">
                        {categories.map((category, index) => (
                            <MenuItem category={category} key={index}/>
                        ))
                        }
                    </div>
                </div>
            </div>
        </Drawer>
    );
};
