import React from "react";
import { ReactNode, useState, useRef, useEffect } from "react";

interface DropdownProps {
    button: ReactNode;
    children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ button, children }) => {
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

export default Dropdown;
