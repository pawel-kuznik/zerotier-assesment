import { APINetwork } from "../../utils"
import { AttributesList } from "../AttributesList";
import { ItemBox } from "../ItemBox";

const { Date, DataPiece } = AttributesList;

export interface NetworkMetaProps {
    network: APINetwork;
};

export function NetworkMeta({ network }: NetworkMetaProps) {
    return (
        <ItemBox title="Network">
            <AttributesList>
                <DataPiece label="Network ID">{network.id}</DataPiece>
                <Date label="Clock">{network.clock}</Date>
                <DataPiece label="Broadcast enabled">{network.enableBroadcast ? "enabled" : "disabled"}</DataPiece>
                <DataPiece label="Description">{network.description}</DataPiece>
                <DataPiece label="Rules source">{network.rulesSource}</DataPiece>
                <DataPiece label="Online members">{network.onlineMemberCount}</DataPiece>
                <DataPiece label="Authorized members">{network.authorizedMemberCount}</DataPiece>
                <DataPiece label="Total members">{network.totalMemberCount}</DataPiece>
                <Date label="Last modified">{network.lastModified}</Date>
                <DataPiece label="Multicast limit">{network.multicastLimit}</DataPiece>
                <DataPiece label="Private">{network.private ? "private" : "not private"}</DataPiece>
                <DataPiece label="Owner ID">{network.ownerId}</DataPiece>
            </AttributesList>
        </ItemBox>
    );
};