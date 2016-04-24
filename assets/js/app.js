angular.module('portfolioApp',['ui.router'])
	.run(function ($rootScope) {
		$rootScope.mensaje = "Angular tools";
		$rootScope.prueba = "Es una pruasbjhdbjhdbeba hjhbjhbjh";
	})
	.config( function ( $locationProvider, $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise("/")
		$stateProvider
			.state('index', {
				url : '/',
				views : {
					'@': {
						templateUrl : 'assets/templates/layout.html',
						controller: ''
					},
					'header@index' : {templateUrl: 'assets/templates/header.html'},
					'footer@index' : {templateUrl: 'assets/templates/footer.html'}
				}
			})
				.state('index.about', {
					url: 'about',
					templateUrl: "assets/templates/about.html",
					controller: ''
				})
				.state('index.work', {
					url: 'work',
					templateUrl: "assets/templates/work.html",
					controller: ''
				})

				.state('index.contact', {
					url: 'contact',
					templateUrl: "assets/templates/contact.html",
					controller: ''
				})

	})
	.controller('mainController', ['$scope', '$rootScope', '$http', function ( $scope, $rootScope, $http ) {
		$scope.message = $rootScope.mensaje;
	}])