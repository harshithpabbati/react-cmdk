import { ReactNode } from "react";
import { RenderLink } from "../types";
interface CommandPaletteProps {
    onChangeSelected?: (value: number) => void;
    onChangeSearch: (search: string) => void;
    onChangeOpen: (isOpen: boolean) => void;
    renderLink?: RenderLink;
    placeholder?: string;
    children: ReactNode;
    footer?: ReactNode;
    selected?: number;
    isOpen: boolean;
    search: string;
    page?: string;
}
declare function CommandPalette({ selected: selectedParent, placeholder, onChangeSelected, onChangeSearch, onChangeOpen, renderLink, children, isOpen, footer, search, page, }: CommandPaletteProps): JSX.Element;
declare namespace CommandPalette {
    var Page: typeof import("./Page").default;
    var List: typeof import("./List").default;
    var ListItem: typeof import("./ListItem").default;
    var Icon: typeof import("./Icon").default;
    var FreeSearchAction: typeof import("./FreeSearchAction").default;
}
export default CommandPalette;
