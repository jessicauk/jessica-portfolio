angular.module('services.module',[])
	.factory('servicesFactory', function ($scope, $http) {
		return {
			musicArtist : function (name) {
				return $http.get('/web');
			}
		}
	})