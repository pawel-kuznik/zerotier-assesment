import { Suspense } from "react";
import { Loader } from "../Loader";
import { List } from "./List";

export interface DeviceListProps {
    networkId: string;
};

export function DeviceList({ networkId }: DeviceListProps) {
    return (
        <Suspense fallback={<Loader/>}>
            <List networkId={networkId}/>
        </Suspense>
    );
};