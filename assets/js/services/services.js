angular.module('services.module',[])
	.factory('servicesFactory', function ($scope, $http) {
		return {
			searchItem : function () {
				//return $http.get(url + '/v1/search?q='+name+'&type='+type);
				return "hola";
			}
		};
	})