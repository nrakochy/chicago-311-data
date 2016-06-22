<html>
<head>
<title>HTTP Object Test</title>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/darkly/bootstrap.min.css">
<script>
   angular.module("SimpleApp", [])  
	   .controller("HttpController", function($scope, $http) {
      
      $scope.connect = function() {
         $http.get('https://data.cityofchicago.org/resource/6zsd-86xi.json').success(function(data, status, headers, config) {
            $scope.serverData = data;
            $scope.httpResponseHeaders = headers;
         });
      }
   });
</script>
</head>
<body ng-app='SimpleApp' ng-controller='HttpController'>
   <p>
      HTTP response headers: <span>{{httpResponseHeaders}}</span>
   </p>
   <p>
      Data from the web server: <span>{{serverData}}</span>
   </p>
   <p>
      HTTP status code: <span>{{status}}</span>
   </p>
   <button ng-click="connect()" class="btn btn-primary btn-sm">Fetch Data</button>
</body>
</html>