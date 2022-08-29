import { SVGProps } from "react";
import { IconName } from "../types";
export declare type IconType = "outline" | "solid";
export interface IconProps extends SVGProps<SVGSVGElement> {
    type?: IconType;
    name: IconName;
}
export default function Icon({ name, type, ...rest }: IconProps): JSX.Element;
