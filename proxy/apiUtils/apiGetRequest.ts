const proxyConfig = require("../../proxy-config.json");

/**
 *  A function to call the ZeroTier API and return the result of the call.
 */
export async function apiGetRequest(endpoint: string) : Promise<string> {    
    return fetch(`https://api.zerotier.com${endpoint}`, {
        headers: {
            "authorization": `token ${proxyConfig.token}`
        }
    }).then(r => {
        return r.text();
    });
};