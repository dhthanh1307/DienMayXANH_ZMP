import React, { Suspense } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import { Banner, Banner2, Banner3, Banner4 ,Banner5,Banner6} from "../components/banner";
import { Search } from "../components/search"
import { Categories } from "../components/categories"
import { Discount } from "../components/discountSwiper"
import { DiscountProduct } from "../components/product/discountProduct"
import { Carousel } from "../components/carousel";
import { Recommend } from "../components/product/recommendProduct";
import { ListView } from "../components/product/listProduct";
import { ProductAPI } from "../components/product/product_3rdAPI";
const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <Page className="page overflow-y-auto">
      <Banner />
      <Search />
      <Banner2 />
      <Categories />
      <h3 className="p-4 font-bold bg-[#F2F4F7]">Khuyến mãi Online</h3>
      <Banner3 />
      <Discount />
      <DiscountProduct />
      <Carousel />
      <div className="text-4 font-bold p-3">Gợi ý cho bạn</div>
      <Recommend />
      <div className="text-4 font-bold p-3 mb-5"> Sản phẩm đặc quyền</div>
      <Banner4 />
      <ListView />
      <div className="bg-gray-100">
        <div className="text-4 font-bold p-3">
          Tháng Thương Hiệu Aqua
        </div>
        <Banner5/>
        <div className="text-4 font-bold p-3">
          Gian hàng ưu đãi
        </div>
        <Banner6/>
      </div>
      <ProductAPI/>
    </Page>
  );
};

export default HomePage;
