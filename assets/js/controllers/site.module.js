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