import { Suspense } from "react";
import { Loader } from "../Loader";
import { List } from "./List";

export interface DeviceListProps {
    networkId: string;
};

/**
 *  The list of devices in a network. The component will make sure all data
 *  is loaded and ready for viewing.
 */
export function DeviceList({ networkId }: DeviceListProps) {
    return (
        <Suspense fallback={<Loader/>}>
            <List networkId={networkId}/>
        </Suspense>
    );
};