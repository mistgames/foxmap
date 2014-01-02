define(['leaflet'], function(L){

  var _export = {};

  _export.init = function(domId){
    _export.map = L.map('map');
    return _export;
  }

  _export.addOsmMap = function(){
    var layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'});
    if (_export.currentBaseLayer) {
      _export.map.removeLayer(_export.currentBaseLayer);
    }
    _export.currentBaseLayer = layer;
    _export.currentBaseLayer.addTo(_export.map);

    return _export;
  }

  _export.centerTo = function(lat, lon, zoom){
    _export.map.setView([lat, lon], zoom);

    return _export;
  }

  return _export;
});
