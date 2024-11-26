import { APIMember } from "../../utils/useMembers";
import { AttributesList } from "../AttributesList";
import { ItemBox } from "../ItemBox";
import "./DeviceItem.css";

// local alias
const { Row } = AttributesList;

export interface DeviceItemProps {
    device: APIMember;
};

/**
 *  A component respresenting a network device.
 */
export function DeviceItem({ device }: DeviceItemProps) {

    return (
        <div className="deviceitem">
            <ItemBox title="Device">
                <AttributesList>
                    <Row label="Device name">{device.name}</Row>
                    <Row label="Node ID">{device.nodeId}</Row>
                    <Row label="Hidden">{device.hidden ? "hidden" : "visible"}</Row>
                    <Row label="Description">{device.description}</Row>
                    <Row label="Last seen">{device.lastSeen}</Row>
                    <Row label="Physical address">{device.physicalAddress}</Row>
                    <Row label="Client version">{device.clientVersion}</Row>
                    <Row label="Protocol version">{device.protocolVersion}</Row>
                </AttributesList>
            </ItemBox>
        </div>
    );
};