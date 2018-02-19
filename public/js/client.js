$(function() {
  
  var loaded = false;
  
  function nextClock(clock) {
    $( "#new > div.clock" ).hide();
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
      $( "#new > div.clock" ).hide();
    }
  }
  
  nextClock(1);
    

  $.get( "/data/", function ( data ) {
    loaded = true;
    $( "#new > div.clock" ).hide();
    $( "#new-items" ).show();
    var numberOfItems = 3;
    for (var i = 0; i < numberOfItems; i++) {
      var item = data["data"][i];
      if (item["date"]) {
        $( "#new-items" ).append("<div class='date'>" + item["date"] + "</div>");
      }
      if (item["title"]) {
        if (item["link"]) {
          $( "#new-items" ).append("<h2><a href='" + item["link"] + "'>" + item["title"] + "</a></h2><a class='item-link' href='" + item["link"] + "'>" + item["link"] + "</a>");
        } else {
          $( "#new-items" ).append("<h2>" + item["title"] + "</h2>");
        }
      }
      if (item["description"]) {
        $( "#new-items" ).append("<p>" + item["description"] + "</p>"); 
      }
      if (item["embed"]) {
        $( "#new-items" ).append(item["embed"]);
      }
      $( "#new-items" ).append("<br><br><br>");
    }
                  
  });

});