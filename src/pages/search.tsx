import { useLocation } from "react-router-dom";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import React, { Suspense, useEffect } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import { SearchView } from "../components/product/searchView";

const SearchPage: React.FunctionComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const keyword = location.state?.keyword;

    return (
        <Page className="page overflow-y-auto">
            <Banner />
            <Search />
            <div className="h-12 flex items-center gap-4 bg-white font-bold px-2">
                <span className="text-blue-300 border border-0 border-b-4 border-blue-300">
                    Sản phẩm mới
                </span>
                <span>
                    Sản phẩm cũ
                </span><span>
                    Tin tức
                </span>
            </div>
            <div className="text-[12px] flex gap-1 bg-white ps-2">
                <input type="checkbox"  />
                <span className="me-2">Giảm giá</span>
                <input type="checkbox" />
                <span  className="me-2">Đặc quyền điện máy XANH</span>
                <input type="checkbox" />
                <span  className="me-2">Hàng cao cấp</span>
            </div>
            <SearchView keyword={keyword} />
        </Page>);
};

export default SearchPage;
