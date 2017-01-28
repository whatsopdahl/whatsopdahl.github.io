'use strict';

var app = angular.module("whatsopdahlApp");

app.controller("blogCtrl", blogCtrl);
app.directive("blogNav", blogNav);
app.factory("blogSrv", blogSrv);

blogCtrl.$inject=["$scope"];
function blogCtrl($scope) {
	
}

blogSrv.$inject = ["$http", "$log"];
function blogSrv($http, $log) {
	return {
		getMeta 	: getMeta,
		getArticle 	: getArticle
	}

	function getMeta() {
		return $http.get("/blogPages/metadata.json").then(function(data) {
			return data;
		}, handleError);
	}

	function getArticle(id) {
		return $http.get("/blogPages/"+id+".html").then(function(data) {
			return data;
		}, handleError);
	}

	function handleError(data) {
		$log.error("Unable to retrieve data: ", data);
	}
}

function blogNav() {
	return {
		restrict : "E",
		templateUrl : "templates/blogNav.html"
	}
}