import { PropsWithChildren } from "react";

export interface RowProps extends PropsWithChildren {
    label: string;
};

/**
 *  A row of AttributeList.
 */
export function Row({ label, children }: RowProps) {
    return (
        <div className="attributelistrow">
            <span className="attributelistrow-label">{label}</span>
            <span className="attributelistrow-content">{children}</span>
        </div>
    );
};