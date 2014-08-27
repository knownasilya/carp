'use strict';

var test = require('prova');
var carp = require('../');

test('array, no tolerance', function (t) {
  var result = carp([40.35, -71.20]);

  t.same(result, [40.35, -71.20, 40.35, -71.20], 'bbox is same sw/ne if no tolerance');
  t.end();
});

test('lat/lng, no tolerance', function (t) {
  var result1 = carp({ lat: 40.35, lng: -71.20 });
  var result2 = carp({ latitude: 40.35, longitude: -71.20 });
  var result3 = carp({ latitude: 40.35, lng: -71.20 });

  t.same(result1, [40.35, -71.20, 40.35, -71.20], 'lat/lng - bbox is same sw/ne if no tolerance');
  t.same(result2, [40.35, -71.20, 40.35, -71.20], 'latitude/longitude - bbox is same sw/ne if no tolerance');
  t.same(result3, [40.35, -71.20, 40.35, -71.20], 'latitude/lng - bbox is same sw/ne if no tolerance');
  t.end();
});
