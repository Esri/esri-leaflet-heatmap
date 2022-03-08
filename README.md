# Esri Leaflet Heatmap Feature Layer

[![Build Status](https://travis-ci.org/Esri/esri-leaflet-heatmap.svg?branch=master)](https://travis-ci.org/Esri/esri-leaflet-heatmap)

> A plugin for Esri Leaflet to visualize Feature Services as heatmaps built on top of the [L.heat](https://github.com/Leaflet/Leaflet.heat) Leaflet Plugin.

### Demos
A live demo can be found on the [Esri Leaflet website](https://esri.github.io/esri-leaflet/examples/visualize-points-as-a-heatmap.html).

### Example
Here is a quick example to get you started.

<a href="https://esri.github.io/esri-leaflet/examples/visualize-points-as-a-heatmap.html">
  <img src="https://github.com/Esri/esri-leaflet-heatmap/raw/master/esri-leaflet-heatmap-feature-layer.jpg" alt="Demo">
</a>

```html
<html>
<head>
  <meta charset=utf-8 />
  <title>Points as a heatmap</title>
  <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />

  <!-- Load libraries from CDN -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.0-rc.3/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.0.0-rc.3"></script>

  <script src="https://unpkg.com/leaflet.heat@0.2.0"></script>

  <!-- Esri Leaflet and Esri Leaflet Heatmap -->
  <script src="https://unpkg.com/esri-leaflet@3"></script>
  <script src="https://unpkg.com/esri-leaflet-heatmap@2"></script>

  <style>
    body {margin:0;padding:0;}
    #map {position: absolute;top:0;bottom:0;right:0;left:0;}
  </style>
</head>
<body>

<div id="map"></div>

<script>
  var map = L.map('map').setView([41.759, -88.157], 12);

  L.esri.basemapLayer('Gray').addTo(map);
  L.esri.Heat.featureLayer({
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/CommunityAddressing/MapServer/0',
    radius: 10
  }).addTo(map);
</script>

</body>
</html>
```

### Documentation & Examples

A full [API Reference](https://esri.github.io/esri-leaflet/api-reference/) and [sample code](https://esri.github.io/esri-leaflet/examples/) can be found at the [Esri Leaflet](https://esri.github.io/esri-leaflet/) website.

### Development Roadmap

If you are interested in contributing to Esri Leaflet or seeing what is coming up next, check out the [development roadmap](https://github.com/Esri/esri-leaflet/wiki/Roadmap).

### Development Instructions

1. [Fork and clone this repo](https://help.github.com/articles/fork-a-repo)
2. `cd` into the `esri-leaflet-heatmap-feature-layer` folder
3. Install the dependencies with `npm install`
4. run `npm run build` to compile the raw source inside a newly created `dist` folder.
5. run `npm test` from the command line to execute tests
6. Open `debug/sample.html` to see local changes in action.
6. Create a [pull request](https://help.github.com/articles/creating-a-pull-request) if you'd like to share your work.

### Dependencies

* Leaflet version [1.0.0-b1](https://github.com/Leaflet/Leaflet/releases/tag/v1.0.0-beta.1) (or higher) is required.
* Esri Leaflet [2.0.0-beta.4](https://github.com/Esri/esri-leaflet/releases/tag/v2.0.0-beta.4) (or higher) is required.
* [Leaflet.heat](https://github.com/Leaflet/Leaflet.heat) version 0.1.3 is required.

### Resources

* [Importing Data Into Feature Services](https://doc.arcgis.com/en/arcgis-online/manage-data/publish-features.htm#GUID-DD47C642-38B4-4645-801D-2866FE90BF73)
* [ArcGIS for Developers](https://developers.arcgis.com/)
* [ArcGIS REST Services](https://developers.arcgis.com/rest/)
* [@Esri](https://twitter.com/esri)

### Issues

Find a bug or want to request a new feature?  Please let us know by submitting an [issue](https://github.com/Esri/esri-leaflet-heatmap-feature-layer/issues).

Please take a look at previous issues on [Esri Leaflet](https://github.com/Esri/esri-leaflet/issues?labels=FAQ&milestone=&page=1&state=closed) and Esri Leaflet [Heatmap Feature Layer](https://github.com/Esri/esri-leaflet-heatmap-feature-layer/issues) that resolve common problems.

You can also post issues on the [GIS Stackexchange](https://gis.stackexchange.com/questions/ask?tags=esri-leaflet,leaflet) and/or the [Esri Leaflet place](https://geonet.esri.com/discussion/create.jspa?sr=pmenu&containerID=1841&containerType=700&tags=esri-leaflet,leaflet) on GeoNet.

### Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/Esri/esri-leaflet/blob/master/CONTRIBUTING.md).

### Licensing
Copyright 2016 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [LICENSE](./LICENSE) file.

[](Esri Tags: ArcGIS Web Mapping Leaflet Heatmap)
[](Esri Language: JavaScript)
