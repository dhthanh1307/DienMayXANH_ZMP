import { Dropdown } from "@components/index";
import React, { FC } from "react";

export const Technical: FC = () => {
    return (
        <div className="space-y-2 p-2.5">
            <Dropdown button={
                <button className="w-full rounded-md bg-softgray px-4 py-3 text-start text-16 ">
                    Thông tin sản phẩm
                </button>}>
                <div className="flex w-full gap-3 border-b p-2.5">
                    <div className="w-1/3">  Loại máy:</div>
                    <div className="w-2/3 text-navi">1 chiều (chỉ làm lạnh)</div>
                </div>
                <div className="flex w-full gap-3 border-b p-2.5">
                    <div className="w-1/3"> Inverter:   </div>
                    <div className="w-2/3 text-navi">Có Inverter</div>
                </div>
                <div className="flex w-full gap-3 border-b p-2.5">
                    <div className="w-1/3">Công suất làm lạnh</div>
                    <div className="w-2/3 text-navi">1 HP - 9.040 BTU</div>
                </div>
                <div className="flex w-full gap-3 border-b p-2.5">
                    <div className="w-1/3">Phạm vi làm lạnh hiệu quả:</div>
                    <div className="w-2/3">Dưới 15m² (từ 30 đến 45m³)</div>
                </div>
                <div className="flex w-full gap-3 border-b p-2.5">
                    <div className="w-1/3">Thời gian bảo hành cục nóng:</div>
                    <div className="w-2/3">Máy nén 12 năm - Kích hoạt điện tử thành công</div>
                </div>
            </Dropdown>
            <Dropdown button={
                <button className="w-full rounded-md bg-softgray px-4 py-3 text-start text-16 ">
                    Mức tiêu thụ năng lượng
                </button>}>
                <div className="flex w-full gap-3 border-b p-2.5">
                    <div className="w-1/3">Tiêu thụ điện:</div>
                    <div className="w-2/3 text-navi">0.75 kW/h</div>
                </div>
                <div className="flex w-full gap-3 border-b  p-2.5">
                    <div className="w-1/3">Công nghệ tiết kiệm điện:</div>
                    <div className="w-2/3">Inverter ECO tích hợp A.I</div>
                </div>
            </Dropdown>
            <Dropdown button={
                <button className="w-full rounded-md bg-softgray px-4 py-3 text-start text-16 ">
                    Thông số kích thước/ lắp đặt
                </button>}>
                <div className="flex w-full gap-3 border-b p-2.5">
                    <div className="w-1/3">Kích thước - Khối lượng dàn lạnh:</div>
                    <div className="w-2/3 text-navi">Dài 76.5 cm - Cao 29 cm - Dày 21.4 cm - Nặng 8 kg</div>
                </div>
                <div className="flex w-full gap-3 border-b  p-2.5">
                    <div className="w-1/3">Kích thước - Khối lượng dàn nóng:</div>
                    <div className="w-2/3">Dài 74 cm - Cao 51.1 cm - Dày 26.2 cm - Nặng 18 kg</div>
                </div>
            </Dropdown>
        </div>
    );
};
