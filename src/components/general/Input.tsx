import classNames from "classnames";
import React from "react";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ id, label, type = "text", value, onChange }) => {
    return (
        <div className="relative">
            <input
                id={id} type={type} value={value} onChange={onChange} placeholder=" "
                className="peer block w-full rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            />
            <label htmlFor={id}
                className={classNames(
                    "bg-white absolute left-2 transform text-sm text-gray-500 transition-all",
                    {
                        "top-2 -translate-y-4 scale-75 ": value !== "",
                        "top-1/2 -translate-y-1/2 scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100": value.trim() === "",
                        "peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600": true
                    }
                )}>
                {label}
            </label>
        </div>
    );
};
