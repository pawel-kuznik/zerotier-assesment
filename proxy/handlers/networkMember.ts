import { apiGetRequest } from "../apiUtils/apiGetRequest";

/**
 *  A handled for the /network/XXX/member endpoint. This function will ask the ZeroTier REST API
 *  and pass along the response.
 */
export function getNetworkMemberHandler(req: any, res: any) {

    const networkId = req.query.networkId;

    apiGetRequest(`/api/v1/network/${networkId}/member`).then(response => {
        res.setHeader("content-type", "application/json");
        res.send(response);
    }).catch((e) => {
        console.log(e);
        res.send("ERROR");
    });
}