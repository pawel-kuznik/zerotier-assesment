import { apiGetRequest } from "../apiUtils/apiGetRequest";

/**
 *  A handled for the /network endpoint. This function will ask the ZeroTier REST API
 *  and pass along the response.
 */
export function getNetworkHandler(req: any, res: any) {
    apiGetRequest("/api/v1/network").then(response => {
        res.setHeader("content-type", "application/json");
        res.send(response);
    }).catch((e) => {
        console.log(e);
        res.send("ERROR");
    });
}