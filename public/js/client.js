$(function() {
  
  var loaded = false;
  
  function nextClock(clock) {
    $( "#new > div" ).hide();
    if (clock.toString().length === 1){
      var clockStr = "#clock0" + clock;
    } else {
      var clockStr = "#clock" + clock;
    }
    $( clockStr ).show();
    if (clock === 12) {
      clock = 0;
    }
    if (!loaded){
      setTimeout(function() {nextClock(clock + 1)}, 100);
    } else {
      $( "#new > div" ).hide();
    }
  }
  
  nextClock(1);
    

  $.get( "/data/", function ( data ) {
    loaded = true;
    $( "#new > div" ).hide();
    $( "#new" ).append(data["data"][0]["date"]);
    $( "#new" ).append(data["data"][0]["code"]);
    $( "#new" ).append("<br>");
    $( "#new" ).append(data["data"][1]["date"]);
    $( "#new" ).append(data["data"][1]["code"]);
    $( "#new" ).append("<br>");
    $( "#new" ).append(data["data"][2]["date"]);
    $( "#new" ).append(data["data"][2]["code"]);
    $( "#new" ).append("<br>");    
                  
  });

});