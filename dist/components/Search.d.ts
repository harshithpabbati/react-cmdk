import React from "react";
interface SearchProps {
    onChange: (value: string) => void;
    placeholder?: string;
    prefix?: string[];
    value: string;
}
declare const _default: React.ForwardRefExoticComponent<SearchProps & React.RefAttributes<HTMLInputElement>>;
export default _default;
