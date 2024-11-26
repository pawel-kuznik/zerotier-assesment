import { PropsWithChildren } from "react";
import "./ItemBox.css";

export interface ItemBoxProps extends PropsWithChildren {
    title?: string;
};

/**
 *  Just a stilized box. Used in lists.
 */
export function ItemBox({ title, children }: ItemBoxProps) {
    return (
        <div className="itembox">
            {title && (<h2>{title}</h2>)}
            {children}
        </div>
    );
};