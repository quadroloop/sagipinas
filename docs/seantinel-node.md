---
id: seantinel-node-doc
title: Seantinel / Node
---

Node Device for the [Seantinel Project](/docs/seantinel). This device is capable of communicating with consumer electronics.

### Schematic Diagram:

> Schematic Diagram for the Node Device

![schematic](/img/node-schematic.png)

Schematic Diagram for the Node Device
This prototype version uses a TTGO OLED V1 Development Board Based on ESP32 which supports LoRa using the SX1276 LoRa Transceiver. additionally, it also supports WiFi which allows the device to act as a WiFi Access Point for devices like smartphones to communicate with.

### List of Parts

List of parts for the prototype Node Device:

| Part                           | Quantity |
| ------------------------------ | :------: |
| TTGO OLED V1 Development Board |    1     |
| 10k Ohm Resistors              |    2     |
| Tactile push buttons           |    2     |
| LED                            |    1     |
| NEO 6mv2 GPS Module            |    1     |
| SPST Switch                    |    1     |
| AAA Battery                    |    3     |
| AAA Battery Pack 6v            |    1     |

One of the problems of this design is that it uses disposable AAA Batteries and that it requires 5 Volts to operate. A more efficient solution would be using a rechargeable battery with a charging circuit that can be attached to solar panels for charging.

### Main Board

This is the picture of the board and the mainboard and it's accurate pinout aligned with the schematic diagram:

![TTGO V1 pinout](https://camo.githubusercontent.com/fc7a5885669367fe23b91252f202a35bb8d42e37/68747470733a2f2f7072696d616c636f727465782e66696c65732e776f726470726573732e636f6d2f323031372f31312f7474676f6c6f726170696e6f75745f76322e6a7067)

### First Prototype

![prototypes](/img/prototypes.jpg)

Above is the photograph of the actual protoypes upper left is the node device and on the middle right is the prototype of the gateway device

### Project Status

:::important

This project is in active development.

:::

We are working on ways to make this device much cheaper and more efficient. the project is in active development.
