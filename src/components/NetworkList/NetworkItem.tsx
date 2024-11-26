import { APINetwork } from "../../utils";
import { DeviceList } from "../DeviceList";
import { NetworkMeta } from "./NetworkMeta";

export interface NetworkItemProps {
    network: APINetwork;
};

/**
 *  A component representing a single network.
 */
export function NetworkItem({ network }: NetworkItemProps) {

    const networkId = network.id;

    return (
        <div className="networkitem">
            <NetworkMeta network={network}/>
            {networkId && (<DeviceList networkId={networkId}/>)}
        </div>
    );
};