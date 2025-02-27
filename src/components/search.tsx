import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box,Icon } from "zmp-ui";

export const Search: FC = () => {
    const navigate =useNavigate();
    const [keyword,setKeyword]=useState('');
    const handleSearch=()=>{
        navigate('/search',{state:{keyword}})
    }
    const handleHome=()=>{
        navigate('/')
    }
    return (
        <Box className="bg-white">
            <div className="h-22 bg-[#2A83E9] flex flex-wrap justify-center">
                <div className="flex justify-center py-1 gap-1">
                    <img onClick={()=>handleHome()}className="h-8 w-8" src="https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-The-Gioi-Di-Dong-MWG.png" />
                    <div className="w-60 h-8 rounded-2xl bg-[#5194E8] flex justify-between items-center text-white text-[10px] p-2 ">
                        <div>
                            <Icon icon="zi-location" size={16} />
                            <span className="ms-1">Hồ Chí Minh</span>
                        </div>
                        <Icon icon="zi-chevron-right" size={16} />


                    </div>
                    <div className="w-20 h-8 rounded-2xl bg-[#5194E8] text-white text-[10px] flex justify-center items-center">
                        <Icon icon="zi-user" size={16} />
                        <span>Đăng nhập</span>
                    </div>
                </div>
                <div className="flex justify-center w-full h-9 pb-2 px-4">
                    <div className="bg-[#F2F4F7] rounded-tl-lg rounded-bl-lg w-13 flex items-center justify-center">
                        <img className="w-7 h-6" src="https://cdn-icons-png.flaticon.com/512/2889/2889278.png" alt="" />
                    </div>
                    <div className="bg-white w-full  flex justify-center items-center">
                        <div onClick={()=>handleSearch()}><Icon icon="zi-search" size={16} ></Icon></div>
                        <input
                            className="text-[10px] p-1 w-[80%]"
                            type="text"
                            placeholder="Bạn tìm gì..." value={keyword} onChange={(e)=>setKeyword(e.target.value)}></input>
                    </div>
                    <div className="bg-[#F2F4F7] rounded-tr-lg rounded-br-lg w-13 flex justify-center">
                        <img className="w-10" src="https://cdn-icons-png.flaticon.com/512/5166/5166615.png" alt="" />
                    </div>
                </div>
            </div>
        </Box>
    );
};
