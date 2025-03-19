import { ProductType } from "@type/index";
import React, { FC } from "react";

export const CartInfo: FC<{ product: ProductType, count: number }> = ({ product, count }) => {
    return (
        <div className="">
            <div className="rounded-tl-lg rounded-tr-lg border ">
                <div className="flex" >
                    <div className="w-9">
                        <img src={product.thumbnail} className="w-9" />
                    </div>
                    {/* <div className="text-12 text-blackgray">
                        <div>{product.title}</div>
                        <div>
                            <span>Màu trắng</span> <span className="">SL: {count}</span>
                        </div>
                    </div> */}
                </div>

            </div>
            <div className=" rounded-bl-lg rounded-br-lg border bg-softgray">
                <div className="flex justify-between border-b text-14">
                    {/* <div className="font-bold  m-2.5  ">Giao 20h00-22h00, hôm nay (07/03)</div> */}
                    {/* <div className="text-end text-navi  m-2.5  ">Đổi thời gian</div> */}
                </div>
                <div className=" border-b text-12">
                    <div className=" flex justify-between">
                        <div >Phí giao hàng</div>
                        <div className="text-red">Miễn phí</div>
                    </div>
                </div>
                <div className="  text-12">
                    {/* <div className="m-2.5">
                        Giao bởi nhân viên <i className="sprite-partner_delivery-Dienmayxanh" /> , được đồng kiểm
                    </div> */}
                </div>
            </div>

        </div>
    );
};
