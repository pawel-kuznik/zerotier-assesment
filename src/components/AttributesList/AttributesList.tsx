import { PropsWithChildren } from "react";
import { Row } from "./Row";
import { Date } from "./Date";
import "./AttributesList.css";
import { DataPiece } from "./DataPiece";

export interface AttributesListProps extends PropsWithChildren {

};

/**
 *  A component to show a formatted list of attributes of a network, member,
 *  or so on. Each child should be an AttributyesList.Row component, but
 *  other elements are also permitted (they can cause strange styling issues). 
 */
function AttributesList({ children }: AttributesListProps) {
    return (
        <div className="attributeslist">
            {children}
        </div>
    );
};

// assign sub components
AttributesList.DataPiece = DataPiece;
AttributesList.Row = Row;
AttributesList.Date = Date;

export { AttributesList }; 
