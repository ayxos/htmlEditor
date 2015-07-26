/**
 * Controller module for the content
 * @module controllers/content
 */

angular.module('controllers.editor', [
	'config',
	'services.domain'
])
.controller('EditorController', function($scope, $http, DOMAIN_URL, CHEATSHEET) {
	$scope.textAreaModel = '[Paste here your Original HTML code....]';
	$scope.showDownloadLink = false;

	$scope.cheatsheet = CHEATSHEET;

	var $htmlText = $('.CodeMirror-code').text();

    var a = $(".editor").ghostDown({
        scope: '.entry-markdown',
        original: '.original-markdown',
        markdown: '.entry-markdown',
        preview: '.entry-preview'
    });

    $scope.download = function(){
    	var res = window.html.replace(/<\/\htmlEditor>/g,"");
    	var result = res.replace(/<htmlEditor>/g,"");
    	console.log(result);

		$http.post(DOMAIN_URL + '/getFile', {msg: result}).
		  success(function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
		    $scope.showDownloadLink = true;
		  }).
		  error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
    };
    $scope.turnoff = function() {
    	console.log('lala');
    	$scope.showDownloadLink = false;
    }

	var countWords = function(){
		var value = $('#originalText').val();
	    var regex = /\s+/gi;
	    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
		$scope.wordOriginal = wordCount;
		return wordCount;
	};

	$scope.check = function(){
		$http.post(DOMAIN_URL + '/check', {lang: $('#sel1').val(), html: window.html})
		  .success(function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
		    $scope.spellChecker = data;
		  })
		  .error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
	};

	countWords();

	$scope.$watch('textAreaModel', function () {
		countWords();
	});

	$scope.$watch('price', function () {
		$scope.finalValue = (countWords()*parseFloat($scope.price)).toFixed(2);
	});

	$scope.$watch('words', function () {
		// obtain time
		var time = $('#time').text().split(':');
		var d = new Date(); // creates a Date Object using the clients current time
		d.setHours  (+time[0]); // set Time accordingly, using implicit type coercion
		d.setMinutes( time[1]); // you can pass Number or String, it doesn't matter
		d.setSeconds( time[2]);
		// /console.log(d);

		//convert to seconds
		var seconds = moment.duration(d).asSeconds();
		// divide
		var total = parseFloat($scope.words*(countWords()/seconds)).toFixed(2);
		// multipl per word
		// return in hours
		var finalResult = moment().startOf('day')
        	.seconds(total)
        	.format('H:mm:ss');

        console.log(finalResult);
		$scope.finalHours = finalResult;
	});

	$('#toggleRevenue').on('click', function(){
		$(this).parent().find('.revenue').toggle();
	});

})