'use strict';

var lats = ['lat', 'latitude'];
var lngs = ['lng', 'long', 'longitude'];

module.exports = function(latlng, tolerance) {
  if (Array.isArray(latlng)) {
    return latlng.concat(latlng);
  }
  
  var keys = Object.keys(latlng);
  var latKey = keyExists(keys, lats);
  var lngKey = keyExists(keys, lngs);

  if (latKey && lngKey) {
    var arr = toArray(latlng, latKey, lngKey);
    return arr.concat(arr);
  }
};

function keyExists(keys, possibleKeys) {
  var available = possibleKeys.filter(function (key) {
    return keys.indexOf(key) > -1;
  });

  return available.length ? available[0] : false;
}

function toArray(latlng, latKey, lngKey) {
  return [latlng[latKey], latlng[lngKey]];
}
