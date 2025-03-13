import { useAppDispatch } from "@hooks/useAppDispatch";
import { addToCart, clearCart, removeToCart } from "@store/slices/cartSlice";
import { ProductType } from "@type/index";
import React, { FC } from "react";

export const CartItem: FC<{ product: ProductType, count: number }> = ({ product, count }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="flex p-2.5 text-12">
            <div className="w-80">
                <img className="w-54" src={product.thumbnail} />
            </div>
            <div className="w-full ">
                <div className="flex justify-between">
                    <span>{product.title}</span>
                    <div className="text-end">
                        <div className="text-14 text-red"> {(product.price * (100 - product.discountPercentage) / 100).toLocaleString("vi-VN")} ₫</div>
                        <del>{product.price}</del>
                    </div>
                </div>
                <div className="py-2">
                    <span className="rounded-md bg-softgray p-2"> Màu trắng</span>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="mt-2 w-fit rounded-sm bg-lightblue px-1 py-0.5 text-navi">
                        <i className="product-label-flashsale" /> Flashsale kết thúc sau
                    </div>
                    <div tabIndex={0} className="dropdown-content mt-1 w-270 rounded-md bg-softgray p-2 text-12 text-gray-500">
                        <div className="font-bold">Chính sách Online giá rẻ quá</div>
                        <li>Giao hàng nhanh chóng (tùy khu vực)</li>
                        <li>Mỗi số điện thoại chỉ mua được 3 sản phẩm trong 1 tháng</li>
                    </div>
                </div>
                <div className="mt-2 px-1 py-0.5 text-navi">3 khuyến mãi</div>
                <div className="flex items-center justify-end text-center text-14 font-bold">
                    <span onClick={() => dispatch(clearCart({ product }))} className="me-4 text-12 font-normal">Xóa</span>
                    <div onClick={() => dispatch(removeToCart({ product }))} className="w-7 rounded-bl-md rounded-tl-md border p-1">-</div>
                    <div className="border px-3 py-1">{count}</div>
                    <div onClick={() => dispatch(addToCart({ product }))} className="w-7 rounded-br-md rounded-tr-md border p-1">+</div>
                </div>
            </div>
        </div>
    );
};
