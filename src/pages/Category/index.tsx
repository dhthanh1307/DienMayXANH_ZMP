import CategoryTab from "@components/general/CategoryTab";
import { Banner, EmblaCarousel } from "@components/index";
import { CategoryView } from "@modules/CategoryView";
import { ListView, Recommend, Search } from "@modules/index";
import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect, useRef, useState } from "react";
import { Page } from "zmp-ui";

const images = [
    "https://cdn.tgdd.vn/2024/02/campaign/tivi-168x168-1.png",
    "https://cdn.tgdd.vn/2024/02/campaign/tu-lanh-168x168-3.png",
    "https://cdn.tgdd.vn/2024/02/campaign/giat-say-168x168-1.png",
    "https://cdn.tgdd.vn/2024/02/campaign/lam-sach-khong-khi-168x168-1.png",
    "https://cdn.tgdd.vn/2024/02/campaign/GD-nha-bep-168x168-1.png",
    "https://cdn.tgdd.vn/2023/06/campaign/02-268x268-1.png",
    "https://cdn.tgdd.vn/2024/02/campaign/hut-bui-168x168-1.png",
]

const sections = [
    { id: "section1", label: "Video công nghệ đỉnh cao " },
    { id: "section2", label: "Xu hướng mua sắm" },
    { id: "section3", label: " Thiết bị giải trí" },
    { id: "section4", label: " Tủ lạnh" },
    { id: "section5", label: " Thiết bị giặc, sấy" },
    { id: "section6", label: "Thiết bị làm sạch không khí" },
];
export const CategoryPage: React.FunctionComponent = () => {
    const categories = ["Thiết bị gia đình", "Gia dụng thông minh", "Giặt, Sấy quần áo"];

    const cateTV = ["Tivi Sony BRAVIA", "Tivi LG Oled", "Tivi Samsung Lifestyle", "Tivi TCL Premium QD-Mini LED",];

    const cateMG = ["Máy giặt", "Máy sấy", "Tháp giặt/ Tủ chăm sóc quần áo"];

    const cateHB = ["Máy lạnh", "Máy lọc không khí", "Hút bụi, Lau sàn 2 trong 1"];

    const cateTL = ["Tủ lạnh Side by side", "Tủ lạnh Multidoor", "Tủ lạnh InstaView Door-in-door"];

    const [selectedTV, setSelectedTV] = useState(cateTV[0]);

    const [selectedMG, setSelectedMG] = useState(cateMG[0]);

    const [selectedHB, setSelectedHB] = useState(cateHB[0]);

    const [selectedTL, setSelectedTL] = useState(cateTL[0]);

    const [selectedCategory, setSelectedCategory] = useState(categories[1]);

    const [activeTab, setActiveTab] = useState(sections[0].id);

    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const [showHeader, setShowHeader] = useState(false);

    const targetRef = useRef<HTMLDivElement | null>(null);

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowHeader(!entry.isIntersecting);
            },
            { threshold: 0.1 } 
        );

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, []);

    const scrollToSection1 = (id: string) => {
        sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <Page className="overflow-y-auto bg-white ">
            {showHeader && (<div className="flex flex-col items-center">
                <div className="fixed left-0 right-0 top-0 z-50 w-full overflow-x-auto bg-white p-2 text-center text-11 shadow-md">
                    <div className="inline-flex gap-2  bg-white">
                        {sections.map(({ id, label }) => (
                            <div
                                key={id}
                                onClick={() => scrollToSection1(id)}
                                className={`flex items-center rounded-xl border border-blackblue px-5 py-1 ${activeTab === id ? "bg-blackblue text-white" : ""
                                    }`}
                            >
                                <span className="block  w-60">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>)}
            <div  ref={targetRef}>
            <Banner
                src={["https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/74/f3/74f3c5d044c73bf888d60d1db1307080.gif"]}
                className="w-full"
                containerClassName="bg-darkblue justify-center flex" />
            <Search />
            <Banner
                src={["https://cdnv2.tgdd.vn/mwg-static/common/Campaign/de/13/de132195ae90647e73084680ef0ab053.png"]}
                className="w-full"
            />
             </div>

            <div className="bg-white pt-8">
                <div className="text-center text-24 font-bold">Danh mục sản phẩm</div>
                <div className="w-full overflow-x-auto px-2.5 pt-5">
                    <div className="inline-flex  gap-8">
                        {images.map((img, index) => (
                            <div key={index} className="w-90">
                                <img src={img} className="w-32" />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className="flex h-90 items-center" ref={(el) => (sectionRefs.current["section1"] = el)} id="section1">
                <img className="mx-auto " src="	https://www.dienmayxanh.com/hang-cao-cap/Content/images/home/mobile/line-mobi.png" alt="" />
            </div>
            <Banner
                src={["	https://cdn.tgdd.vn/2023/09/campaign/Frame-1000001047-640x249.png"]}
                className="w-full"
            />
            <video  className="w-full" controls>
                <source  src="https://cdnv2.tgdd.vn/mwg-static/common/Campaign/d3/69/d369263a99fdd91f98db242e10e7b497.mp4" type="video/mp4" />
            </video>
            <EmblaCarousel />
            <div className="flex h-90 items-center" ref={(el) => (sectionRefs.current["section2"] = el)} id="section2">
                <img className="mx-auto " src="	https://www.dienmayxanh.com/hang-cao-cap/Content/images/home/mobile/line-mobi.png" alt="" />
            </div>

            <Banner
                src={["https://cdn.tgdd.vn/2023/10/campaign/Frame-10000010282-360x49-2.png"]}
                className="w-full "
            />
            <CategoryTab items={categories} selectedItem={selectedCategory} onSelect={setSelectedCategory} />
            <EmblaCarousel />

            <div className="flex h-90 items-center" ref={(el) => (sectionRefs.current["section3"] = el)} id="section3">
                <img className="mx-auto " src="	https://www.dienmayxanh.com/hang-cao-cap/Content/images/home/mobile/line-mobi.png" alt="" />
            </div>
            <Banner
                src={["https://cdn.tgdd.vn/2023/09/campaign/1a-640x111-2.png"]}
                className="w-full"
            />
            <CategoryTab items={cateTV} selectedItem={selectedTV} onSelect={setSelectedTV} />
            <CategoryView button={"Tivi Sony BRAVIA"} />
            <div className="flex h-90 items-center" ref={(el) => (sectionRefs.current["section4"] = el)} id="section4">
                <img className="mx-auto " src="	https://www.dienmayxanh.com/hang-cao-cap/Content/images/home/mobile/line-mobi.png" alt="" />
            </div>
            <Banner
                src={["https://cdn.tgdd.vn/2023/09/campaign/2a-640x111.png"]}
                className="w-full"
            />
            <CategoryTab items={cateTL} selectedItem={selectedTL} onSelect={setSelectedTL} />
            <CategoryView button={"Tủ lạnh Side by side"} />
            <div className="flex h-90 items-center" ref={(el) => (sectionRefs.current["section5"] = el)} id="section5">
                <img className="mx-auto " src="	https://www.dienmayxanh.com/hang-cao-cap/Content/images/home/mobile/line-mobi.png" alt="" />
            </div>
            <Banner
                src={["https://cdn.tgdd.vn/2023/09/campaign/3a-640x111.png"]}
                className="w-full"
            />
            <CategoryTab items={cateMG} selectedItem={selectedMG} onSelect={setSelectedMG} />
            <CategoryView button={"Máy giặc"} />
            <div className="flex h-90 items-center" ref={(el) => (sectionRefs.current["section6"] = el)} id="section6">
                <img className="mx-auto " src="	https://www.dienmayxanh.com/hang-cao-cap/Content/images/home/mobile/line-mobi.png" alt="" />
            </div>
            <Banner
                src={["https://cdn.tgdd.vn/2023/09/campaign/4a-640x111.png"]}
                className="w-full"
            />
            <CategoryTab items={cateHB} selectedItem={selectedHB} onSelect={setSelectedHB} />
            <CategoryView button={"Máy lạnh"} />
        </Page>
    );
};

export default CategoryPage;
