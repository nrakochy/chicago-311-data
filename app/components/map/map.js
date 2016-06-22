(function(){
   angular.module("app")  
   .controller("Map", Map);

   function Map(MapDataService, leafletData) {
	  var vm = this;
        vm.data = MapDataService;
    
    leafletData.getMap().then(function(map) {
    });
  }
})();