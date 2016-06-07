angular.module('services.module',[])
	.factory('servicesFactory', ['$http', function ($http) {
		return {
			searchItem : function (url, type, artist) {
				return $http.get(url + '/v1/search?q='+artist+'&type='+type);
			},
			albumArtist: function (url, idArtist)  {
				return $http.get(url +'/v1/artists/'+idArtist+'/albums');
			},
			albumTracks: function (url, idAlbum) {
				return $http.get(url + '/v1/albums/'+idAlbum +'/tracks');
			},
			infoFileDownload: function (url) {
				return $http.get(url);
			} 
		};
	}])
	.directive('downloadBtn', ['$compile', 'servicesFactory', function ($compile, servicesFactory) {
		return {
			restrict: 'AE',
			scope: {
				fileName: '@'
			},
			template: '<button id="fileBtn" ng-click="getMyData()">Click here!</button>',
			link: function (scope, iElement, iAttrs) {
				scope.getMyData = function () {
					servicesFactory.infoFileDownload('https://api.spotify.com/v1/search?query=luis&offset=0&limit=20&type=artist')
						.success( function (response) {
							scope.fileName = response;
							console.log(JSON.stringify(scope.fileName), "esta es la respuesta de mi servicio");
						})
						.error( function (error) {
							console.log(JSON.stringify(error), "se genero un error");
						})
				}
				
			}
		}
	}])
