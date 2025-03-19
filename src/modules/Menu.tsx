import { Drawer, MenuItem } from "@components/index";
import { DrawerMenu } from "@type/index";
import React, { FC, useEffect, useRef, useState } from "react";

import categories from "../../mock/categories.json"


const sections = [
    { id: "section1", label: "Chương trình hot" },
    { id: "section2", label: "Điện tử, điện máy" },
    { id: "section3", label: "Điện gia dụng" },
    { id: "section4", label: "Điện tử viễn thông" },
    { id: "section5", label: "Phụ kiện" },
    { id: "section6", label: "Máy cũ, trưng bày" },
    { id: "section7", label: "Sản phẩm khác" },
    { id: "section8", label: "Thông tin" },
    { id: "section9", label: "Dịch vụ tiện ích" }
];
export const Menu: FC<DrawerMenu> = ({ isOpen, onClose }) => {
    const [selected, setSelected] = useState(sections[0]);
    const [activeTab, setActiveTab] = useState(sections[0].id);
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveTab(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach(({ id }) => {
            if (sectionRefs.current[id]) {
                observer.observe(sectionRefs.current[id]!);
            }
        });

        return () => observer.disconnect();
    }, []);
    const scrollToSection = (id: string) => {
        sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (
        <Drawer isOpen={isOpen} onClose={onClose} title="Danh mục sản phẩm">
            <div className="mt-2 flex h-full w-full ">
                <div className="max-h-full w-100 items-center justify-center gap-1 bg-lightgray">
                    {sections.map(({ id, label }) => (
                        <div key={id}
                            onClick={() => scrollToSection(id)} className={`   text-12 ${activeTab === id ? "border-l-2 border-navi bg-white font-bold text-navi" : "border-b border-gray-300"}`}>
                            <div className="w-90 p-2">
                                {label}
                            </div>
                        </div>
                    )
                    )}
                </div>

                <div className="ms-3 flex h-full flex-wrap justify-center bg-white p-2">
                    <div className="h-fit w-full text-14 font-bold uppercase">{selected.label}</div>
                    <div className="flex h-full w-full flex-wrap overflow-y-auto">
                        
                        <div className=" w-full bg-navi h-270" ref={(el) => (sectionRefs.current["section2"] = el)} id="section2">
                            s
                        </div>
                        <div className="w-full bg-lightgray h-270" ref={(el) => (sectionRefs.current["section3"] = el)} id="section3">
                            v
                        </div>
                        <div className="w-full bg-red h-270" ref={(el) => (sectionRefs.current["section4"] = el)} id="section4">
                            h
                        </div>
                        {categories.map((category, index) => (
                            <MenuItem category={category} key={index} />
                        ))
                        }
                    </div>
                </div>
            </div>
        </Drawer>
    );
};
