import { useMembers } from "../../utils/useMembers";
import { DeviceItem } from "./DeviceItem";

export interface ListProps {
    networkId: string;
};

/**
 *  The component to show the actual list of the devices. It will throw a promise
 *  when it's in loading state. It has to be wrapped in a Suspense element.
 */
export function List({ networkId }: ListProps) {

    const devices = useMembers(networkId);

    return (
        <div>
            {devices.map(d => (<DeviceItem key={d.nodeId} device={d}/>))}            
        </div>
    );
};