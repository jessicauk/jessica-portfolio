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
					'footer@index' : {templateUrl: 'assets/templates/footer.html',controller: 'mainController'}
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
			$('section[data-type="parallax_section"]').each(function () {
				var $bgobj = $(this);
				$(window).scroll(function() {
					$window = $(window);
					var yPos = -($window.scrollTop() / $bgobj.data('speed'));
					var coords = '50%' + yPos + 'px';
					$bgobj.css({backgroundPosition : coords}); 
				})
			});
			$('#about').on("click", function () {
				var p = $('#about').position();
				console.log("-- " + JSON.stringify(p));
			});
			//var position = p.position();
			//$('.color-span').css({"width":"100%", "transition": "color,width 1s linear", "background":"#FCFFCF", "position":"absolute", "left: " + position.left + ", top: " + position.top});
		});
	}]);