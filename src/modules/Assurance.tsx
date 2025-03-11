import { AssuranceItem } from "@components/Assurance/itemAssurance";
import React, { FC } from "react";

export const Assurance: FC = () => {
    return (
        <div >
          <AssuranceItem imgSrc="https://cdnv2.tgdd.vn/pim/cdn/images/202410/Exchange232102.png">
                    Hư gì đổi nấy <span className="font-bold">12 tháng </span>tại 1962 siêu thị toàn quốc (Miễn phí tháng đầu) <span className="text-navi">Xem chi tiết</span>
                </AssuranceItem>
                <div className="border-y">
                    <AssuranceItem imgSrc="https://cdnv2.tgdd.vn/pim/cdn/images/202411/Delivery101707.png">
                        Giao hàng nhanh chóng <span className="text-navi">Xem chi tiết</span>
                    </AssuranceItem>
                </div>
                <AssuranceItem imgSrc="https://cdnv2.tgdd.vn/pim/cdn/images/202411/icon%20bao%20hanh111204.png">
                    Bảo hàng <span className="font-bold">chính hãng 2 năm </span>tại các trung tâm bảo hành chính hãng <span className="text-navi">Xem địa chỉ bảo hành</span>
                </AssuranceItem>
        </div>
    );
};
