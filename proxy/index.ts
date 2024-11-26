import { getNetworkHandler } from "./handlers/network";
import { getNetworkMemberHandler } from "./handlers/networkMember";

const express = require("express");
const cors = require("cors");

// create the server
const server = express();
const port = 3000;

// create a blank CORS rules. Just so that we can use the endpoints in the frontend.
server.use(cors({ origin: true, credentials: true }));

// define the enpoints
server.get('/network', getNetworkHandler);
server.get("/network/member", getNetworkMemberHandler);

// listen on the given port
server.listen(port, () => {
    console.log(`Proxy server running on port ${port}`);
});