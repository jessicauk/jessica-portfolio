angular.module('portfolioApp',['ui.router','site.module','services.module', 'music.module'])
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
						views: {
							'contenido' : {
								templateUrl: 'assets/templates/work/music.html',
								controller: 'music.controller'
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

angular.module('prueba.module',[])
	.controller('prueba.controller', ['$scope', '$rootScope', '$http', function ( $scope, $rootScope, $http ) {
		$scope.url = '';
	}]);
angular.module('site.module',[])
	.controller('about.controller', ['$scope', function ($scope) {
		$('.icon-plus').on('click', function () {
			var icon =  $(this);
			var element = $(this).attr("href");
			$(element).slideToggle("slow");
			$(icon).toggleClass('icon-rotate');
    		//$(icon).toggleClass('icon-rotate-reset');
		});

	}])
	.controller('work.controller', ['$scope', function ($scope) {
		
	}])
	.controller('contact.controller', ['$scope', function ($scope) {

	}]);
angular.module('services.module',[])
	.factory('servicesFactory', ['$http', function ($http) {
		return {
			searchItem : function (url, type, artist) {
				return $http.get(url + '/v1/search?q='+artist+'&type='+type);
			},
			albumArtist: function (url, idArtist)  {
				return $http.get(url +'/v1/artists/'+idArtist+'/albums');
			}
		};
	}]);

angular.module('music.module', [])
	.controller('music.controller', ['$scope', '$http','servicesFactory', function ($scope, $http, servicesFactory) {
		$scope.baseUrl ='https://api.spotify.com';
		$scope.artist="";
		$scope.type="artist";
		$scope.loader = false;
		$scope.searchFor = function (type, artist) {
			servicesFactory.searchItem($scope.baseUrl, type, artist)
				.success( function (res) {
					$scope.loader = false;
					$scope.emptyArray = false;
					$scope.artista ="";
					//console.log(res.artists.items[0].name);
					$scope.artista = res.artists.items[0];
					if($scope.artista !== undefined) {
						$scope.artist="";
						$scope.emptyArray = false;
						$scope.img = $scope.artista.images[0].url;
						$scope.genres = $scope.artista.genres;
						$scope.idArtist = $scope.artista.id;
						$scope.artistName = $scope.artista.name;
						$scope.artistAlbum($scope.idArtist);
					}else{
						$scope.artista = [];
						$scope.img ="";
						$scope.genres = [];
						$scope.artistName ="";
						$scope.emptyArray = true;
						//$scope.artist="";
						$scope.message="Artist not found, try once!";
					}

				})
				.error(function (err) {
					console.log("error D:");
				})
		};

		$scope.artistAlbum = function (idArtist) {
			servicesFactory.albumArtist($scope.baseUrl, idArtist)
				.success( function (res) {
					//console.log("album ok : " + JSON.stringify(res));
					$scope.albums = res.items;
				})
				.error(function (err) {
					console.log("album no : ");
				}) 
		}
	}]); 

