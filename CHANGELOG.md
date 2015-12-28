# Changelog

## [2.0.0-beta.1]

### Breaking

* Requires the 2.0.0-beta.4 release of Esri Leaflet.
* Requires the 1.0.0-beta.1 release of Leaflet.

### Added

* Better build/test/release automation.
* Support for JSPM in package.json. Now you can `import heat from 'esri-leaflet-heatmap-feature-layer/src/HeatmapFeatureLayer';` for more compact builds but, be aware of [caveats](http://blog.izs.me/post/44149270867/why-no-directories-lib-in-node-the-less-snarky)
* Support for browserify in the package.json. Now you can `var heat = require('esri-leaflet-heatmap-feature-layer/src/HeatmapFeatureLayer');` for more compact builds, but be aware of [caveats](http://blog.izs.me/post/44149270867/why-no-directories-lib-in-node-the-less-snarky)

## [1.0.2]

### Fixed

* Fix incorrect version number on tagged files.

## [1.0.1]

### Fixed

* Fix incorrect version number on tagged files.

## [1.0.0]

### Changed

* Dependencies have been updated to their latest versions
* CDN moved to [JS Delivr](http://www.jsdelivr.com/#!leaflet.esri.heatmap-feature-layer)

## [Release Candidate 4]

### Changed

* `bower install esri-leaflet-heatmap-feature-layer` should now work without `bower cache clean`
* Update Esri Leaflet dependency to RC 4

## [Release Candidate 3]

### Changed

* fixed `bower install esri-leaflet-heatmap-feature-layer`
* Update Esri Leaflet dependency to RC 3

## [Release Candidate 2]

## Release Candidate 1

[2.0.0-beta.1]: https://github.com/Esri/esri-leaflet-heatmap-feature-layer/compare/v1.0.2...v2.0.0-beta.1
[1.0.2]: https://github.com/Esri/esri-leaflet-heatmap-feature-layer/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/Esri/esri-leaflet-heatmap-feature-layer/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/Esri/esri-leaflet-heatmap-feature-layer/compare/v1.0.0-rc.4...v1.0.0
[Release Candidate 4]: https://github.com/Esri/esri-leaflet-heatmap-feature-layer/compare/v1.0.0-rc.3...v1.0.0-rc.4
[Release Candidate 3]: https://github.com/Esri/esri-leaflet-heatmap-feature-layer/compare/v1.0.0-rc.2...v1.0.0-rc.3
[Release Candidate 2]: https://github.com/Esri/esri-leaflet-heatmap-feature-layer/compare/v1.0.0-rc.1...v1.0.0-rc.2