define(['leaflet', 'leaflet-google', './eventbus'],
function(L, LeafletGoogleLayer, ebus){
  var _export = {};

  _export.init = function(domId){
    _export.map = L.map('map');
    return _export;
  }

  _export.openStreetMap = function(){
    var layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'});
    if (_export.currentBaseLayer) {
      _export.map.removeLayer(_export.currentBaseLayer);
    }
    _export.currentBaseLayer = layer;
    _export.currentBaseLayer.addTo(_export.map);

    return _export;
  }

  _export.googleMap = function() {
    var layer = new LeafletGoogleLayer('ROADMAP');

    if (_export.currentBaseLayer) {
      _export.map.removeLayer(_export.currentBaseLayer);
    }
    _export.currentBaseLayer = layer;
    _export.map.addLayer(_export.currentBaseLayer);

    return _export;
  }

  _export.centerTo = function(lat, lon, zoom){
    _export.map.setView([lat, lon], zoom);

    return _export;
  }

  _export.centerToCurrentPosition = function(withMarker) {
    if ("geolocation" in navigator) {
      ebus.publish("loading:start", "Waiting for location.");
      console.log("waiting for location")
      navigator.geolocation.getCurrentPosition(function(position){
        ebus.publish("loading:finish");
        _export.centerTo(
          position.coords.latitude,
          position.coords.longitude,
          Math.floor(48 / Math.log10(position.coords.accuracy)));

        if (withMarker) {
          if (_export.currentPositionMarker) {
            _export.map.removeLayer(_export.currentPositionMarker);
          }

          _export.currentPositionMarker = L.circleMarker(
            [position.coords.latitude, position.coords.longitude],
            {radius: 30, fill: true, fillColor: "#4C88DB", fillOpacity:0.5}
          ).addTo(_export.map);
        }
      });
    }

    return _export;
  }

  return _export;
});
