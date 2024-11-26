import { useSuspenseQuery } from "@tanstack/react-query";
import { useAPI } from "./useAPI";

export interface APINetworkConfig {
    id: string | null;
    creationTime: number | null;
    name: string | null;
    private: boolean | null;
};

export interface APINetwork {
    id: string | null;
    clock: number | null;
    config: APINetworkConfig;
    enableBroadcast: boolean | null;
    description: string | null;
    rulesSource: string | null;
    onlineMemberCount: number | null;
    authorizedMemberCount: number | null;
    totalMemberCount: number | null;
    lastModified: number | null;
    mtu: number | null;
    multicastLimit: number | null;
    private: boolean | null;
    ownerId: string | null;
};

/**
 *  A hook to get all networks an access token has access to (it's configured in the proxy).
 */
export function useNetworks() : APINetwork[] {

    const { get } = useAPI();
    return useSuspenseQuery({
        queryKey: ['network'],
        queryFn: () => get("/network").then(response => response.data),
        
    }).data;
};