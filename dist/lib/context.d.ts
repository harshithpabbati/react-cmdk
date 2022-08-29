import { RenderLink } from "../types";
import { Dispatch, SetStateAction } from "react";
export declare const SelectContext: import("react").Context<{
    selected: number;
}>;
export declare const PageContext: import("react").Context<{
    setSearchPrefix?: Dispatch<SetStateAction<string[] | undefined>> | undefined;
    searchPrefix?: string[] | undefined;
    page?: string | undefined;
}>;
export declare const SearchContext: import("react").Context<{
    search: string;
}>;
export declare const RenderLinkContext: import("react").Context<{
    renderLink?: RenderLink | undefined;
}>;
export declare const OpenContext: import("react").Context<{
    onChangeOpen: (value: boolean) => void;
    isOpen: boolean;
}>;
