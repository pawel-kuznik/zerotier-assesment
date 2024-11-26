import { ReactNode } from "react";
import { MissingData } from "../components/MissingData";

/**
 *  Helper function to format timestamp or null into a suitable react node.
 */
export function formatDate(timestamp: number | null | undefined) : ReactNode {

    if (timestamp === null || timestamp === undefined) return (<MissingData/>);

    return new Date(timestamp).toLocaleString();
};