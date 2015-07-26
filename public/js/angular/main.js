// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', [
	'config',
	'controllers.about',
	'controllers.header',
	'controllers.editor',
	'controllers.worknotes',
	'feeds',
	'ui.router'
])
// Configuración de las rutas
angularRoutingApp.config(function($stateProvider) {
	// Now set up the states
	$stateProvider
		.state('index', {
			url: "",
			views: {
				"header": {
					controller: 'HeaderController',
					templateUrl: 'header.html'
				},
				"content": {
					controller: 'EditorController',
					templateUrl: 'editor.html'
				}
			}
		})
		.state('worknotes', {
			url: "/worknotes",
			views: {
				"header": {
					controller: 'HeaderController',
					templateUrl: 'header.html'
				},
				"content": {
					controller: 'WorknotesController',
					templateUrl: 'worknotes.html'
				}
			}
		})
		.state('about', {
			url: "/about",
			views: {
				"header": {
					controller: 'HeaderController',
					templateUrl: 'header.html'
				},
				"content": {
					controller: 'AboutController',
					templateUrl: 'about.html'
				}
			}
		})
});
