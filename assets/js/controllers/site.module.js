angular.module('site.module',[])
	.controller('about.controller', ['$scope','servicesFactory', function ($scope, servicesFactory) {
		$(document).ready( function () {
			//validate device browser in order to apply scroll
			var isMobile = servicesFactory.isMobile();
			if (!isMobile) {
				$('.about-me__character').css('overflow','hidden');
			} else {
				var isVisibleScroll = window.matchMedia('(max-width: 736px) and (min-width: 300px)');
				if (isVisibleScroll) {
					$('.about-me__character').css('overflow','visible');
					$('.scroll-down').css('display', 'none');
				} else {
					$('.about-me__character').css('overflow','hidden');
				}
			}

			$('.icon-plus').on('click', function () {
				var icon =  $(this);
				var element = $(this).attr("href");
				$(element).slideToggle("slow");
				$(icon).toggleClass('icon-rotate');
			});

			/*$(window).scroll(function () {
				var valorScroll = $(window).scrollTop();
				console.log(valorScroll + " scrol_before")
				while(valorScroll>50){
					console.log(valorScroll + " scrol_afer")
				}
				console.log(scrol_pos + " scrol_pos")
				
			})*/

			var scrolled = 0;
			$scope.scrollFnc = function () {
				var scrollValue = $(".experince").scrollTop();
				if (scrollValue > 0) {
					$(".experince").stop().animate({
	            		scrollTop: 0
	        		}, function (){
	        			$(".scroll-down").animate({bottom:'0'}).before(function(){
		        			$(this).css({transform:'rotate(0deg)'});
		        		})
	        		})
				} else {
					scrolled = scrolled + 500;
					var mediaquery = (window.matchMedia("(max-width: 974px) and (max-height:680px)")) ? '-22%' : '-10%'  
		        	$(".experince").stop().animate({
		            	scrollTop: scrolled
		        	}, function (){
		        		$(".scroll-down").animate({bottom: mediaquery}).before(function(){
		        			$(this).css({transform:'rotate(180deg)'});
		        		})
		        	});
				}
			}
		})

	}])
	.controller('work.controller', ['$scope','$http', 'servicesFactory', function ($scope, $http, servicesFactory) {

	}])
	.controller('contact.controller', ['$scope', function ($scope) {

	}]);