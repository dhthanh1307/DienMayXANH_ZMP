import { Banner } from "@components/Banner/Banner";
import { Search, SearchView } from "@modules/index";
import React, { } from "react";
import { useLocation } from "react-router-dom";
import { Page } from "zmp-ui";

export const SearchPage: React.FunctionComponent = () => {
    const location = useLocation();

    const keyword = location.state?.keyword;

    return (
        <Page className="overflow-y-auto">
            <Banner
                src={["https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/74/f3/74f3c5d044c73bf888d60d1db1307080.gif"]}
                className="w-full"
                containerClassName="bg-darkblue justify-center flex" />
            <Search />
            <div className="flex h-12 items-center gap-4 bg-white px-2 font-bold">
                <span className="border-0 border-b-4 border-blue-300 text-blue-300">
                    Sản phẩm mới
                </span>
                <span>
                    Sản phẩm cũ
                </span><span>
                    Tin tức
                </span>
            </div>
            <div className="flex gap-1 bg-white ps-2 text-12">
                <input type="checkbox" />
                <span className="me-2">Giảm giá</span>
                <input type="checkbox" />
                <span className="me-2">Đặc quyền điện máy XANH</span>
                <input type="checkbox" />
                <span className="me-2">Hàng cao cấp</span>
            </div>
            <SearchView keyword={keyword} />
        </Page>);
};

export default SearchPage;
