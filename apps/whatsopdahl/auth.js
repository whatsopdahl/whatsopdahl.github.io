'use strict';

var app = angular.module("whatsopdahlApp");

app.factory("authSrv", authSrv);

app.constant("AUTHEVENTS", {
	"LOGIN_FAILURE" : "login-failure",
	"LOGIN_SUCCESS" : "login-success",
	"UNAUTHORIZED"  : "unauthorized"
});

authSrv.$inject = ["$rootScope", "$log"]
function authSrv($rootScope, $log){
	return {
		login : login
	}

	function login() {
		return
	}
}