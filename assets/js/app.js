angular.module('portfolioApp',['ui.router','site.module','services.module'])
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
					controller: 'about.controller'
				})
				.state('index.work', {
					url: 'work',
					templateUrl: "assets/templates/work.html",
					controller: 'work.controller'
				})
					.state('index.work.musicApi', {
						url: '/musicapi',
						templateUrl: 'assets/templates/work/music.html',
						controller: ''
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
				});
				$(window).resize(function () {
					$sizeBlock = window.matchMedia("(min-width: 525px)");
					if($sizeBlock.matches) {
						$('#list-items').show();
						console.log("resize");						
					}else{
						$('#list-items').hide();
						$('.description ul').show();
					}
				})
			})	
	}])
	.directive('directiveMenuResponsive', function () {
		return {  
			restrict:'A',
			link: function (scope, element, attrs) {
				$(element).on('click', function () {
					$lista = $('#list-items');
					$lista.slideToggle('slow');
				});
			}
		}
	});
