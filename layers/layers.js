var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Sindhpopulation_1 = new ol.format.GeoJSON();
var features_Sindhpopulation_1 = format_Sindhpopulation_1.readFeatures(json_Sindhpopulation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sindhpopulation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sindhpopulation_1.addFeatures(features_Sindhpopulation_1);
var lyr_Sindhpopulation_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sindhpopulation_1, 
                style: style_Sindhpopulation_1,
                popuplayertitle: "Sindh population",
                interactive: false,
    title: 'Sindh population<br />\
    <img src="styles/legend/Sindhpopulation_1_0.png" /> 1 - 21<br />\
    <img src="styles/legend/Sindhpopulation_1_1.png" /> 21 - 68<br />\
    <img src="styles/legend/Sindhpopulation_1_2.png" /> 68 - 161<br />\
    <img src="styles/legend/Sindhpopulation_1_3.png" /> 161 - 369<br />\
    <img src="styles/legend/Sindhpopulation_1_4.png" /> 369 - 116766<br />'
        });
var format_Sindhdistricts_2 = new ol.format.GeoJSON();
var features_Sindhdistricts_2 = format_Sindhdistricts_2.readFeatures(json_Sindhdistricts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sindhdistricts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sindhdistricts_2.addFeatures(features_Sindhdistricts_2);
var lyr_Sindhdistricts_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sindhdistricts_2, 
                style: style_Sindhdistricts_2,
                popuplayertitle: "Sindh districts",
                interactive: false,
                title: '<img src="styles/legend/Sindhdistricts_2.png" /> Sindh districts'
            });
var format_Healthfacilities_3 = new ol.format.GeoJSON();
var features_Healthfacilities_3 = format_Healthfacilities_3.readFeatures(json_Healthfacilities_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Healthfacilities_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Healthfacilities_3.addFeatures(features_Healthfacilities_3);
var lyr_Healthfacilities_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Healthfacilities_3, 
                style: style_Healthfacilities_3,
                popuplayertitle: "Health facilities",
                interactive: true,
    title: 'Health facilities<br />\
    <img src="styles/legend/Healthfacilities_3_0.png" /> DOH<br />\
    <img src="styles/legend/Healthfacilities_3_1.png" /> PPHI<br />\
    <img src="styles/legend/Healthfacilities_3_2.png" /> PWD<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_Sindhpopulation_1.setVisible(true);lyr_Sindhdistricts_2.setVisible(true);lyr_Healthfacilities_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Sindhpopulation_1,lyr_Sindhdistricts_2,lyr_Healthfacilities_3];
lyr_Sindhpopulation_1.set('fieldAliases', {'VALUE': 'VALUE', });
lyr_Sindhdistricts_2.set('fieldAliases', {'ID': 'ID', 'District': 'District', 'Dist_short': 'Dist_short', 'layer': 'layer', 'path': 'path', });
lyr_Healthfacilities_3.set('fieldAliases', {'Facility Name': 'Facility Name', 'Facility Code': 'Facility Code', 'District': 'District', 'Facility Type': 'Facility Type', 'Managed By': 'Managed By', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Sindhpopulation_1.set('fieldImages', {'VALUE': 'TextEdit', });
lyr_Sindhdistricts_2.set('fieldImages', {'ID': 'TextEdit', 'District': 'TextEdit', 'Dist_short': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Healthfacilities_3.set('fieldImages', {'Facility Name': 'TextEdit', 'Facility Code': 'Range', 'District': 'TextEdit', 'Facility Type': 'TextEdit', 'Managed By': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Sindhpopulation_1.set('fieldLabels', {'VALUE': 'no label', });
lyr_Sindhdistricts_2.set('fieldLabels', {'ID': 'no label', 'District': 'no label', 'Dist_short': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Healthfacilities_3.set('fieldLabels', {'Facility Name': 'inline label - always visible', 'Facility Code': 'inline label - always visible', 'District': 'inline label - always visible', 'Facility Type': 'inline label - always visible', 'Managed By': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Healthfacilities_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});