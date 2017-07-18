# PW17

Patrick Weaver
2017

Build Docker Container of public folder as static site:

docker build -t patrickweaver/pw17:0.0.1 .

Run Docker Container of public folder as static site:

`docker run -p 8123:8123 --name pw17 patrickweaver/pw17:0.0.1`
