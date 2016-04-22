angular.module('portfolioApp',['ui.router'])
	.run(function ($rootScope) {
		$rootScope.mensaje = "Angular tools";
	})
	.config( function ( $locationProvider, $stateProvider, $urlRouterProvider ) {
		$locationProvider.html5Mode({
			enabled: true,
  			requireBase: false
		});
		//$urlRouterProvider.otherwise("/index")
		$stateProvider
			.state('index', {
				url : '',
				views : {
					"header" : {templateUrl : "../templates/header.html"}
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