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