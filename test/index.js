'use strict';

var test = require('prova');
var carp = require('../');
var ll = [40.35, -71.20];
var bbox = ll.concat(ll);

test('array, no tolerance', function (t) {
  var result = carp(ll);

  t.same(result, ll.concat(ll), 'bbox is same sw/ne if no tolerance');
  t.end();
});

test('lat/lng, no tolerance', function (t) {
  var result1 = carp({ lat: ll[0], lng: ll[1] });
  var result2 = carp({ latitude: ll[0], longitude: ll[1] });
  var result3 = carp({ latitude: ll[0], lng: ll[1] });

  t.same(result1, bbox, 'lat/lng - bbox is same sw/ne if no tolerance');
  t.same(result2, bbox, 'latitude/longitude - bbox is same sw/ne if no tolerance');
  t.same(result3, bbox, 'latitude/lng - bbox is same sw/ne if no tolerance');
  t.end();
});

test('tolerance, simple integer', function (t) {
  var result = carp(ll, 1);

  t.same(result, ll.concat(ll.map(plusTol(1))), 'ne is increase by the tolerance');
  t.end();
});

function plusTol(tol) {
  return function (item) {
    return item + tol;
  }; 
}
