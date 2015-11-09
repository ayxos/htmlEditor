/**
 * Controller module for the content
 * @module controllers/content
 */

angular.module('controllers.worknotes', [
	'config',
	'ngTable',
	'services.notes',
	'angularMoment'
])
.controller('WorknotesController', function($scope, $rootScope, ngTableParams, NotesService) {
	$scope.message = 'Who we are';

    NotesService.get(function(arg){
    	$scope.data = arg.data;
	    $scope.tableParams = new ngTableParams({
	        page: 1,            // show first page
	        count: 20           // count per page
	    }, {
	        total: $scope.data.length, // length of data
	        counts: [],   // hides pagination
	        getData: function($defer, params) {
	            $defer.resolve($scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
	        }
	    });
    });

    $scope.newRow = function() {
    	var objectEmpty = {
	    	date: moment().format('d/MM/YYYY hh:mm'),
	    	hours: 0,
	    	work: 'empty',
	    	mistakes: 'empty',
	    	suggestions: 'empty',
	    	clarifications: 'empty',
	    	comments: 'empty'
    	};
    	NotesService.save(objectEmpty, function(arg){
    		objectEmpty._id = arg.object._id;
    		console.log('id', arg.object._id);
    		$scope.tableParams.data.push(objectEmpty);
    	});
    }

    $scope.saveTable = function(row) {
    	var objectToSend = $scope.tableParams.data[row];
    	objectToSend.articleId = $rootScope.article._id;
    	NotesService.update(objectToSend, function(arg){
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
