/**
 * Service module for the domain
 * @module services/domain
 */

angular.module('services.notes', [
	'config',
	'ngResource'
])
.factory('NotesService', function($resource, DOMAIN_URL) {
  var notesSrvc = $resource(DOMAIN_URL + 'notes/:id/', {id:'@_id'}, {
  	'update':  {method:'PUT'}
  });
  return notesSrvc;
})