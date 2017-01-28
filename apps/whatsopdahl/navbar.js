'use strict';

var app = angular.module("whatsopdahlApp");

app.directive("navbar", navbar);
app.controller("navCtrl", navCtrl);

navCtrl.$inject = ["$scope", "authSrv"];
function navCtrl($scope, authSrv) {
	$scope.login = authSrv.login();
}

function navbar() {
	return {
		restrict:'E',
		controller:'navCtrl',
		templateUrl:'templates/navbar.html'
	};
}