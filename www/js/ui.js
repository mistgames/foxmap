define(['jquery', './eventbus'], function($, ebus){

  $("a[href='#map-osm']").click(function(e){
    e.preventDefault();
    ebus.publish("map:osm");
  });

  $("a[href='#map-google']").click(function(e){
    e.preventDefault();
    ebus.publish("map:google");
  });

  ebus.subscribe("loading:start", function(msg){
    console.log(msg);
    $("section[role='status'] p").text(msg).parent().show();
  });

  ebus.subscribe("loading:finish", function(){
    $("section[role='status']").hide();
  })
});
