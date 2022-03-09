/* esri-leaflet-heatmap - v2.0.1 - Wed Mar 09 2022 08:41:29 GMT-0600 (Central Standard Time)
 * Copyright (c) 2022 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('leaflet'), require('esri-leaflet')) :
  typeof define === 'function' && define.amd ? define(['exports', 'leaflet', 'esri-leaflet'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.L = global.L || {}, global.L.esri = global.L.esri || {}, global.L.esri.Heat = {}), global.L, global.L.esri));
})(this, (function (exports, L, esriLeaflet) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var L__default = /*#__PURE__*/_interopDefaultLegacy(L);

  var name = "esri-leaflet-heatmap";
  var description = "Esri Leaflet plugin for visualizing Feature Layers as heatmaps with L.heat.";
  var version$1 = "2.0.1";
  var author = "Patrick Arlt <parlt@esri.com> (http://patrickarlt.com)";
  var contributors = [
  	"Patrick Arlt <parlt@esri.com> (http://patrickarlt.com)",
  	"John Gravois <jgravois@esri.com> (http://johngravois.com)"
  ];
  var dependencies = {
  	leaflet: "^1.0.0-rc.3",
  	"leaflet.heat": "^0.2.0"
  };
  var peerDependencies = {
  	"esri-leaflet": ">2.3.0"
  };
  var devDependencies = {
  	"@rollup/plugin-json": "^4.1.0",
  	"@rollup/plugin-node-resolve": "^13.1.3",
  	chai: "4.3.6",
  	"chokidar-cli": "^3.0.0",
  	"gh-release": "^6.0.1",
  	"http-server": "^14.1.0",
  	karma: "^6.3.16",
  	"karma-chai-sinon": "^0.1.5",
  	"karma-chrome-launcher": "^3.1.0",
  	"karma-coverage": "^2.2.0",
  	"karma-mocha": "^2.0.1",
  	"karma-mocha-reporter": "^2.2.5",
  	"karma-sourcemap-loader": "^0.3.8",
  	mkdirp: "^1.0.4",
  	mocha: "^9.2.0",
  	"npm-run-all": "^4.1.5",
  	rollup: "^2.67.2",
  	"rollup-plugin-terser": "^7.0.2",
  	semistandard: "^14.2.3",
  	sinon: "^13.0.1",
  	"sinon-chai": "3.7.0",
  	snazzy: "^9.0.0"
  };
  var homepage = "https://github.com/Esri/esri-leaflet-heatmap";
  var jspm = {
  	registry: "npm",
  	format: "es6",
  	main: "src/HeatmapFeatureLayer.js"
  };
  var license = "Apache-2.0";
  var main = "dist/esri-leaflet-heatmap-debug.js";
  var readmeFilename = "README.md";
  var repository = {
  	type: "git",
  	url: "git+https://github.com:Esri/esri-leaflet-heatmap.git"
  };
  var scripts = {
  	prebuild: "mkdirp dist",
  	build: "rollup -c profiles/debug.js & rollup -c profiles/production.js",
  	lint: "semistandard src/*.js && semistandard spec/*.js | snazzy",
  	fix: "semistandard --fix",
  	pretest: "npm run build",
  	release: "node ./scripts/release.sh",
  	"start-watch": "chokidar src -c \"npm run build\"",
  	start: "run-p start-watch serve",
  	serve: "http-server -p 5000 -c-1 -o",
  	test: "npm run lint && karma start"
  };
  var packageInfo = {
  	name: name,
  	description: description,
  	version: version$1,
  	author: author,
  	contributors: contributors,
  	dependencies: dependencies,
  	peerDependencies: peerDependencies,
  	devDependencies: devDependencies,
  	homepage: homepage,
  	"jsnext:main": "src/HeatmapFeatureLayer.js",
  	jspm: jspm,
  	license: license,
  	main: main,
  	readmeFilename: readmeFilename,
  	repository: repository,
  	scripts: scripts
  };

  var version = packageInfo.version;

  var FeatureLayer = esriLeaflet.FeatureManager.extend({
    /**
     * Constructor
     */

    initialize: function (options) {
      esriLeaflet.FeatureManager.prototype.initialize.call(this, options);

      options = L__default["default"].setOptions(this, options);

      this._cache = {};
      this._active = {};

      this.heat = window.L.heatLayer([], options);
    },

    /**
     * Layer Interface
     */

    onAdd: function (map) {
      esriLeaflet.FeatureManager.prototype.onAdd.call(this, map);
      this._map.addLayer(this.heat);
    },

    onRemove: function (map) {
      esriLeaflet.FeatureManager.prototype.onRemove.call(this, map);
      this._map.removeLayer(this.heat);
    },

    /**
     * Feature Managment Methods
     */

    createLayers: function (features) {
      for (var i = features.length - 1; i >= 0; i--) {
        var geojson = features[i];
        var id = geojson.id;
        var latlng = new L__default["default"].LatLng(geojson.geometry.coordinates[1], geojson.geometry.coordinates[0]);
        this._cache[id] = latlng;

        // add the layer if it is within the time bounds or our layer is not time enabled
        if (!this._active[id] && (!this.options.timeField || (this.options.timeField && this._featureWithinTimeRange(geojson)))) {
          this._active[id] = latlng;
          this.heat._latlngs.push(latlng);
        }
      }

      this.heat.redraw();
    },

    addLayers: function (ids) {
      for (var i = ids.length - 1; i >= 0; i--) {
        var id = ids[i];
        if (!this._active[id]) {
          var latlng = this._cache[id];
          this.heat._latlngs.push(latlng);
          this._active[id] = latlng;
        }
      }
      this.heat.redraw();
    },

    removeLayers: function (ids, permanent) {
      var newLatLngs = [];
      for (var i = ids.length - 1; i >= 0; i--) {
        var id = ids[i];
        if (this._active[id]) {
          delete this._active[id];
        }
        if (this._cache[id] && permanent) {
          delete this._cache[id];
        }
      }

      for (var latlng in this._active) {
        newLatLngs.push(this._active[latlng]);
      }

      this.heat.setLatLngs(newLatLngs);
    },

    setOptions: function (options) {
      this.heat.setOptions(options);
    },

    redraw: function () {
      this.heat.redraw();
    }

  });

  function featureLayer (options) {
    return new FeatureLayer(options);
  }

  exports.FeatureLayer = FeatureLayer;
  exports.VERSION = version;
  exports["default"] = featureLayer;
  exports.featureLayer = featureLayer;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=esri-leaflet-heatmap-debug.js.map
