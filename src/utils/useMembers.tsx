import { useSuspenseQuery } from "@tanstack/react-query";
import { useAPI } from "./useAPI";

export interface APIMember {
    clock: number | null;
    networkId: string | null;
    nodeId: string | null;
    description: string | null;
    hidden: boolean | null;
    name: string | null;
    lastSeen: number | null;
    physicalAddress: string | null;
    clientVersion: string | null;
    protocolVersion: number | null;
};

/**
 *  A hook to get all members of a specifici network.
 */
export function useMembers(networkId: string) : APIMember[] {

    const { get } = useAPI();
    return useSuspenseQuery({
        queryKey: ['network-member', networkId],
        queryFn: () => get(`/network/member?networkId=${networkId}`).then(response => response.data) }
    ).data;
};