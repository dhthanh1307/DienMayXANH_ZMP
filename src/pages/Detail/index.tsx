import { Banner } from "@components/Banner/Banner";
import Dropdown from "@components/Dropdown/Dropdown";
import { PricingCard } from "@components/PricingCard";
import { Assurance } from "@modules/Assurance";
import { ImageView } from "@modules/ProductImageView";
import { Review } from "@modules/Review";
import { Search } from "@modules/Search";
import { Technical } from "@modules/Technical";
import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Icon, Page } from "zmp-ui";

const DetailPage: React.FunctionComponent = () => {
    const location = useLocation();

    const product = location.state.product;

    const imageRef = useRef<HTMLDivElement>(null);

    const pricingRef = useRef<HTMLDivElement>(null);

    const specRef = useRef<HTMLDivElement>(null);

    const reviewRef = useRef<HTMLDivElement>(null);

    const [nav, setNav] = useState<string>("image");

    const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <Page className="overflow-y-auto  bg-white">
            <Banner
                src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/74/f3/74f3c5d044c73bf888d60d1db1307080.gif"
                className="h-9 w-full"
                containerClassName="bg-darkblue justify-center flex" />
            <Search />
            <div className="sticky top-0 z-10 flex h-10 items-center justify-between bg-white px-2    ">
                <span onClick={() => { handleScroll(imageRef), setNav("image") }} className={`${nav === "image" ? "text-navi" : ""}`}>
                    Hình ảnh
                </span>
                <span onClick={() => { handleScroll(pricingRef), setNav("pricing") }} className={`${nav === "pricing" ? "text-navi" : ""}`}>
                    Giá / Khuyến mãi
                </span>
                <span onClick={() => { handleScroll(specRef), setNav("spec") }} className={`${nav === "spec" ? "text-navi" : ""}`}>
                    Thông số
                </span>
                <span onClick={() => { handleScroll(reviewRef), setNav("review") }} className={`${nav === "review" ? "text-navi" : ""}`}>
                    Đánh giá
                </span>
            </div>
            <div ref={imageRef}>
                <ImageView images={product.images} />
            </div>
            <div className="p-1 px-3 text-16 font-bold">
                {product.title}
            </div>
            <div className="mx-3 my-2 flex gap-4 text-14 text-gray-500">
                <div className="text-nowrap">Đã bán {product.stock}</div>
                <div className="flex items-center gap-1">
                    <Icon icon="zi-star-solid" size={16} className="text-yellow-400" />
                    <span> {product.rating}</span>
                </div>
            </div>
            <Banner
                src="https://cdnv2.tgdd.vn/mwg-static/common/Campaign/30/7b/307b722b04fb80641bfcec3e93f24812.jpg"
            />
            <div ref={pricingRef}>
                <PricingCard product={product} />
            </div>
            <div className="mt-2.5 border-y-4 border-gray-100 px-2.5 text-14">
                <div className="pt-3 text-16 font-bold">
                    Điện máy XANH cam kết
                </div>
                <Assurance />
            </div>
            <div className="border-y-4 border-gray-100 p-2.5 text-14">
                <div className="mb-2.5 text-16 font-bold">
                    Tham khảo thêm sản phẩm cũ, trưng bày
                </div>
                <div className="flex h-70 items-center rounded-lg border p-2.5 ">
                    <img className="me-2.5 size-16" src={product.thumbnail} alt="" />
                    <div className="text-14">
                        <div className="font-bold">{product.title}</div>
                        <div>Giá từ <span className="text-red-600 font-semibold">{product.price} </span> <span className="text-red-600">-{product.discountPercentage}%</span></div>
                        <div>Bảo hành 1 tháng tại DMX</div>
                    </div>
                </div>
            </div>
            <div ref={specRef} className="w-full bg-white text-14 border-y-4 border-gray-100">
                <div className="w-full flex p-3 gap-2 text-center font-bold ">
                    <div className="w-1/2 p-2 text-navi bg-lightblue rounded-lg border border-navi ">Thông số kỹ thuật</div>
                    <div className="w-1/2 p-2 border text-blackgray rounded-lg">Bài viết đánh giá</div>
                </div>
                <img src={product.thumbnail} className="mx-auto" />
                <Technical />

            </div>
            <div className="border-y-4 border-gray-100 p-2.5 text-14 " ref={reviewRef}>
                <div className="mb-2.5 text-16 font-bold ">
                    Đánh giá {product.title}
                </div>
                <Review  product={product}/>
                <div className="w-full flex p-3 gap-2 text-center">
                    <div className="w-1/2 p-2 border border-black text-blackgray rounded-lg">Xem 251 đánh giá</div>
                    <div className="w-1/2 p-2 text-white bg-navi rounded-lg border border-navi ">Viết đánh giá</div>
                </div>  
            </div>
        </Page>);
};

export default DetailPage;
