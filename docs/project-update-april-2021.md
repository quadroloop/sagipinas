---
id: project-update-april-2021
title: "Project Updates: (April 2021)"
---

2nd project update for the year 2021, for April. The focus of this update is more on the side of the mobile view of the web application and the further development of the mobile applications for the project.

### Software Updates:

#### The latest updates for Seantinel Web platform

[![project-banner](https://mist.now.sh/mist/compass-feature.png)]()

The April 2021 updates focused on improving the current state of the Seantinel Web Application, specifically the mobile view interface which now can show a more user-friendly view of the FMA map and the incident details.

The newest feature is a compass component, that helps the current viewer gain information about which direction to head to reach the target incident location.

#### Breakdown of new features:

**1.) Compass**

The compass is a new feature that provides directions to the current viewer to locate the currently selected incident.

- Provide the heading direction (in Degrees) of the selected incident to be located.
- Show the current distance of the viewer to the target incident location.
- Determine once the viewer is within 15 meters of the target incident location.
- The functionality works without an internet connection

:::note

Note: The compass functionality is also implemented in the Seantinel Companion Mobile App

:::

**2.) Current Location Indicator**

Part of the compass functionality is the current location indicator. The current location indicator is a green marker that pinpoints the current location of the viewer if available. It is presented as a green circular marker with a black user icon and is slightly larger than report markers on the map.

- The current indicator updates when the current location of the viewer changes.
- It uses the location watch API in modern browsers to listen for location changes
  [https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition]()

:::note
Note: The current location indicator is not present in the Seantinel Companion Mobile App. Because the Companion app does not support a built-in map interface.
:::

#### The latest updates for the Web Application:

[![project-banner](https://mist.now.sh/mist/apr1.png)]()

- Compass Feature
- Improved User Interface
- Firebase Database Support (Backend)

The compass functionality for the desktop version works as intended. Although it is much more optimized for mobile devices simply because most mobile devices have GPS functionality built-in.

#### Completed from last target features for software (March 2021)

| Backend                                        |                 Web App                  |           Mobile App            |
| ---------------------------------------------- | :--------------------------------------: | :-----------------------------: |
| ✅ &nbsp; &nbsp; Support Report Upload         |       ✅ &nbsp; &nbsp; Improved UI       |  ✅ &nbsp; &nbsp; Improved UI   |
| ✅ &nbsp; &nbsp; Improved Database Integration | ✅ &nbsp; &nbsp; User Management Screens | ✅ &nbsp; &nbsp; Report Logging |
| ✅ &nbsp; &nbsp; Improved Timeframe mapping    |      GSM Modules / Transmit Support      | ✅ &nbsp; &nbsp; Upload Reports |
| ✅ &nbsp; &nbsp; Support Dataset export        |      UI for dataset upload / Export      |          FMA handbook           |
| ✅ &nbsp; &nbsp; Support Device Registry       |                                          |                                 |
| ✅ &nbsp; &nbsp; User Management               |

** March 2021 Target Updates: **

| Backend                             |            Web App             |      Mobile App       |
| ----------------------------------- | :----------------------------: | :-------------------: |
| Support Report Upload               |     ✅ &nbsp; Improved UI      | Overall Functionality |
| ✅ &nbsp; Support Dataset export    | UI for dataset upload / Export |                       |
| ✅ &nbsp; Automated Device Registry |                                |                       |

### Hardware Updates:

Hardware development progress for April 2021:

The Hardware development for the patrol device has been started, along with a new companion application.

### Testing

As of late no further field test was done on the project, still due to the problems and restrictions posed by the pandemic. So all the progress is focused on the improvement of the software and hardware aspects of the project. On the Next progress update, a field test is still set as a goal. But it will focus on the development of the features of the mobile app, Data persistence, and the performance test of hardware devices.

### Next Steps:

The next steps of the project will focus on the development following features:
(Mostly imported from the Last progress updates)

#### Hardware:

| Node device      |         Gateway Device         |
| ---------------- | :----------------------------: |
| Performance Test |        Performance Test        |
|                  |   Patrol Device (New device)   |
|                  | GSM Modules / Transmit Support |

#### Software:

| Backend               |            Web App             |      Mobile App       |
| --------------------- | :----------------------------: | :-------------------: |
| Support Report Upload |          UI Bug fixes          | Overall Functionality |
|                       | UI for dataset upload / Export |                       |
