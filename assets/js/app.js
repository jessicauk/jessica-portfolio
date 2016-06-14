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
				.state('index.work', { //
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
				// .state('prueba.work', { //
				// 	url: 'prueba',
				// 	templateUrl: "assets/templates/prueba.html",
				// 	controller: 'prueba.controller'
				// })
	}])
	.controller('mainController', ['$scope', '$rootScope', '$http', function ( $scope, $rootScope, $http ) {
		$scope.message = $rootScope.mensaje;
		$scope.resizeText = true;
			$(document).ready(function () {
				$('#about').on("click", function() {
					var p = $('#about').position();
				});
				$(window).resize(function () {
					$sizeBlock = window.matchMedia("(max-width: 500px)");
					//$responsiveM = window.matchMedia("(max-width: 768px)");
					if($sizeBlock.matches) {
						if(scrol_pos > 155){
							angular.element('.main-block:even').addClass('animate1')
						}else{
							angular.element('.main-block:even').removeClass('animate1');
						}
						if(scrol_pos > 700){
							angular.element('.main-block:odd').addClass('animate2')
						}else{
							angular.element('.main-block:odd').removeClass('animate2');
						}

					}
				})

				$(window).scroll(function () {
					var scrol_pos = $(window).scrollTop();
					console.log(scrol_pos + " scrol_pos")
					if(scrol_pos > 60){
						angular.element('.main-block:even').addClass('animate1')
					}else{
						angular.element('.main-block:even').removeClass('animate1');
					}

					if(scrol_pos > 252){
						angular.element('.main-block:odd').addClass('animate2')
					}else{
						angular.element('.main-block:odd').removeClass('animate2');
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
					$mresponsive = $('#menu-adapt');	
					if($mresponsive.hasClass('menu-transform')){
						$mresponsive.removeClass('menu-transform');
					}else{
						$mresponsive.addClass('menu-transform');
					}

					if($('.text-menu').hasClass('show')) {
						$('.text-menu').removeClass('show').addClass('hide');
					}else{
						setTimeout ( function () {
							$('.text-menu').removeClass('hide').addClass('show');	
						}, 500);
					}
					$lista.slideToggle('slow', function () {
						$('#list-items li').on('click', function () {
							$lista.hide(function () {
								if($mresponsive.hasClass('menu-transform')){
									$mresponsive.removeClass('menu-transform')
								}
							});
						});
					});
				});
			}
		}
	});
