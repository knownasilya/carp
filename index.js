'use strict';

var lats = ['lat', 'latitude'];
var lngs = ['lng', 'long', 'longitude'];

// 'lat, lng' regexp /(-*\d+(\.\d+)*)+\,\s*(-*\d+(\.\d+)*)+/

module.exports = function(latlng, tolerance) {
  var result;

  if (Array.isArray(latlng)) {
    result = latlng.concat(addTolerance(latlng, tolerance));

    return result;
  }
  
  var keys = Object.keys(latlng);
  var latKey = keyExists(keys, lats);
  var lngKey = keyExists(keys, lngs);

  if (latKey && lngKey) {
    var arr = toArray(latlng, latKey, lngKey);
    result = arr.concat(addTolerance(arr, tolerance));
    return result;
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

function addTolerance(arr, tolerance) {
  var result = [];

  if (!isNaN(tolerance)) {
    result[0] = arr[0] + tolerance;
    result[1] = arr[1] + tolerance;
  }
  else {
    result = clone(arr);
  }

  return result;
}

function clone(arr) {
  return arr.map(function(i) {
    return i;
  });
}
