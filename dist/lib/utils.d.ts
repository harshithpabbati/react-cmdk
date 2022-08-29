import { Dispatch, SetStateAction } from "react";
import { JsonStructure } from "../types";
export declare function getItemIndex(items: JsonStructure, id: string, startIndex?: number): number;
export declare function filterItems(items: JsonStructure, search: string, { filterOnListHeading, }?: {
    filterOnListHeading: boolean;
}): {
    items: import("../types").JsonStructureItem[];
    heading?: string | undefined;
    id: string;
}[];
export declare function classNames(...classes: Array<string | null | boolean | undefined>): string;
export declare function renderJsonStructure(jsonStructure: JsonStructure): JSX.Element[];
export declare function useHandleOpenCommandPalette(setIsOpen: Dispatch<SetStateAction<boolean>>): void;
