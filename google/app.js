var app = angular.module('app', ['ngSanitize']);

app.controller('GoogleSearch', function($scope, $http) {
  
  $scope.doSearch = function () {
    
    var uri ='https://ajax.googleapis.com/ajax/services/search/web';
    var query = {
      "v": "1.0", "rsz": "8", "callback": "JSON_CALLBACK",
      "q": $scope.query
    };
    uri = uri + "?" + $.param(query);
    
    $http.jsonp(uri).success(function(data) {
      $scope.results = data;
    });
  };
});
