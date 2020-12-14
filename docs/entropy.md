> CLI first test tool for the SagiPinas Platform

Simulates real use-case scenarios for the platform at varying speeds and request types to see the problems posed by putting the system under heavy load.

### Usage

`entropy.rb` handles the complete incident report flow for the platform
the usage of this script requires 3 arguments:
Arguments:

**1.) Incident type**

- earthquake
- fire
- flooding
- landslide
- accident
- rand - random incident type

**2.) No. of Requests**
Determines the number of requests sent to the server.

**3.) Delay per Requests**
Determines time delay between requests in seconds.

`Example:`

```sh
ruby entropy.rb rand 20 0.3
```

This command will send **20 randomly** selected request types every **0.3 seconds**.

### Interface

Entropy has a simple interface used to easily test the report cancellation flow for each generated request. This can be accessed by simply opening the `index.html` file or running a static server to host the file and access the tool in a different device on the network.

```sh
# using npm serve
serve -s
# python 2.x
python -m SimpleHTTPServer
# python 3.x
python -m http.server
```
