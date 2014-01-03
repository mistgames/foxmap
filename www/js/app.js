
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {

    var foxmap = require('./map');
    var ebus = require("./eventbus");

    foxmap.init('map')
      .openStreetMap()
      .centerTo(0,0,2)
      .centerToCurrentPosition(true);

    ebus.subscribe("map:osm", function(){
      foxmap.openStreetMap();
    });

    ebus.subscribe("map:google", function(){
      foxmap.googleMap();
    });

});
