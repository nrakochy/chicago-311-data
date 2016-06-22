(function(){
	angular
		.module('app')
		.factory('dataservice', dataService)

		function dataService($http){
			var urlMap = {
				crime: "https://data.cityofchicago.org/resource/6zsd-86xi.json",
				trash: null 	
			}

			var service = {
				getStats: getStats
			}

			return service;

			function getStats(type){
				var url = urlMap[type]
				return $http.get(url).then(retrieveData, handleError)
			}

			function retrieveData(obj){
				return obj.data;
			}

			function handleError(message){
				console.log(message);
			}
		}
})();