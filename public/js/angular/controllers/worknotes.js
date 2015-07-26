/**
 * Controller module for the content
 * @module controllers/content
 */

angular.module('controllers.worknotes', [
	'config',
	'ngTable',
	'services.notes'
])
.controller('WorknotesController', function($scope, $rootScope, ngTableParams, NotesService) {
	$scope.message = 'Who we are';

    NotesService.get(function(arg){
    	$scope.data = arg.data;
	    $scope.tableParams = new ngTableParams({
	        page: 1,            // show first page
	        total: 1,
	        count: 10           // count per page
	    }, {
	        // total: data.length, // length of data
	        counts: [],   // hides pagination
	        getData: function($defer, params) {
	            $defer.resolve($scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
	        }
	    });
    });

    $scope.newRow = function() {
    	$scope.tableParams.data.push({
	    	date: new Date(),
	    	hours: 0,
	    	work: 'empty',
	    	mistakes: 'empty',
	    	suggestions: 'empty',
	    	clarifications: 'empty',
	    	comments: 'empty'
    	})
    }

    $scope.saveTable = function(row) {
    	var objectToSend = $scope.tableParams.data[row];
    	objectToSend.articleId = $rootScope.article._id;
    	NotesService.save(objectToSend, function(arg){
    		$scope.tableParams.data[row] = arg.object;
    	});
    }

    $scope.deleteRow = function(row) {
    	var objectToSend = $scope.tableParams.data[row];
    	var a = objectToSend._id;
    	NotesService.delete({id: a}, function(arg){
			$scope.tableParams.data.splice(row, 1);
    	});
    }
});