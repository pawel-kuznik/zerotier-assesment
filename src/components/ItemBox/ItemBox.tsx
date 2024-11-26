import { PropsWithChildren } from "react";
import "./ItemBox.css";

export interface ItemBoxProps extends PropsWithChildren {
    title?: string;
};

export function ItemBox({ title, children }: ItemBoxProps) {
    return (
        <div className="itembox">
            {title && (<h2>{title}</h2>)}
            {children}
        </div>
    );
};