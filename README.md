carp [![Build Status: Master][travis-badge]][travis-badge-url]
====

> lat/lng to bbox with a tolerance

## Install

```bash
npm install carp --save
```

## Use

```js
var carp = require('carp');

carp([50.90061, 105.51079]); // [50.90061, 105.51079, 50.90061, 105.51079]
```

## Roadmap

* tolerance by difference
* handle `carp(lat, lng, tol)`

[travis-badge-url]: https://travis-ci.org/knownasilya/carp
[travis-badge]: https://travis-ci.org/knownasilya/carp.svg?branch=master
