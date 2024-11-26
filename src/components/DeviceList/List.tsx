import { useMembers } from "../../utils/useMembers";
import { DeviceItem } from "./DeviceItem";

export interface ListProps {
    networkId: string;
};

export function List({ networkId }: ListProps) {

    const devices = useMembers(networkId);

    return (
        <div>
            {devices.map(d => (<DeviceItem key={d.nodeId} device={d}/>))}            
        </div>
    );
};