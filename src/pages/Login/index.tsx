import { Search } from "@modules/index";
import React, { } from "react";
import { Page } from "zmp-ui";

export const Login: React.FunctionComponent = () => {

    return (
        <Page className="overflow-y-auto">
            <Search />
            <div className="relative h-360 rounded-b-3xl bg-navi">
                <div className="flex w-full justify-center px-4">
                    <img className="absolute left-1/2 top-0 w-360 -translate-x-1/2 transform" src="https://cdn.tgdd.vn/2022/10/banner/TGDD-540x270-1.png" alt="" />
                    <div className=" mt-28 flex w-full flex-wrap justify-center rounded-lg bg-white py-28 text-center shadow">
                        <div className="mb-6 w-full text-24">
                            Tra cứu thông tin đơn hàng
                        </div>
                        <div className="mx-auto w-300 rounded-3xl border p-2.5">
                            <i className="iconoh-phone-blue"/>
                            <input className="ms-2 w-250 focus:outline-none " type="text" placeholder="Nhập số điện thoại mua hàng" />
                        </div>
                        <div className="my-3 w-300 rounded-3xl bg-navi p-2.5 text-center text-white">TIẾP TỤC</div>
                    </div>
                </div>
            </div>
        </Page>);
};

export default Login;
