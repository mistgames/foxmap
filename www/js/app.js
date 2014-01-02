
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
    // Zepto provides nice js and DOM methods (very similar to jQuery,
    // and a lot smaller):
    // http://zeptojs.com/
    var $ = require('zepto');

    var foxmap = require('./map');
    foxmap.init('map').addOsmMap().centerTo(32.02, 118.80, 12);

});
