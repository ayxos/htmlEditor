/**
 * Service module for the auth
 * @module services/auth
 */

angular.module('services.auth', [
	'config',
	'ngResource'
])
.factory('AuthService', function($resource, DOMAIN_URL) {
  var currentUser = $resource(DOMAIN_URL + 'me/', null, {});
  return currentUser;
});