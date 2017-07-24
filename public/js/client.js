var data;

GoogleSpreadsheets({
    key: "19o1rIntdoNmEVa7iG6x9eZc6Ph6UiPrBdbPvI1jiFjY"
}, function(err, spreadsheet) {
    spreadsheet.worksheets[0].cells({
        // grab all the data
        range: "R1C1:R50C2"
    }, function(err, result) {
    	// Put in-memory store for now
      data = result.cells;
    });
});


$( "#new" ).html(data);