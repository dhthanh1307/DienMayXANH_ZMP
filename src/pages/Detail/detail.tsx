import { useLocation } from "react-router-dom";
import { Banner } from "@components/Banner/Banner";
import React, { } from "react";
import { Page, Icon } from "zmp-ui";
import { ImageView } from "@modules/ProductImageView";
import { PricingCard } from "@components/PricingCard";

const DetailPage: React.FunctionComponent = () => {
    const location = useLocation();
    const product = location.state.product;
    return (
        <Page className="page overflow-y-auto">
            <ImageView images={product.images} />
            <div className="font-bold text-[24px] p-1 px-3">
                {product.title}
            </div>
            <div className="flex mx-3 text-gray-500 gap-8 my-2">
                <div className="text-nowrap">Đã bán {product.stock}</div>
                <div>
                    <Icon icon="zi-star-solid" size={16} className="text-yellow-400" />
                    <span> {product.rating}</span>
                </div>
            </div>
            <Banner
                src="https://cdnv2.tgdd.vn/mwg-static/common/Campaign/30/7b/307b722b04fb80641bfcec3e93f24812.jpg"
                className="w-75 h-125" />
            <PricingCard product={product} />
        </Page>);
};

export default DetailPage;
