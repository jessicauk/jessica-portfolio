angular.module('site.module',[])
	.controller('about.controller', ['$scope', function ($scope) {
		$(document).ready( function () {
			$('.icon-plus').on('click', function () {
				var icon =  $(this);
				var element = $(this).attr("href");
				$(element).slideToggle("slow");
				$(icon).toggleClass('icon-rotate');
			});

			$(window).scroll(function () {
				var valorScroll = $(window).scrollTop();
				console.log(scrol_pos + " scrol_before")
				while(valorScroll>50){
					console.log(valorScroll + " scrol_afer")
				}
				//console.log(scrol_pos + " scrol_pos")
				
			})
		})

	}])
	.controller('work.controller', ['$scope','$http', 'servicesFactory', function ($scope, $http, servicesFactory) {

	}])
	.controller('contact.controller', ['$scope', function ($scope) {

	}]);