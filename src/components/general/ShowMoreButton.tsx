import { useAppDispatch } from "@hooks/useAppDispatch";
import { setShowAll } from "@store/slices/showmoreSlice";
import { RootState } from "@store/store";
import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "zmp-ui";

export const ShowMore: React.FC<{ id: string }> = ({ id }) => {
    const showAll = useSelector((state: RootState) => state.showmore.showMoreById[id] ?? false);

    const dispatch = useAppDispatch();

    if (showAll) return null;

    return (
        <div className="mb-5 h-9 py-5 text-center text-14 font-bold text-blue-500"
            onClick={() => dispatch(setShowAll({ id, showAll: true }))}>
            Xem thêm sản phẩm
            <Icon icon="zi-chevron-down" size={24} />
        </div>
    );
};
