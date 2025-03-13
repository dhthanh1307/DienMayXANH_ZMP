import React from "react";
import { ReactNode, useEffect,useRef, useState } from "react";
import { DropdownProps } from "src/type/DropdownProps";



export const Dropdown: React.FC<DropdownProps> = ({ button, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={dropdownRef}>
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                {button}
            </div>
            {isOpen && (
                <div className=" mt-1 w-full">
                    {children}
                </div>
            )}
        </div>
    );
};

