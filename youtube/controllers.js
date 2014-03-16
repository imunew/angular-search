

function YoutubeSearch($scope, $http) {
  $scope.doSearch = function () {
    
    var uri ='http://gdata.youtube.com/feeds/api/videos';
    var query = {
      "lr": "ja", "alt": "json", "callback": "JSON_CALLBACK",
      "vq": $scope.query
    };
    uri = uri + "?" + $.param(query);
    
    $http.jsonp(uri).success(function(data) {
      $scope.results = data;
    });
  };
  
  $scope.query = "AngularJS";
  $scope.doSearch();
  
}
