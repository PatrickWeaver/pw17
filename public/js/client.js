$(function() {

  $.get( "/data/", function ( data ) {
    console.log(data);
    $( "#new" ).html(data["1"]["1"]["value"]);
  });

});