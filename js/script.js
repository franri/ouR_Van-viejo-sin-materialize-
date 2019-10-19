// var map = AmCharts.makeChart( "mapdiv", {
//     "type": "map",

//     "dataProvider": {
//         "map": "worldLow",
//         "getAreasFromMap": true
//     },
    
//     "areasSettings": {
//         "autoZoom": true,
//         "selectedColor": "#CC0000"
//     },
    
//     "smallMap": {}
//     } );

// var map = am4core.create("mapdiv", am4maps.MapChart);
// map.geodata = am4geodata_worldLow;
// map.projection = new am4maps.projections.Miller();
// var polygonSeries = new am4maps.MapPolygonSeries();
// polygonSeries.useGeodata = true;
// map.series.push(polygonSeries);

var chart = am4core.create("mapdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#74B266");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#367B25");

polygonSeries.exclude = ["AQ"]
// polygonSeries.include = ["AR", "UY", "US"]

chart.zoomControl = new am4maps.ZoomControl();
chart.zoomControl.slider.height = 100;

var imageSeries = chart.series.push(new am4maps.MapImageSeries());
var imageSeriesTemplate = imageSeries.mapImages.template;
var circle = imageSeriesTemplate.createChild(am4core.Circle);
circle.radius = 4;
circle.fill = am4core.color("#B27799");
circle.stroke = am4core.color("#FFFFFF");
circle.strokeWidth = 2;
circle.nonScaling = true;
circle.tooltipText = "{title}";
imageSeriesTemplate.propertyFields.latitude = "latitude";
imageSeriesTemplate.propertyFields.longitude = "longitude";
imageSeries.data = [{
    "latitude": 48.856614,
    "longitude": 2.352222,
    "title": "Paris"
  }, {
    "latitude": 40.712775,
    "longitude": -74.005973,
    "title": "New York"
  }, {
    "latitude": 49.282729,
    "longitude": -123.120738,
    "title": "Vancouver"
  }];
