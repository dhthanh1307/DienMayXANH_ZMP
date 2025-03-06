import { Banner } from "@components/Banner/Banner";
import { PricingCard } from "@components/PricingCard";
import { ImageView } from "@modules/ProductImageView";
import { Search } from "@modules/Search";
import React, { } from "react";
import { useLocation } from "react-router-dom";
import { Icon, Page } from "zmp-ui";
import { Assurance } from "@modules/Assurance";

const DetailPage: React.FunctionComponent = () => {
    const location = useLocation();

    const product = location.state.product;

    return (
        <Page className="overflow-y-auto  bg-white">
            <Banner
                src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/74/f3/74f3c5d044c73bf888d60d1db1307080.gif"
                className="h-9 w-full"
                containerClassName="bg-darkblue justify-center flex" />
            <Search />
            <div className="sticky top-0 z-10 flex h-10 items-center justify-between bg-white px-2    ">
                <span className="text-navi">
                    Hình ảnh
                </span>
                <span>
                    Giá / Khuyến mãi
                </span>
                <span>
                    Thông số
                </span>
                <span>
                    Đánh giá
                </span>
            </div>
            <ImageView images={product.images} />
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
            <PricingCard product={product} />
            <div className="mt-2.5 border-y-4 border-gray-100 px-2.5 text-14">
                <div className="pt-3 text-16 font-bold">
                    Điện máy XANH cam kết
                </div>

                <Assurance/>
            </div>
            <div className="border-y-4 border-gray-100 p-2.5 text-14">
                <div className="text-16 font-bold mb-2.5">
                    Tham khảo thêm sản phẩm cũ, trưng bày
                </div>
                <div className="flex h-70 items-center rounded-lg border p-2.5 ">
                    <img className="me-2.5 size-16" src={product.thumbnail} alt="" />
                    <div className="text-14">
                        <div className="font-bold">{product.title}</div>
                        <div>Giá từ <span className="font-semibold text-red-600">{product.price} </span> <span className="text-red-600">-{product.discountPercentage}%</span></div>
                        <div>Bảo hành 1 tháng tại DMX</div>
                    </div>
                </div>
            </div>
        </Page>);
};

export default DetailPage;
