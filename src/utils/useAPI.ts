import axios from "axios";

const zeroTierAxios = axios.create({
    baseURL: "http://localhost:3000"
});

/**
 *  Hook to provide easy access to ZeroTier API. The hook provides
 *  functions to access GET methods. If needed more methods can be added,
 *  but for now it's enough.
 * 
 *  The hook should be called in components that are wrapped inside APIConfigProvider.
 *  API calls that aren't called inside such component will result in undefined
 *  results.
 */
export function useAPI() {

    const get = (endpoint: string) => {
        return zeroTierAxios.get(endpoint);
    };

    return { 
        get
    };
};