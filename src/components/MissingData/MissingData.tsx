import { ReactNode } from "react";

export interface MissingDataProps {
    data?: ReactNode;
};

/**
 *  A small component to use when we are missing a piece of
 *  data and need to show a placeholder.
 */
export function MissingData({ data = "---" }: MissingDataProps) {
    return (
        <span className="missingdata">
            {data}
        </span>
    );
};