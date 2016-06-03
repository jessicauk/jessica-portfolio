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
	.controller('work.controller', ['$scope','$http', 'servicesFactory', function ($scope, $http, servicesFactory) {
		$scope.buttonFile = function () {
			console.log("entro");
			$scope.file = servicesFactory.infoFileDownload('https://api.spotify.com/v1/search?query=luis&offset=0&limit=20&type=artist');
		};
	}])
	.controller('contact.controller', ['$scope', function ($scope) {

	}]);