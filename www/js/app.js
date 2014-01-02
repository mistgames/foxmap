
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
    // Zepto provides nice js and DOM methods (very similar to jQuery,
    // and a lot smaller):
    // http://zeptojs.com/
    var $ = require('zepto');

    var foxmap = require('./map');
    foxmap.init('map')
      .openStreetMap()
      .centerTo(0,0,2)
      .centerToCurrentPosition(true);

});
