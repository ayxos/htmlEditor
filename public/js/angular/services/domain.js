/**
 * Service module for the domain
 * @module services/domain
 */

angular.module('services.domain', [
	'config',
	'ngResource'
])
.factory('DOMAIN_URL', function($location, $rootScope) {
	$rootScope.domain = window.domainUrl;
	console.log($location.absUrl());
  	return window.domainUrl;
})