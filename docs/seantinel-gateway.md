---
id: seantinel-gateway-doc
title: Seantinel / Gateway
---

### Overview

`Seantinel Gateway` is the device responsible for listening for transmissions from **Seantinel Node Devices** and attempt to either save the save, echo, or broadcast it to the Internet.

### Hardware

For the earliest version the Gateway runs on a **TTGO OLED LoRa32 v1 Development board**, only this time, it actually utilizes the OLED display to show the status of the connection

### Schematic Diagram

Below is the Schematic Diagram for the Gateway Device, it is relatively simple. it is however just a single channel Gateway and has no other external communication interface other than WiFi and a pre configured Access Point that it can use to connect to the Internet. Further improvements for this is already in progress.

![schematic](/img/gateway_schematics.png)

### List of Parts

List of parts need to build the device. The project enclosure is not included on the list since you can essentially fit the circuit in any plastic enclosure.

| Part                           | Quantity |
| ------------------------------ | :------: |
| TTGO OLED V1 Development Board |    1     |
| SPST Switch                    |    1     |
| AAA Battery                    |    3     |
| AAA Battery Pack 6v            |    1     |

### First Prototype

This prototype is just a proof of concept device, using only the TTGO OLED v1 Development board, a power source and a switch.

![gateway device](/img/ttgo-flashing.png)

This picture show the testing of the Development boards after flashing the firmware.

![gateway device](/img/gateway-device.png)

On the left you can see the actual gateway device, on the right you can see the parts use to build the device.

### Project Status

:::important

Note: This project is in active development.

:::
