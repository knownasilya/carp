'use strict';

var test = require('prova');
var carp = require('../');

test('array, no tolerance', function (t) {
  var result = carp([40.35, -71.20]);

  t.same(result, [40.35, -71.20, 40.35, -71.20], 'bbox is same sw/ne if no tolerance');
  t.end();
});
