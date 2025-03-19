import { categoryReselector } from "@store/reselector/productReselector";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";

import { ProductItem } from "./Product/ItemProduct";



export const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 2 });

    const products = useSelector(categoryReselector);

    // Chuyển slide bằng button
    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);

    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);



    return (
        <div className="relative mx-auto w-full max-w-3xl">
            <div className="overflow-hidden " ref={emblaRef}>
                <div className="flex">
                    {products.map((product, index) => (
                        <div key={index} className="w-full">
                            <div className="w-[50vw]">
                                <ProductItem product={product} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 m-2 -translate-y-1/2 transform rounded-3xl bg-softgray bg-opacity-50 p-2 shadow-lg">
                <img className="size-4 rotate-180 opacity-50" src="https://cdn-icons-png.flaticon.com/512/130/130884.png" />
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 m-2 -translate-y-1/2 transform rounded-3xl bg-softgray bg-opacity-50 p-2 shadow-lg">
                <img className="size-4 opacity-50" src="https://cdn-icons-png.flaticon.com/512/130/130884.png" />
            </button>
        </div>
    );
};

export default EmblaCarousel;
