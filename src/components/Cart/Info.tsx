import { Product } from "@components/Product/type";
import React, { FC } from "react";

export const CartInfo: FC<{product:Product,count:number}> = ({product,count  }) => {
    return (
        <div className="py-2.5">
            <div className="rounded-tl-lg rounded-tr-lg border p-2.5">
                <div className="flex" >
                    <div className="w-10">
                        <img src={product.thumbnail} className="w-9" />
                    </div>
                    <div className="text-12 text-blackgray">
                        <div>{product.title}</div>
                        <div>
                            <span>Màu trắng</span> <span className="ms-8">SL: {count}</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className=" rounded-bl-lg rounded-br-lg border bg-softgray px-2.5">
                <div className="flex justify-between border-b py-2.5 text-14">
                    <div className="font-bold">Giao 20h00-22h00, hôm nay (07/03)</div>
                    <div className="text-navi">Đổi thời gian</div>
                </div>
                <div className="flex justify-between border-b py-2.5 text-12">
                    <div >Phí giao hàng</div>
                    <div className="text-red">Miễn phí</div>
                </div>
                <div className=" py-2.5 text-12">
                    Giao bởi nhân viên <i className="sprite-partner_delivery-Dienmayxanh" /> , được đồng kiểm
                </div>
            </div>

        </div>
    );
};
