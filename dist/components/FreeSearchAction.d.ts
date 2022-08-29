/// <reference types="react" />
import { ButtonProps, LinkProps } from "./ListItem";
interface FreeSearchActionProps extends Omit<ButtonProps & LinkProps, "index"> {
    index?: number;
    label?: string;
}
export default function FreeSearchAction({ label, ...props }: FreeSearchActionProps): JSX.Element;
export {};
