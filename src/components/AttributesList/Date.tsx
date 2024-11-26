import { formatDate } from "../../utils";
import { Row } from "./Row";

export interface DateProps {
    label: string;
    children: number | null;
};

/**
 *  Attribute list row optimized to show a date.
 */
export function Date({ label, children }: DateProps) {
    return (
        <Row label={label}>{formatDate(children)}</Row>
    );
};