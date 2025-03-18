import React from "react";

interface CategoryTabsProps {
    items: string[];
    selectedItem: string;
    onSelect: (item: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ items, selectedItem, onSelect }) => {
    return (
        <div className="w-full overflow-x-auto py-4">
            <div className="inline-flex gap-4 truncate font-bold">
                {items.map((item) => (
                    <div
                        key={item}
                        className={`cursor-pointer rounded-3xl border px-4 py-2.5 transition-all
                            ${selectedItem === item ? "bg-blackblue text-white" : "hover:bg-gray-200"}`}
                        onClick={() => onSelect(item)}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryTabs;
