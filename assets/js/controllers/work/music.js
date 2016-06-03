angular.module('music.module', [])
	.controller('music.controller', ['$scope', '$http','servicesFactory', function ($scope, $http, servicesFactory) {
		$scope.baseUrl ='https://api.spotify.com';
		$scope.artist="";
		$scope.type="artist";
		$scope.loader = false;
		$scope.fail = false;
		$scope.searchFor = function (type, artist) {
			servicesFactory.searchItem($scope.baseUrl, type, artist)
				.success( function (res) {
					$scope.loader = false;
					$scope.emptyArray = false;
					$scope.artista ="";
					//console.log(res.artists.items[0].name);
					$scope.artista = res.artists.items[0];
					if($scope.artista !== undefined) {
						$scope.artist="";
						$scope.emptyArray = false;
						$scope.img = $scope.artista.images[0].url;
						$scope.genres = $scope.artista.genres;
						$scope.idArtist = $scope.artista.id;
						$scope.artistName = $scope.artista.name;
						$scope.artistAlbum($scope.idArtist);
						$scope.fail = false;
					}else{
						$scope.artista = [];
						$scope.img ="";
						$scope.genres = [];
						$scope.artistName ="";
						$scope.emptyArray = true;
						$scope.fail = false;
						$scope.message="Artist not found, try once!";
					}

				})
				.error(function (err) {
					$scope.emptyArray = true;
					$scope.message = "";
					$scope.fail = true;
					$scope.failMessage = "Please, type a name in the box!";
					console.log("error D:");
				})
		};
		$scope.muestra = false;
		$scope.showAll = function () {
			$scope.muestra = true;
		}
		$scope.albumTracks = function (id) {
			$scope.muestra = true;
			servicesFactory.albumTracks($scope.baseUrl, id)
				.success( function (res) {
					//console.log("album ok : " + JSON.stringify(res));
					$scope.albumTracks = res.items;
				})
				.error(function (err) {
					console.log("tracks no : ");
				}) 
		};

		$scope.artistAlbum = function (idArtist) {
			servicesFactory.albumArtist($scope.baseUrl, idArtist)
				.success( function (res) {
					//console.log("album ok : " + JSON.stringify(res));
					$scope.albums = res.items;
				})
				.error(function (err) {
					console.log("album no : ");
				}); 
		};
	}]); 

