---
id: project-update-december-14-2020
title: "Project Updates: (December 14, 2020)"
---

After a few months of development. Here are the significant updates for the software and hardware aspects of the project.

### Software Updates:

For the software aspect of the project we have added the following features:

[![project-banner](https://mist.now.sh/mist/s1.png)]()

- Automatic FMA categorization of reports using geolocation lookup.
- FMA Picker for analytics (Allows the user to select an FMA, and see the corresponding dataset available within the system)
- Filter Data by date for analytics.
- More advanced mapping feature that can support automatic drawing of line paths.
- Dedicated Mobile Application to complement Hardware devices. (Under development)

[![article-image](https://mist.now.sh/mist/s3.png)]()

`(Above)` is the FMA selector interface, which allows users to quickly fetch data about a specific FMA that is available within the system.

[![article-image](https://mist.now.sh/mist/s2.png)]()

`(Above)` shows the image of the analytics interface that now has an area chart to better visualize how the number of incidents changes over time.

### Hardware Updates:

Hardware development progress:

[![article-image](https://mist.now.sh/mist/sharware.jpg)]()

As seen above are the latest set of hardware prototypes for the Seantinel project. on the leftmost side is the latest iteration of the **Gateway Device**.

Smaller LoRa Devices still based on the versatile TTGO OLED v1 board is enclosed on a smaller form factor for **Node Devices**. A new usage paradigm is implemented where a Mobile Application can be used to act as the Frontend Interface for the system which would increase the efficiency of the Node devices.

### Testing

Testing for the system around this time frame is still based on land. As COVID-19 Pandemic still made it relatively difficult to allow field testing on the sea.

[![article-image](https://mist.now.sh/mist/st1.png)]()

The testing focused on determining the performance of Node Devices to echo data from one device to another. Problems were found on the ability of the Gateway Device to efficiently record data if no direct line of sight is available between it and the Node Devices.

[![article-image](https://mist.now.sh/mist/st2.png)]()

The initial range test was done in Tanza Cavite, with expected low efficiency of logging data if there is no direct line of sight for the devices to communicate. But this also prompted the implementation of Automatic categorization of FMA (Fishery management Area's) Based on the report coordinates, with complementary line path mapping if the location data of the report is updated multiple times.

### Next Steps:

The next steps of the project will focus on the development following features:

#### Hardware:

| Node device            |         Gateway Device         |
| ---------------------- | :----------------------------: |
| Solar Power / Charging |     Solar Power / Charging     |
| Internal device ID     | Waterproof / Buoyant Enclosure |
| Waterproof Enclosure   | GSM Modules / Transmit Support |

#### Software:

| Backend                       |            Web App             |   Mobile App   |
| ----------------------------- | :----------------------------: | :------------: |
| Support Report Upload         |          Improved UI           |  Improved UI   |
| Improved Database Integration |    User Management Screens     | Report Logging |
| Improved Timeframe mapping    | GSM Modules / Transmit Support | Upload Reports |
| Support Dataset export        | UI for dataset upload / Export |  FMA handbook  |
| Support Device Registry       |                                |                |
| User Management               |                                |                |
