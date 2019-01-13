function t_calcT() {
				var one = document.getElementById("t_env").value;
				var two = document.getElementById("t_age").value;
				var three = document.getElementById("t_drv").value;
				var total = "T" + one + two + three;
				return total;}
function t_calcW() {
				var one = document.getElementById("t_wt").value;
				var total = "tmp" + one;
				return total;}
function t_changestyle() {
				var total = t_calcT();
				//alert(total)
				if (total == "T000") {
					alert("please select at least one value");
				} else {
					map.removeLayer(layer_torontoLAyerz_0);
        			layer_torontoLAyerz_0 = L.geoJson(json_TO_0, {
						onEachFeature: pop_torontoLAyerz_0,
						style: Tnew});
        			bounds_group.addLayer(layer_torontoLAyerz_0);
        			map.addLayer(layer_torontoLAyerz_0);
        			setBounds();
				}}
//temperature
function t_changestyle1() {
				//var total = t_calcW();
				//alert(total);
					map.removeLayer(layer_torontoLAyerz_0);
        			layer_torontoLAyerz_0 = L.geoJson(json_TO_0, {
						onEachFeature: pop_torontoLAyerz_1,
						style: WTnew});
        			bounds_group.addLayer(layer_torontoLAyerz_0);
        			map.addLayer(layer_torontoLAyerz_0);
        			setBounds();
				}
function Tnew(feature) {
			var attribute = t_calcT();//'T001'
			if (attribute.length != 4) {attribute = "T000"}
			
            if (feature.properties[attribute] > 0.000000 && feature.properties[attribute] <= 20.000000 ) {
                return {
 				pane: 'pane_torontoLAyerz_0',
                opacity: 1,
                color: 'rgba(240,193,64,0.8)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
				}	
            }else if (feature.properties[attribute] > 20.000000 && feature.properties[attribute] <= 40.000000 ) {
                return {
                pane: 'pane_torontoLAyerz_0',
                opacity: 1,
                color: 'rgba(247,142,102,0.8)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
				}
            }else if (feature.properties[attribute] > 40.000000 && feature.properties[attribute] <= 60.000000 ) {
                return {
                pane: 'pane_torontoLAyerz_0',
                opacity: 1,
                color: 'rgba(253,99,132,0.8)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
				}
            }else if (feature.properties[attribute] > 60.000000 && feature.properties[attribute] <= 80.000000 ) {
                return {
                pane: 'pane_torontoLAyerz_0',
                opacity: 1,
                color: 'rgba(212,61,165,0.8)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
				}
            }else if (feature.properties[attribute] > 80.000000 && feature.properties[attribute] <= 100.000000 ) {
                return {
                pane: 'pane_torontoLAyerz_0',
                opacity: 1,
                color: 'rgba(139,0,162,0.8)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
				}
            }else {
                return {
 				pane: 'pane_torontoLAyerz_0',
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
function WTnew(feature) {
			var attribute = t_calcW();//'T001'
			if (attribute.length != 4) {attribute = "T000"}
			
            if (feature.properties[attribute] > 0.000000 && feature.properties[attribute] <= 20.000000 ) {
                return {
 				pane: 'pane_torontoLAyerz_0',
                opacity: 1,
                color: 'rgba(213,226,232,0.8)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }	
            }
            if (feature.properties[attribute] >= 20.000000 && feature.properties[attribute] <= 40.000000 ) {
                return {
                pane: 'pane_torontoLAyerz_0',
                opacity: 1,
                color: 'rgba(214,171,191,0.8)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
            }
            if (feature.properties[attribute] >= 40.000000 && feature.properties[attribute] <= 60.000000 ) {
                return {
                pane: 'pane_torontoLAyerz_0',
                opacity: 1,
                color: 'rgba(194,112,116,0.8)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
            }
            if (feature.properties[attribute] >= 60.000000 && feature.properties[attribute] <= 80.000000 ) {
                return {
                pane: 'pane_torontoLAyerz_0',
                opacity: 1,
                color: 'rgba(241,90,73,0.8)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
            }
            if (feature.properties[attribute] >= 80.000000 && feature.properties[attribute] <= 100.000000 ) {
                return {
                pane: 'pane_torontoLAyerz_0',
                opacity: 1,
                color: 'rgba(175,0,2,0.8)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
            }
            }
			else {
                return {
 				pane: 'pane_torontoLAyerz_0',
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