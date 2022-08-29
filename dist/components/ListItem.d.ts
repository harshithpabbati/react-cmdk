import { IconType } from "./Icon";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { IconName, RenderLink } from "../types";
export declare type ListItemType = "Link" | "Action";
interface ListItemBaseProps {
    closeOnSelect?: boolean;
    icon?: FC | IconName;
    iconType?: IconType;
    showType?: boolean;
    disabled?: boolean;
    keywords?: string[];
    index: number;
}
export interface LinkProps extends ListItemBaseProps, DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    renderLink?: RenderLink;
}
export declare function Link({ renderLink: localRenderLink, closeOnSelect, disabled, showType, className, iconType, children, onClick, index, icon, ...rest }: LinkProps): JSX.Element;
export interface ButtonProps extends ListItemBaseProps, DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}
export declare function Button({ closeOnSelect, showType, className, children, iconType, onClick, index, icon, ...rest }: ButtonProps): JSX.Element;
export default function ListItem(props: ButtonProps & LinkProps): JSX.Element;
export {};
