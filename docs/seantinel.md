---
id: seantinel
title: Seantinel Project
---

An open IoT platform, with real-time data processing that can be used as an independent communication layer to gather reports of illegal fishing and maritime incidents in different municipal waters without fully relying on expensive existing communication infrastructures, such as signal reception and expensive radio equipment.

[![hydra-app-banner](https://i.ibb.co/sstcB1q/hydra-app.png)]()

**Seantinel** [Sea + Sentinel] - Derived from the phrase "Guardian of the Sea". Is the first re-implementation of the SagiPinas Project created to tackle the problem of illegal fishing in the Philippines

The Project was awarded 2nd Prize winner in the first-ever Karagathon, a hackathon to combat illegal fishing in the Philippines on September 4, 2020.

### About the project

:::important

This project is in active development.

:::

### Project Update: (December 14, 2020)

After a few months of development. Here are the significant updates for the software and hardware aspects of the project.

#### Software Updates:

For the software aspect of the project we have added the following features:

[![project-banner](https://mist.now.sh/mist/s1.png)]()

- Automatic FMA categorization of reports using geolocation lookup.
- FMA Picker for analytics (Allows user to select an FMA, and see the correspoding dataset available within the system)
- Filter Data by date for analytics.
- More advanced mapping feature that can support automatic drawing of line paths.
- Dedicated Mobile Application to complement Hardware device. (Under development)

[![article-image](https://mist.now.sh/mist/s3.png)]()

`(Above)` is the FMA selector interface, which allows users to quickly fetch data about an specific FMA that is available within the system.

[![article-image](https://mist.now.sh/mist/s2.png)]()

`(Above)` shows the image of the analytics interface that now has an area chart to better visualize how the number of incidents change over time.

#### Hardware Updates:

[![article-image](https://mist.now.sh/mist/sharware.jpg)]()

### History

How did this project came about?

[![karagathon-banner](/img/KaragathonPoster.png)]()

Seantinel was created as an entry to the first ever Karagathon. A hackathon calling for Technology-based solutions to combat illegal fishing in the Philippines.

The event was hosted by:

- Department of Agriculture
- Bureau of Fisheries and Aquatic Resources
- DOST-ASTI
- Oceana Philippines
- Karagatan Patrol

### How it works

The system consists of IoT devices forming a mesh network to create a communication layer for patrol authorities to help detect and monitor different maritime events including illegal fishing and accidents.

[![karagathon-banner](https://seantinel-demo-blue.vercel.app/visual.png)]()

Devices like nodes and gateways communicate with each other to help transmit the data to the internet, or a base station ready to record and analyze the report.

### Hardware Documentation

- [Node Device](/docs/seantinel-node-doc)
- [Gateway Device](/docs/seantinel-gateway-doc)

### Github Organization

all of the source code for the project can be found here:

https://github.com/Hydraean

### The Team

Team Hydraean discussing the Seantinel project over Google Meet.

![karagathon-banner](/img/team_discussion_1.png)

- Bryce Narciso Mercines
- Aletheia Grace Del Rosario
- Michael Allan Corpuz
- Francis Mago
- Hunneleth Villalon
