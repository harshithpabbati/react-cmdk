import { ReactNode } from "react";
interface PageProps {
    searchPrefix?: string[];
    onEscape?: () => void;
    children: ReactNode;
    id: string;
}
export default function Page({ searchPrefix, children, onEscape, id, }: PageProps): JSX.Element | null;
export {};
