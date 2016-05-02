angular.module('prueba.module',[])
	.controller('prueba.controller', ['$scope', '$rootScope', '$http', function ( $scope, $rootScope, $http ) {
		// $(document).on('ready', function () {
		//});
		$(document).ready(function () {
			alert("ready document!!!!!!!!!!!!");
			console.log("aqui entro este controller");
		});
	}]);