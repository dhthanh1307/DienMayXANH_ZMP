import { Banner } from "@components/Banner/Banner";
import { Carousel } from "@components/Carousel";
import { Categories } from "@components/Categories";
import { Discount } from "@components/DiscountSwiper";
import { ProductDiscount } from "@modules/ProductDiscount";
import { Recommend } from "@modules/ProductGridView";
import { ListView } from "@modules/ProductScrollView";
import { Search } from "@modules/Search";
import React, { } from "react";
import { Box,Page } from "zmp-ui";
const HomePage: React.FunctionComponent = () => {
  // const navigate = useNavigate();
  return (
    <Page className="overflow-y-auto">
      <Banner
        src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/74/f3/74f3c5d044c73bf888d60d1db1307080.gif"
        className="h-9 w-full"
        containerClassName="bg-darkblue justify-center flex" />
      <Search />
      <Banner
        src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/2a/0b/2a0b8259c9d8f666aa04dd0af68f3cf3.png"
        className="h-36 w-full" />
      <Categories />
      <h3 className="bg-softgray p-4 text-18 font-bold">Khuyến mãi Online</h3>
      <Banner
        src="https://cdnv2.tgdd.vn/mwg-static/common/Campaign/5b/d8/5bd8b67a7e6475657f27a96b7898252e.png"
        className="rounded-lg p-2" />
      <Discount />
      <ProductDiscount />
      <Carousel />
      <div className="bg-white p-3 text-18 font-bold ">Gợi ý cho bạn</div>
      <Recommend />
      <div className="mt-4 bg-white p-3 text-18 font-bold"> Sản phẩm đặc quyền</div>
      <Banner
        src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/93/ae/93ae753990ad8ca0b4f0e6b3df096e12.png"
        className="h-360 w-full rounded-xl px-4"
        containerClassName="px-4" />
      <ListView />
      <div className="bg-gray-100">
        <div className="p-3 text-18 font-bold">
          Tháng Thương Hiệu Aqua
        </div>
        <Banner
          src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/1b/c9/1bc9860780d38c7fc0528b63725f7957.png"
           />
        <div className="p-3 text-18 font-bold">
          Gian hàng ưu đãi
        </div>
        <Box className="bg-white">
          <div className="flex w-full flex-wrap justify-center gap-3">
            {[
              "https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/cb/72/cb72923f5e12d9b06e4f5a86aadd42ac.png",
              "https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/69/20/6920d9a80dfc8a98ec8000c4403363e8.png",
              "https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/e2/51/e2513636ff682b4da055b117e2dcb10d.png",
              "https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/3f/95/3f95a2fbf065c3e595a86a0dc938f878.png"
            ].map((src, index) => (
              <Banner key={index} src={src} className="w-44" />
            ))}
          </div>
        </Box>
      </div>
    </Page>
  );
};

export default HomePage;
