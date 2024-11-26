import { ReactNode } from "react";
import { MissingData } from "../components/MissingData";

/**
 *  A function to format a data piece that we get from the API. Often
 *  the data passed from the API can be null indicating that we don't
 *  have the data piece. In these cases it's nicer to show shomething
 *  as a placeholder.
 */
export function formatDataPiece(data: number | string | null, placeholder: ReactNode | undefined = undefined) : ReactNode {

    if (data === null) return (<MissingData data={placeholder} />);

    return data;
};