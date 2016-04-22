angular.module('portfolioApp',['ui.router'])
	.run(function ($rootScope) {
		$rootScope.mensaje = "Angular tools";
	})
	.config(function ( $locationProvider, $stateProvider, $urlRouterProvider ) {
		$locationProvider.html5Mode({
			enabled: true,
  			requireBase: false
		});
		$urlRouterProvider.otherwise("/index")
		$stateProvider
			.state('about', {
				url : '/about',
				templateUrl : '../templates/about/aboutme.html',
				controller : 'mainController'
			})
	})
	.controller('mainController', ['$scope', '$rootScope', '$http', function ( $scope, $rootScope, $http ) {
		$scope.message = $rootScope.mensaje;
	}])