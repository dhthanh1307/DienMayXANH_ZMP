import { useLocation } from "react-router-dom";
import { Banner, Banner7 } from "../components/banner";
import { Search } from "../components/search";
import React, { Suspense, useEffect } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import { SearchView } from "../components/product/searchView";
import { ImageView } from "../components/imageView";
import { PayMent } from "../components/payment";

const DetailPage: React.FunctionComponent = () => {
    const navigate = useNavigate();
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
                    <Icon icon="zi-star-solid" size={16} className="text-yellow-400"></Icon>
                    <span> {product.rating}</span>
                </div>
            </div>
            <Banner7/>
            <PayMent product={product}/>
        </Page>);
};

export default DetailPage;
