# Zaro Tier Assesment

The task was made with React as the UI framework and a small proxy server written in node.js
to circumvent CORS protection.

I didn't prepare a Dockerfile cause the project is rather simplistic in deployment (build the frontend
to ship it and run proxy) and we need to insert API access token which would require configuration. Please
follow these steps:

1. Install project with `npm install`.
2. Insert access token into `./proxy-config.json` file. The file should look like:
```
{
    "token": "XXX-token-XXX"
}
```
3. Build the proxy server with `npm run build-proxy`
4. Run the proxy server with `npm run run-proxy`
5. Run the frontend with `npm run dev`. After running the command, the CLI will produce a localhost address under which the frontend is accessible.

## The proxy server

The proxy server is rather simplistic and serves as a way to circumvent the CORS protection in the browser.
The server is based on express (as it's super popular node.js-base HTTP server) with two routes:

- `/network`
- `/network/member`

Both roues make a call to the Zero Tier Central API and retrier the list of networks and list of members
respectively. Then the result is passed to the frontend whithout any changes.

Ideally, the proxy server wouldn't be required and the application could consume the Central API by making
calls from the browser, but that would require changes in the Central API code.

## The frontend

The frontend is just a list of networks assigned to the account of the access token and a sublists of devices
of each network.

The frontend communicates with the proxy server with use of `axios` and `@tanstack/react-query`. These tools
are used mostly cause it simplifies handling of async nature of HTTP connection.

The axios allows for easy configuration of a HTTP client. Initially, it was so that I could use it directly
against Context API, but web console rudely informed me that Context API doesn't provide required headers.
The use of library is rather superficial now, but it's lightweight, so it's still there.

The react-query is used cause the library allows for defining an async query with given parameters (the library
calls them keys) and then reuse them across react code. In our case it allows for use of `<Suspense>` mechanism.
I opted for Suspense cause it keeps the code declarative and clean in comparison to using `useEffect` and assigning
data to a state.

Let us also talk about the elephant in the room when it comes to React applications: state management. The application
doesn't use any, nor it doesn't really have any state. Of course, I could have used zustand or redux to provide
fetched data to the components, but it makes very little sense as I would need to define an additional layer and
then consume data from that layer. It would make more sense if I would need to react to data changes (or parts of the data),
or handle input and processing, but there is none of that in the application.

## Possible improvements 

- Remove the need for the proxy server. It's very superficial and it's not unheard for a REST API to offer CORS headers
to allow for consumption directly from the browser.

- The objective mentioned only displaying data, but it would be nice to also have management of networks and devices
from such list. Possibly with use of modal components or editor pages.

- A better UI component management. The styling components are simple and rather limited. It's ok for this specific use,
but I am a fan of design/component libraries as brings better seperation of concerns in development process.

- Tests. I didn't put any cause the code is so simple and time was in high demand, but code should be tested.

- Localization. Applications should be translated for their users. This lower that bar for users to use the application.
Especially in developing countries (or Japan) where adoption of English language is low.

- A really cool thing to do, would be to make a visual map of networks and devices drawn with SVG or Canvas. However,
this would more of a gimmick than actual configuration or information page.

- Access token should be provided via ENV. I was a little bit lazy and didn't do it, but it would make more secure
and make it easier to wrap in a Docker container.