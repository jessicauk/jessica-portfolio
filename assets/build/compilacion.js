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
		
			$('#about').on("click", function() {
				var p = $('#about').position();
				console.log(JSON.stringify(p));
			});
		
	}]);
angular.module('prueba.module',[])
	.controller('prueba.controller', ['$scope', '$rootScope', '$http', function ( $scope, $rootScope, $http ) {
		// $(document).on('ready', function () {
		//});
		$(document).ready(function () {
			alert("ready document!!!!!!!!!!!!");
			console.log("aqui entro este controller");
		});
	}]);
angular.module('site.module',[])
	.controller('about.controller', ['$scope', function ($scope) {
		$scope.technologies = [
			{id:1, name: "Angular JS", category: "js", img:"angularjs-original"},
			{id:2, name: "JavaScript", category: "js", img:"angularjs-original"},
			{id:3, name: "jQuery", category: "js", img:"angularjs-original"},
			{id:4, name: "HTML5", category: "html", img:"angularjs-original"},
			{id:5, name: "CSS3", category: "css", img:"angularjs-original"}
		];
	}])
	.controller('work.controller', ['$scope', function ($scope) {

	}])
	.controller('contact.controller', ['$scope', function ($scope) {

	}])