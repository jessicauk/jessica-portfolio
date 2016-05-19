angular.module('music.module', [])
	.controller('music.controller', ['$scope', '$http', 'servicesFactory', function ($scope, $http, servicesFactory) {
		$scope.baseUrl = 'https://api.spotify.com';
		$scope.artist;
		$scope.type;

		$scope.searchFor = function (url, type, name) {
			// servicesFactory.searchItem(url, type, name)
			// 	.success( function (res) {
			// 		console.log(JSON.stringify(res));
			// 	})
			// 	.error(function (err) {
			// 		console.log("error D:");
			// 	})

		}
		$scope.searchFor($scope.baseUrl, $scope.type, $scope.name);

	}])