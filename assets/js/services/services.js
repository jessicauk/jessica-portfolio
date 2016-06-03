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
	.directive('downloadBtn', function () {
		return {
			restrict: 'AE',
			scope: {
				fileName: '@fileN'
			},
			template: '<button id="fileBtn" download="{{fileName}}.txt" ng-click="buttonFile()">Click here!</button>',
			link: function (scope, iElement, iAttrs) {

			}
		}
	})
