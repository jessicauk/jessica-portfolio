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
				var data = {};
				$http.get(url)
					.success(function (response) {
						data = response;
						var fileTxt = new Blob(["hola"], {
							type: "text/plain; charset=utf-8;",
						});
						saveAs(fileTxt,"file.txt");
					})
					.error(function (error) {
						console.log("hay un error");
					});
				return data;
			} 
		};
	}]);
