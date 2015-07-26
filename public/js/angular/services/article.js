/**
 * Service module for the article
 * @module services/article
 */

angular.module('services.article', [
	'config',
	'ngResource'
])
.factory('ArticlesService', function($resource, DOMAIN_URL) {
  var articlesSrvc = $resource(DOMAIN_URL + 'articles/:id/', null, {
  	'get':  {method:'GET', isArray:true},
  	'update':  {method:'PUT'}
  });
  return articlesSrvc;
})