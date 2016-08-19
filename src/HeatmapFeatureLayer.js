export { version as VERSION } from '../package.json';

import L from 'leaflet';
import { FeatureManager } from 'esri-leaflet';

export var FeatureLayer = FeatureManager.extend({
  /**
   * Constructor
   */

  initialize: function (options) {
    FeatureManager.prototype.initialize.call(this, options);

    options = L.setOptions(this, options);

    this._cache = {};
    this._active = {};

    this.heat = window.L.heatLayer([], options);
  },

  /**
   * Layer Interface
   */

  onAdd: function (map) {
    FeatureManager.prototype.onAdd.call(this, map);
    this._map.addLayer(this.heat);
  },

  onRemove: function (map) {
    FeatureManager.prototype.onRemove.call(this, map);
    this._map.removeLayer(this.heat);
  },

  /**
   * Feature Managment Methods
   */

  createLayers: function (features) {
    for (var i = features.length - 1; i >= 0; i--) {
      var geojson = features[i];
      var id = geojson.id;
      var latlng = new L.LatLng(geojson.geometry.coordinates[1], geojson.geometry.coordinates[0]);
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

export function featureLayer (options) {
  return new FeatureLayer(options);
}

export default featureLayer;
