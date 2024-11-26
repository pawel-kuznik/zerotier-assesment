import { formatDataPiece } from "../../utils/formatDataPiece";
import { Row } from "./Row";

export interface DateProps {
    label: string;
    children: string | number | null;
};

/**
 *  Attribute list row optimized to show a data piece.
 */
export function DataPiece({ label, children }: DateProps) {
    return (
        <Row label={label}>{formatDataPiece(children)}</Row>
    );
};