angular.module('portfolioApp',['ui.router','site.module','services.module', 'music.module'])
	.run(['$rootScope', '$http', function ( $rootScope, $http ) {
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
						views: {
							'spotifyApi' : {
								templateUrl: 'assets/templates/work/music.html',
								controller: 'music.controller'
							},
						},
					})
					.state('index.work.shapes',{
						url: '/shapes',
						views: {
							'shapes' : {
								templateUrl: 'assets/templates/work/cssShapes.html',
								controller: ''
							},
						},
					})
				.state('index.contact', {
					url: 'contact',
					templateUrl: "assets/templates/contact.html",
					controller: ''
				})
	}])
	.controller('mainController', ['$scope', '$rootScope', '$http', function ( $scope, $rootScope, $http ) {
		$scope.message = $rootScope.mensaje;
		$scope.resizeText = true;
			$(document).ready(function () {
				$('#about').on("click", function() {
					var p = $('#about').position();
				});
				$(window).resize(function () {
					$sizeBlock = window.matchMedia("(min-width: 525px)");
					if($sizeBlock.matches) {
						console.log("resize");
						$scope.resizeText = true;
					}else{
						$scope.resizeText = false;
					}
				})

				$(window).scroll(function () {
					var scrol_pos = $(window).scrollTop();
					//console.log(scrol_pos + " scrol_pos")
					if(scrol_pos > 0 && scrol_pos < 100){
						angular.element('.Hola p').css({'color':'pink'});
					}else{
						angular.element('.Hola p').css({'color':'black'});
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
					
						if($('.text-menu').hasClass('show')) {
							$('.text-menu').removeClass('show').addClass('hide');
							$('#menu-adapt').addClass('menu-transform');
						}else{
							setTimeout ( function () {
								$('.text-menu').removeClass('hide').addClass('show');	
							}, 500);
								
							$('#menu-adapt').removeClass('menu-transform');
						}
					$lista.slideToggle('slow');

				});
			}
		}
	});
