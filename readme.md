# PW17

Patrick Weaver
2017
### Spreadsheet:
https://docs.google.com/spreadsheets/d/19o1rIntdoNmEVa7iG6x9eZc6Ph6UiPrBdbPvI1jiFjY/edit#gid=0


Build Docker Container of public folder as static site:

`docker build -t patrickweaver/pw17:0.0.1 .`

Run Docker Container of public folder as static site:

`docker run --env PORT=8123 -p 8123:8123 --name pw17 patrickweaver/pw17:0.0.1`
