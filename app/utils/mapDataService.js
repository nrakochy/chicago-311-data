(function(){
	angular
		.module('app')
		.factory('MapDataService', function($filter){
			function MapDataService(filterDI){
				var dateFilter = filterDI('date');
				var  dataService = this;
				dataService.dateFormat = "MM/dd/yyyy 'at' h:mma";
				dataService.mapMarkers;
				dataService.heatMapData = [];
				dataService.layers = {};
				dataService.center = {
	              lat: 41.8781, 
	              lng: -87.6298,
	              zoom: 12 };
				dataService.layers.baselayers = {
                    light: {
                    	name: "Light",
                        url: 'https://api.mapbox.com/styles/v1/lightMapApiWithKey,
                        type: 'xyz'
                    },

					dark: {
                    	name: "Dark",
                        url: 'https://api.mapbox.com/styles/v1/darkMapApiWithKey,
                        type: 'xyz'
                    },

					streets: {
                    	name: "Streets",
                    	url:'https://api.mapbox.com/styles/v1/streetMapApiWithKey,
                        type: 'xyz'
                    }
                }

				dataService.layers.overlays = {
                    crime: {
                        name: "Crime Clusters",
                        type: "markercluster",
                        visible: true
                    },

					heatmap: {
						name: 'Heat Map',
                        type: 'heat',
                        data: dataService.heatMapData,
                        layerOptions: {
                            radius: 20,
                            blur: 10,
                            max: 2.0,
                            gradient: {0.2: 'blue', 0.5: 'lime', 0.7: 'red'},
                            maxZoom: 3
                        },
                        visible: false
                    }
                }

				function formatMarkerData(type, data){
					return _.map(data, function(obj){
						return setMarkerData(type, obj, dataService.dateFormat)
					})
				}

				function setMarkerData(type, obj, dateFormat){
					var latitude = Number(obj.latitude)
					var longitude = Number(obj.longitude)
					if(!isNaN(latitude) && !isNaN(longitude)){
						setHeatMapData(latitude, longitude)
						obj.lat = latitude
						obj.lng = longitude
						obj.layer = type
 		                obj.message = setMarkerWindow(obj, dateFormat), 
						obj.icon = {
                    		type: 'awesomeMarker',
 		                    icon: 'flash',
         		            markerColor: 'red' }
					}

					return obj;

				}

				function setMarkerWindow(obj, dateFormat){
					var arrestStatus = 	"Arrest: " 	+ _.capitalize(obj.arrest.toString());
					var beat = 			"Beat: " 	+ obj.beat.toString();
					var caseNum = 		"Case #: " 	+ obj.case_number.toString();
					var type = 			"Type: " 	+ obj.primary_type.toString();
					var iucr = 			"UCR: " 	+ obj.iucr.toString();
					var lineBreak = 	"<br/>"
					var description = 	"Description: " + lineBreak + obj.description.toString();
					var date = 			dateFilter(obj.date, dateFormat);
					var message = 
					  			  date 			+ lineBreak +
					  			  caseNum 		+ lineBreak +
								  arrestStatus 	+ lineBreak +
					  			  beat 		   	+ lineBreak +
					  			  type 			+ lineBreak +
					  			  iucr 			+ lineBreak +
					  			  description

					return message;
				}

				function setHeatMapData(lat, lng){
				  dataService.heatMapData.push([lat, lng])
				}

				dataService.updateData = function updateData(type, data){
	 				dataService.mapMarkers = formatMarkerData(type, data);
				}
			}
		return new MapDataService($filter);
	})
})();