angular.module('music.module', [])
	.controller('music.controller', ['$scope', '$http','servicesFactory', function ($scope, $http, servicesFactory) {
		$scope.baseUrl = 'https://api.spotify.com';
		$scope.artist="ed sheeran";
		$scope.type="artist";

		$scope.searchFor = function (url, type, artist) {
			servicesFactory.searchItem(url, type, artist)
				.success( function (res) {
					console.log(JSON.stringify(res));
				})
				.error(function (err) {
					console.log("error D:");
				})
		}
		$scope.searchFor($scope.baseUrl, $scope.type, $scope.artist);

	}]);
			// $http.get($scope.baseUrl + '/v1/search?q='+$scope.artist+'&type='+$scope.type).success(function (res) {
			// 	console.log("respuesta : " + JSON.stringify(res));
			// });