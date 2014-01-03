define(['zepto', './eventbus'], function($, ebus){

  $("a[href='#map-osm']").click(function(e){
    e.preventDefault();
    ebus.publish("map:osm");
  });

  $("a[href='#map-google']").click(function(e){
    e.preventDefault();
    ebus.publish("map:google");
  });


});
