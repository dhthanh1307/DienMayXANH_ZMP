import React from "react";
import {Icon} from "zmp-ui";

interface ShowMoreProps {
    showAll: boolean;
    setShowAll: (value:boolean) => void;
}

export const ShowMore: React.FC<ShowMoreProps> = ({ showAll, setShowAll }) => {
    if (showAll) return null;
    return (
        <div className="h-9 font-bold text-blue-500 text-center py-5 mb-5"
            onClick={() => setShowAll(true)}>
            Xem thêm sản phẩm
            <Icon icon="zi-chevron-down" size={24} />
        </div>
    );
};
