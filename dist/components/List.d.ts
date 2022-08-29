import { ReactNode } from "react";
interface ListProps {
    children: ReactNode;
    heading?: string;
}
export default function List({ children, heading }: ListProps): JSX.Element;
export {};
