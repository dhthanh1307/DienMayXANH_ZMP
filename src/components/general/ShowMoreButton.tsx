import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { setShowAll } from "@store/slices/showmoreSlice";
import React from "react";
import { Icon } from "zmp-ui";

export const ShowMore: React.FC<{ id: string }> = ({ id }) => {
    const showAll = useAppSelector(state => state.showmore.showMoreById[id] ?? false);

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
