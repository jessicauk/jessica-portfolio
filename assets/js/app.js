angular.module('portfolioApp',['ui.router'])
	.run(function ($rootScope) {
		$rootScope.mensaje = "Angular tools";
	})
	.config( function ( $locationProvider, $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise("/")
		$stateProvider
			.state('layout', {
				url : '/',
				views : {
					"header" : {templateUrl : "assets/templates/header.html"}
				}
			})
				.state('about', {
					url: '/about',
					templateUrl: '../templates/about.html',
					controller: function ($scope) {
						$scope.works = ['Everis México', 'Morton Casa de Subastas', 'Global Human Services'];
					}
				})

	})
	.controller('mainController', ['$scope', '$rootScope', '$http', function ( $scope, $rootScope, $http ) {
		$scope.message = $rootScope.mensaje;
	}])