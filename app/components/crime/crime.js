(function(){
   angular.module("app")  
   .controller("Crime", Crime);

   function Crime(dataservice, MapDataService) {
      var vm = this;
      vm.crimeData = [];
      vm.featureType = "crime";
      vm.filteredData;
      activate();

      function activate(){
         return getCrimeStats().then(function(){
            MapDataService.updateData(vm.featureType, vm.crimeData);
         })  
      }

      function getCrimeStats(){
         return dataservice.getStats(vm.featureType).then(function(results){
            vm.crimeData = results;
            return vm.crimeData;
         })
      }
   }
   
})();
