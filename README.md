carp [![Build Status: Master][travis-badge]][travis-badge-url]
====

> lat/lng to bbox with a tolerance

![By Pearson Scott Foresman (Public domain), via Wikimedia Commons][carp]

[![NPM][npm-badge]][npm-badge-url]

## Install

```bash
npm install carp --save
```

## Use

```js
var carp = require('carp');

carp([50.90, 105.51]); // [50.90, 105.51, 50.90, 105.51]
carp({ lat: 50.90, lng: 105.51 }, 1); // [50.90, 105.51, 51.90, 106.51]
```

The method signature is `carp(coordinates, tolerance)`. Coordinates can be:

* Array - `[lat, lng]`
* Object - `{ lat: lat, lng: lng}`, or `{ latitude: lat, longitude: lng }`, or a mixed version..

## Roadmap

* handle `carp(lat, lng, tol)`

[travis-badge-url]: https://travis-ci.org/knownasilya/carp
[travis-badge]: https://travis-ci.org/knownasilya/carp.svg?branch=master
[carp]: http://upload.wikimedia.org/wikipedia/commons/6/63/Carp_%28PSF%29.jpg
[npm-badge]: https://nodei.co/npm/carp.png
[npm-badge-url]: https://nodei.co/npm/carp
