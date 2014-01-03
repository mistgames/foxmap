define(function(){
  var _export = {};

  var events = {};

  _export.subscribe = function(event, callback){
    if (! (event in events)) {
      events[event] = [];
    }

    events[event].push(callback);
  }

  _export.publish = function(event) {
    if (event in events) {
      var args = Array.slice(arguments, 1);
      events[event].forEach(function(cb){
        cb.call(args);
      });
    }
  }

  return _export;

});
