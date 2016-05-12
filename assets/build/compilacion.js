angular.module('portfolioApp',['ui.router','prueba.module'])
	.run(['$rootScope', function ( $rootScope ) {
		$rootScope.mensaje = "Angular tools";
		$rootScope.prueba = "Es una pruueba";
	}])
	.config( [ '$locationProvider', '$stateProvider', '$urlRouterProvider', function ( $locationProvider, $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise("/")
		$stateProvider
			.state('index', {
				url : '/',
				views : {
					'@': {
						templateUrl : 'assets/templates/layout.html',
						controller: 'mainController'
					},
					'header@index' : {templateUrl: 'assets/templates/header.html',controller: 'mainController'},
					'footer@index' : {templateUrl: 'assets/templates/footer.html',controller: ''}
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
					controller: 'prueba.controller'
				})
				.state('index.contact', {
					url: 'contact',
					templateUrl: "assets/templates/contact.html",
					controller: ''
				})
	}])
	.controller('mainController', ['$scope', '$rootScope', '$http', function ( $scope, $rootScope, $http ) {
		$scope.message = $rootScope.mensaje;
			$(document).ready(function () {
				$('#about').on("click", function() {
					var p = $('#about').position();
					console.log(JSON.stringify(p));
				});
				$('#menu-adapt').on('click', function () {
					$lista = $('#list-items');
					$lista.toggle();
				});
				$('li').on('click', function () {
					$('#list-items').hide();
				})
				$(window).resize(function () {
					$sizeBlock = window.matchMedia("(min-width: 500px)");
					if($sizeBlock.matches) {
						$('ul').show();
						console.log("resize");
					}else{
						$('ul').hide();
					}
				})
			})	
	}])

angular.module('prueba.module',[])
	.controller('prueba.controller', ['$scope', '$rootScope', '$http', function ( $scope, $rootScope, $http ) {
		
	}]);
angular.module('site.module',[])
	.controller('about.controller', ['$scope', function ($scope) {
		
	}])
	.controller('work.controller', ['$scope', function ($scope) {

	}])
	.controller('contact.controller', ['$scope', function ($scope) {

	}])