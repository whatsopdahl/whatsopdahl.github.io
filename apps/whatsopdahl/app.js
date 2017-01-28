'use strict';

var app = angular.module("whatsopdahlApp", ["ngRoute"]);

app.controller("mainCtrl", mainCtrl);
app.controller("slideshowCtrl", slideshowCtrl);
app.directive("slideshow", slideshow);
app.directive("pageFooter", pageFooter);

app.config(['$locationProvider', function($locationProvider) {
	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix("!");
}]);

mainCtrl.$inject = ["$rootScope", "$scope", "$location", "$log"];
function mainCtrl($rootScope, $scope, $location, $log) {
	$rootScope.$on('$locationChangeStart', function() {
		$scope.page = $location.path();
	});
}

slideshowCtrl.$inject = ["$scope","$interval"];
function slideshowCtrl($scope, $interval) {
	setZindeces(); 

	function setZindeces() {
		$scope.img0idx = 3;
		$scope.img1idx = 2;
		$scope.img2idx = 1;
		$scope.img3idx = 0; 
	}

	function incrementZindeces() {
		$scope.img0idx = ($scope.img0idx + 1) % 4;
		$scope.img1idx = ($scope.img1idx + 1) % 4;
		$scope.img2idx = ($scope.img2idx + 1) % 4;
		$scope.img3idx = ($scope.img3idx + 1) % 4;
	}

	$interval(function() {
		incrementZindeces();
	}, 6000);

}

function slideshow() {
	return {
		restrict : "AE",
		templateUrl : "templates/slideshow.html",
		controller : "slideshowCtrl"
	}
}

function pageFooter() {
	return {
		restrict : "E",
		templateUrl : "templates/footer.html"
	}
}