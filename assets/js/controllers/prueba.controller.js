angular.module('prueba.module',[])
	.controller('prueba.controller', ['$scope', '$rootScope', '$http', function ( $scope, $rootScope, $http ) {
		$(document).ready(function () {
			$('section[data-type="background"]').each(function () {
				var $obj = $(this);
				console.log("Pues segun esta entrando aqui 1");
				$(window).scroll(function () {
					var yPos = -($(window).scrollTop() / $obj.data('speed'));
					// Put background position
					var coords = '50% '+ yPos + 'px';
					console.log("Pues segun esta entrando aqui2");
					// Move the background
					$obj.css({ backgroundPosition: coords });
				});
			});
		})
	}]);