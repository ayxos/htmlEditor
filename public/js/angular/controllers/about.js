/**
 * Controller module for the about
 * @module controllers/about
 */
angular.module('controllers.about', [
	'config'
])
.controller('AboutController', function($scope, $http, DOMAIN_URL) {
	$scope.domain = DOMAIN_URL;
	$scope.message = 'Who we are';
});