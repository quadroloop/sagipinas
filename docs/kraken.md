---
id: kraken-doc
title: Seantinel / kraken API
---

> The backend service for the Seantinel Project built with NodeJS

### Main Features:

- Supports Real-time Updates via Websockets using Socket.io
- Supports REST API endpoints
- Open, Cross-Origin Request Enabled.

## Documentation

> The complete project documentation can be found here:

https://docs.google.com/document/d/1WA-s12B3Y8vTE4WQVeguRMCxdUF_XfPRMaNKsNOTw0c/edit#heading=h.z6ne0og04bp5

### Development:

**with yarn:**

Install Dependencies

```sh
yarn
```

Development:

```sh
yarn start
```

Build:

```
 yarn build
```

**with npm:**

Installation:

```sh
npm i
```

Development:

```sh
npm start
```

Build:

```
 npm build
```

### REST API Endpoints:

#### [GET] `/incidents`

> gives a list of incidents and reports available in the system

You can also search all incidents using the following endpoint.

- `[GET]/incidents/search`
  Required Parameters:

- `query` - (String) the system will provided the closest match using a fuzzy search algorithm/

Sample Response:

```json
[
  {
    "id": "47f2bbe1-0ed2-46cf-bc4f-82416665ac91",
    "details": "Illegal Fishing Activity",
    "device_id": "HN-00001",
    "type": "illegal_fishing",
    "name": "EMERGENCY ALERT",
    "title": "ILLEGAL FISHING REPORT",
    "address": "N/A",
    "reportee": "Anonymous",
    "source_platform": "node",
    "date": "August 21 2020,04:42:03 PM",
    "coordinates": {
      "long": 121.921724,
      "lat": 14.5446942
    },
    "report_type": "MANUAL",
    "status": "CONFIRMED",
    "verifier": "Hydraean_Admin"
  }
]
```

#### [GET] `/devices`

> Gives a list of all unique devices that is part of the network

you can also search devices that are registered in the system using:

- `[GET]/devices/search`
  Required Parameters:

- `query` - (String) the system will provided the closest match using a fuzzy search algorithm

Sample Response:

```json
[
  {
    "id": "47f2bbe1-0ed2-46cf-bc4f-82416665ac91",
    "details": "Illegal Fishing Activity",
    "device_id": "HN-00001",
    "type": "illegal_fishing",
    "name": "EMERGENCY ALERT",
    "title": "ILLEGAL FISHING REPORT",
    "address": "N/A",
    "reportee": "Anonymous",
    "source_platform": "node",
    "date": "August 21 2020,04:42:03 PM",
    "coordinates": {
      "long": 121.921724,
      "lat": 14.5446942
    },
    "report_type": "MANUAL",
    "status": "CONFIRMED",
    "verifier": "Hydraean_Admin"
  }
]
```

#### [GET] `/analytics`

> Gives an overview of data sorted by date. also contains a list and information of other fishery management areas.

Get more specific pieces of data:

- `/analytics/incidents/overview`
- `/analytics/incidents/complete/`

**Date Search:** -`/analytics/incidents/date-search`
Search data about recorded incidents and filter them by date.

Required parameters:

- `fma` - if not provided or invalid the all incidents data will be search and returned.
- `startDate` - Start date of search (required).
- `endDate` - End date of earch (required).

```json
{
  "fma_list": [
    "FMA-01",
    ...
  ],
  "incidents_overview": [
    {
      "fma": "FMA-01",
      "records": [
        {
          "date": "11-01-2020",
          "activityCount": 1
        }
      ]
    },

}
```

Sample Response:

```json
[
  {
    "id": "47f2bbe1-0ed2-46cf-bc4f-82416665ac91",
    "details": "Illegal Fishing Activity",
    "device_id": "HN-00001",
    "type": "illegal_fishing",
    "name": "EMERGENCY ALERT",
    "title": "ILLEGAL FISHING REPORT",
    "address": "N/A",
    "reportee": "Anonymous",
    "source_platform": "node",
    "date": "August 21 2020,04:42:03 PM",
    "coordinates": {
      "long": 121.921724,
      "lat": 14.5446942
    },
    "report_type": "MANUAL",
    "status": "CONFIRMED",
    "verifier": "Hydraean_Admin"
  },
  ...
  ]
```

### Real-time Events

> You can connect to the web socket server and get an instant stream of data from the service once an update occurs, you can do this by using the Socket.io Framework. this is available in multiple languages like JavaScript and Python, it can also be done both on the client and server-side.

Example connection from the client-side in a React Application using the `socket.io-client` package:

```js
import React from "react";
import io from "socket.io-client";

const socket = io("KRAKEN_API_INSTANCE_URL");

socket.on("feedUpdate", (data) => {
  // the data stream is passed to the `data` variable.
});
```
