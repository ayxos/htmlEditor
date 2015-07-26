/**
 * Controller module for the header
 * @module controllers/header
 */

angular.module('controllers.header', [
	'config',
	'services.auth',
	'services.article'
])
.controller('HeaderController', function($scope, $rootScope, $location, AuthService, ArticlesService) {
	$scope.message = 'Who we are';
	$rootScope.user = AuthService.get();
	$rootScope.alert = {
		class: 'alert-success',
		message: 'Done'
	};
	$rootScope.articleNumber = 0;
	if($rootScope.user) ArticlesService.get(function(arg){
		$scope.articles = arg;

		//load first by default if exist
		if($scope.articles.length) $scope.load($scope.articleNumber);
	});

	// OPS
	$scope.load = function(index) {
		var content = $scope.articles[index];
		$rootScope.articleNumber = index;
		console.log('loading content...', content);
		$('#originalText').val(content.content);
		// insert into editor mode
		$rootScope.article = content;
		console.log($location);
		switch($location.path()) {
			case '/worknotes':
				console.log('wee');
				break;
			default:
				console.log('mark', content.markdown);
				window.editor.setValue(content.markdown);
		}
	}

	$scope.save = function(){
		var auxObj = {
			title: $scope.title,
			content: $('#originalText').val(),
			markdown: window.html
		};
		var article = new ArticlesService(auxObj);
		article.$save(function(arg) {
			$rootScope.alert = {
				class: 'alert-success',
				message: 'Saved properly'
			};
			$('.alert').show();
			auxObj.id = arg.id;
			$scope.articles = ArticlesService.get();
		});
	}
	$scope.update = function(articleID) {
		// console.log(articleID);
		var a = articleID;
		var auxObj = {
			content: $('#originalText').val(),
			markdown: window.html
		};
		ArticlesService.update({id: a}, auxObj, function(arg) {
			$rootScope.alert = {
				class: 'alert-info',
				message: 'Updated properly'
			};
			$('#myModal .close-modal').click();
			$('.alert').show();
			$scope.articles = ArticlesService.get();
		});
	}

	$scope.delete = function(articleID) {
		// console.log(articleID);
		var a = articleID;
		ArticlesService.delete({id:a}, function(arg) {
			$rootScope.alert = {
				class: 'alert-danger',
				message: 'Deleted properly'
			};
			$('#myModal .close-modal').click();
			$('.alert').show();
			$scope.articles = ArticlesService.get();
		});
	}

	$rootScope.toggleNav = function() {
		$('#navbar').toggle();
		$('#toggleDown').toggle();
	}
})
