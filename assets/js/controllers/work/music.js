angular.module('music.module', [])
	.controller('music.controller', ['$scope', '$http','servicesFactory', function ($scope, $http, servicesFactory) {
		$scope.baseUrl ='https://api.spotify.com';
		$scope.artist="";
		$scope.type="artist";

		$scope.searchFor = function (type, artist) {
			servicesFactory.searchItem($scope.baseUrl, type, artist)
				.success( function (res) {
					console.log(res.artists.items[0].name);
					$scope.artista = res.artists.items[0];
					$scope.img = $scope.artista.images[0].url;
					$scope.genres = $scope.artista.genres;
					$scope.idArtist = $scope.artista.id;
					$scope.artistName = $scope.artista.name;
					$scope.artistAlbum($scope.idArtist);
				})
				.error(function (err) {
					console.log("error D:");
				})
		};

		$scope.artistAlbum = function (idArtist) {
			servicesFactory.albumArtist($scope.baseUrl, idArtist)
				.success( function (res) {
					console.log("album ok : " + JSON.stringify(res));
				})
				.error(function (err) {
					console.log("album no : ");
				}) 
		}
	}]); 

