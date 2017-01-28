'use strict';

var app = angular.module('whatsopdahlApp');

app.config(["$routeProvider", function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl : "templates/home.html"
	})
	.when("/about",{
		templateUrl : "templates/about.html",
		controller : "aboutCtrl"
	})
	.when("/blog/:article", {
		templateUrl : "templates/blog.html",
		controller : "blogCtrl",
		resolve : resolveParams
	})
	.when("/portfolio", {
		templateUrl : "templates/portfolio.html",
		controller : "portfolioCtrl"
	})
	.when("/contact", {
		templateUrl : "templates/contact.html",
		controller : "contactCtrl"
	})
	.when("/terms", {
		templateUrl : "templates/terms.html"
	})
	.otherwise({redirectTo:"/"});
}]);

resolveParams.$inject = ["$routeParams"];
function resolveParams($routeParams) {
	return $routeParams.article;
}