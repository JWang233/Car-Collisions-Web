function h_calcT() {
				var one = document.getElementById("h_env").value;
				var two = document.getElementById("h_rd").value;
				var three = document.getElementById("h_drv").value;
				var total = "T" + one + two + three;
				return total;}
function h_calcW() {
				 var one = document.getElementById("h_wt").value;
				 var total = "tmp" + one;
				 return total;}
				 
// road factors
function h_changestyle() {
				var total = h_calcT();
				if (total == "T000") {
					alert("please select at least one value");
				} else {
					//document.getElementById("output1").innerHTML = total;
					map2.removeLayer(layer_hwy_0);
        			layer_hwy_0 = L.geoJson(json_hwy_0, {pane: 'pane_hwy_0',
						onEachFeature: pop_hwy_0,
						style: Hnew});
        			bounds_group2.addLayer(layer_hwy_0);
        			map2.addLayer(layer_hwy_0);
        			setBounds();
				}}
// temperature
 function h_changestyle1() {
					map2.removeLayer(layer_hwy_0);
        			layer_hwy_0 = L.geoJson(json_hwy_0, {pane: 'pane_hwy_0',
						onEachFeature: pop_hwy_1,
						style: HWnew});
        			bounds_group2.addLayer(layer_hwy_0);
        			map2.addLayer(layer_hwy_0);
        			setBounds();
				}
function Hnew(feature) {
			var attribute = h_calcT();//'T001'
			if (attribute.length != 4) {attribute = "T000"}
            if (feature.properties[attribute] > 0.000000 && feature.properties[attribute] <= 20.000000 ) {
                return {
 				pane: 'pane_hwy_0',
                opacity: 1,
                color: 'rgba(255,255,178,0.8)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
				}
            }if (feature.properties[attribute] >= 20.000000 && feature.properties[attribute] <= 40.000000 ) {
                return {
                pane: 'pane_hwy_0',
                opacity: 1,
                color: 'rgba(254,204,92,0.8)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
				}
            }if (feature.properties[attribute] >= 40.000000 && feature.properties[attribute] <= 60.000000 ) {
                return {
                pane: 'pane_hwy_0',
                opacity: 1,
                color: 'rgba(253,141,60,0.8)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
				}
            }if (feature.properties[attribute] >= 60.000000 && feature.properties[attribute] <= 80.000000 ) {
                return {
                pane: 'pane_hwy_0',
                opacity: 1,
                color: 'rgba(240,59,32,0.8)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
				}
            }if (feature.properties[attribute] >= 80.000000 && feature.properties[attribute] <= 100.000000 ) {
                return {
                pane: 'pane_hwy_0',
                opacity: 1,
                color: 'rgba(189,0,38,0.8)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
				}
            }else {
                return {
                pane: 'pane_hwy_0',
                opacity: 1,
                color: 'rgba(255,255,255,0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
            }
        }
 function HWnew(feature) {
			 var attribute = h_calcW();//'T001'
			 if (feature.properties[attribute] > 0.000000 && feature.properties[attribute] <= 20.000000 ) {
                return {
 				pane: 'pane_hwy_0',
                opacity: 1,
                color: 'rgba(255,255,178,0.8)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
				}
            }if (feature.properties[attribute] >= 20.000000 && feature.properties[attribute] <= 40.000000 ) {
                return {
                pane: 'pane_hwy_0',
                opacity: 1,
                color: 'rgba(254,204,92,0.8)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
				}
            }if (feature.properties[attribute] >= 40.000000 && feature.properties[attribute] <= 60.000000 ) {
                return {
                pane: 'pane_hwy_0',
                opacity: 1,
                color: 'rgba(253,141,60,0.8)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
				}
            }if (feature.properties[attribute] >= 60.000000 && feature.properties[attribute] <= 80.000000 ) {
                return {
                pane: 'pane_hwy_0',
                opacity: 1,
                color: 'rgba(240,59,32,0.8)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
				}
            }if (feature.properties[attribute] >= 80.000000 && feature.properties[attribute] <= 100.000000 ) {
                return {
                pane: 'pane_hwy_0',
                opacity: 1,
                color: 'rgba(189,0,38,0.8)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
				}
            }else {
                return {
                pane: 'pane_hwy_0',
                opacity: 1,
                color: 'rgba(255,255,255,0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
            }
        }