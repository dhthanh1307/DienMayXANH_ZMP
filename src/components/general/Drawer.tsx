import classNames from "classnames";
import React, { FC } from "react";

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export const Drawer: FC<DrawerProps> = ({ isOpen, onClose, title, children }) => {
    return (
        <div className={classNames(
            "fixed right-0 top-0 z-50 h-full w-full bg-white transition-transform duration-300 ease-in-out",
            { "translate-x-0": isOpen, "translate-x-full": !isOpen }
        )}>
            <div className="flex items-center justify-between bg-white px-2">
                <div className="p-2.5 pt-6 text-18 font-semibold">{title}</div>
                <img onClick={onClose} className="size-4 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/106/106830.png" />
            </div>
            <hr />
            {children}
        </div>
    );
};
