/**
 * Configuration module for the app
 * @module configuration
 */
angular.module('config', [])

.constant('CHEATSHEET', [
	{code:'<html></html>', desc: 'Creates an HTML document'},
	{code:'<head></head>', desc: 'Sets off the title and other information that isn’t displayed on the web page itself'},
	{code:'<body></body>', desc: 'Sets off the visible portion of the document'},
	{code:'<body bgcolor="pink">', desc: 'Sets the background color, using name or hex value'},
	{code:'<body text="black">', desc: 'Sets the text color, using name or hex value'},
	{code:'<body link="blue">', desc: 'Sets the color of links, using name or hex value'},
	{code:'<body vlink="#ff0000">', desc: 'Sets the color of followed links, using name or hex value'},
	{code:'<body alink="#00ff00">', desc: 'Sets the color of links on click'},
	{code:'<body ondragstart="return false" onselectstart="return false">', desc: 'Disallows text selection with the mouse and keyboard'},
	{code:'<pre></pre>', desc: 'Creates preformatted text'},
	{code:'<hl></hl>', desc: 'Creates the largest headline'},
	{code:'<h6></h6>', desc: 'Creates the smallest headline'},
	{code:'<b></b>', desc: 'Creates bold text'},
	{code:'<i></i>', desc: 'Creates italic text'},
	{code:'<tt></tt>', desc: 'Creates teletype, or typewriter-style text'},
	{code:'<cite></cite>', desc: 'Creates a citation, usually italic'},
	{code:'<em></em>', desc: 'Emphasizes a word (with italic or bold)'},
	{code:'<strong></strong>', desc: 'Emphasizes a word (with italic or bold)'},
	{code:'<font size="3"></font>', desc: 'Sets size of font, from 1 to 7'},
	{code:'<font color="green"></font>', desc: 'Sets font color, using name or hex value'},
	{code:'<a href="URL"></a>', desc: 'Creates a hyperlink'},
	{code:'<a href="mailto:EMAIL"></a>', desc: 'Creates a mailto link'},
	{code:'<a href="URL"><img src="URL">" </a>', desc: 'Creates an image/link'},
	{code:'<a name="NAME"></a>', desc: 'Creates a target location within a document'},
	{code:'<a href="#NAME"></a>', desc: 'Links to that target location from elsewhere in the document'},
	{code:'<p></p>', desc: 'Creates a new paragraph'},
	{code:'<p align="left">', desc: 'Aligns a paragraph to the left (default), right, or center.'},
	{code:'<br>', desc: 'Inserts a line break'},
	{code:'<blockquote></blockquote>', desc: 'Indents text from both sides'},
	{code:'<dl></dl>', desc: 'Creates a definition list'},
	{code:'<dt>', desc: 'Precedes each definition term'},
	{code:'<dd>', desc: 'Precedes each definition'},
	{code:'<ol></ol>', desc: 'Creates a numbered list'},
	{code:'<ul></ul>', desc: 'Creates a bulleted list'},
	{code:'<li></li>', desc: 'Precedes each list item, and adds a number or symbol depending upon the type of list selected'},
	{code:'<div align="left">', desc: 'A generic tag used to format large blocks of HTML, also used for stylesheets'},
	{code:'<img src="name">', desc: 'Adds an image'},
	{code:'<img src="name" align="left">', desc: 'Aligns an image: left, right, center; bottom, top, middle'},
	{code:'<img src="name" border="1">', desc: 'Sets size of border around an image'},
	{code:'<hr />', desc: 'Inserts a horizontal rule'},
	{code:'<hr size="3" />', desc: 'Sets size (height) of rule'},
	{code:'<hr width="80%" />', desc: 'Sets width of rule, in percentage or absolute value'},
	{code:'<hr noshade />', desc: 'Creates a rule without a shadow'},
	{code:'<table></table>', desc: 'Creates a table'},
	{code:'<tr></tr>', desc: 'Sets off each row in a table'},
	{code:'<td></td>', desc: 'Sets off each cell in a row'},
	{code:'<th></th>', desc: 'Sets off the table header (a normal cell with bold, centered text)'},
	{code:'<table border="1">', desc: 'Sets width of border around table cells'},
	{code:'<table cellspacing="1">', desc: 'Sets amount of space between table cells'},
	{code:'<table cellpadding="1">', desc: 'Sets amount of space between a cell’s border and its contents'},
	{code:'<table width="500" or "80%">', desc: 'Sets width of table, in pixels or as a percentage of document width'},
	{code:'<tr align="left">" or <td align="left">', desc: 'Sets alignment for cell(s) (left, center, or right)'},
	{code:'<tr valign="top">" or <td valign="top">', desc: 'Sets vertical alignment for cell(s) (top, middle, or bottom)'},
	{code:'<td colspan="2">', desc: 'Sets number of columns a cell should span (default=1)'},
	{code:'<td rowspan="4">', desc: 'Sets number of rows a cell should span (default=1)'},
	{code:'<td nowrap>', desc: 'Prevents the lines within a cell from being broken to fit'},
	{code:'<frameset></frameset>" Replaces the <body>', desc: 'tag in a frames document; can also be nested in other framesets'},
	{code:'<frameset rows="value,value">', desc: 'Defines the rows within a frameset, using number in pixels, or percentage of width'},
	{code:'<frameset cols="value,value">', desc: 'Defines the columns within a frameset, using number in pixels, or percentage of width'},
	{code:'<frame>', desc: 'Defines a single frame — or region — within a frameset'},
	{code:'<noframes></noframes>', desc: 'Defines what will appear on browsers that don’t support frames'},
	{code:'<frame src="URL">', desc: 'Specifies which HTML document should be displayed'},
	{code:'<frame name="name">', desc: 'Names the frame, or region, so it may be targeted by other frames'},
	{code:'<frame marginwidth="value">', desc: 'Defines the left and right margins for the frame; must be equal to or greater than 1'},
	{code:'<frame marginheight="value">', desc: 'Defines the top and bottom margins for the frame; must be equal to or greater than 1'},
	{code:'<frame scrolling="value">', desc: 'Sets whether the frame has a scrollbar; value may equal “yes,” “no,” or “auto.” The default, as in ordinary documents, is auto.'},
	{code:'<frame noresize="noresize">', desc: 'Prevents the user from resizing a frame'},
	{code:'<form></form>', desc: 'Creates all forms'},
	{code:'<select multiple name="NAME" size=?></select>', desc: 'Creates a scrolling menu. Size sets the number of menu items visible before you need to scroll.'},
	{code:'<option>', desc: 'Sets off each menu item'},
	{code:'<select name="NAME"></select>', desc: 'Creates a pulldown menu'},
	{code:'<option>', desc: 'Sets off each menu item'},
	{code:'<textarea name="NAME" cols=40 rows=8></textarea name>', desc: 'Creates a text box area. Columns set the width; rows set the height.'},
	{code:'<input type="checkbox" name="NAME">', desc: 'Creates a checkbox. Text follows tag.'},
	{code:'<input type="radio" name="NAME" value="x">', desc: 'Creates a radio button. Text follows tag'},
	{code:'<input type="text" name="NAME" size=20>', desc: 'Creates a one-line text area. Size sets length, in characters.'},
	{code:'<input type="submit" value="NAME">', desc: 'Creates a Submit button'},
	{code:'<button type="submit">Submit</button>', desc: 'Creates an actual button that is clicked'},
	{code:'<input type="image" border=0 name="NAME" src="name.gif">', desc: 'Creates a Submit button using an image'},
	{code:'<input type="reset">', desc: 'Creates a Reset button'}
]);
/**
 * Controller module for the about
 * @module controllers/about
 */
angular.module('controllers.about', [
	'config'
])
.controller('AboutController', ["$scope", "$http", "DOMAIN_URL", function($scope, $http, DOMAIN_URL) {
	$scope.domain = DOMAIN_URL;
	$scope.message = 'Who we are';
}]);
/**
 * Controller module for the content
 * @module controllers/content
 */

angular.module('controllers.editor', [
	'config',
	'services.domain'
])
.controller('EditorController', ["$scope", "$http", "DOMAIN_URL", "CHEATSHEET", function($scope, $http, DOMAIN_URL, CHEATSHEET) {
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

}])
/**
 * Controller module for the header
 * @module controllers/header
 */

angular.module('controllers.header', [
	'config',
	'services.auth',
	'services.article'
])
.controller('HeaderController', ["$scope", "$rootScope", "$location", "AuthService", "ArticlesService", function($scope, $rootScope, $location, AuthService, ArticlesService) {
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
}])

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
.controller('WorknotesController', ["$scope", "$rootScope", "ngTableParams", "NotesService", function($scope, $rootScope, ngTableParams, NotesService) {
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
}]);

// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', [
	'config',
	'controllers.about',
	'controllers.header',
	'controllers.editor',
	'controllers.worknotes',
	'ui.router'
])
// Configuración de las rutas
angularRoutingApp.config(["$stateProvider", function($stateProvider) {
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
}]);

/**
 * Service module for the article
 * @module services/article
 */

angular.module('services.article', [
	'config',
	'ngResource'
])
.factory('ArticlesService', ["$resource", "DOMAIN_URL", function($resource, DOMAIN_URL) {
  var articlesSrvc = $resource(DOMAIN_URL + 'articles/:id/', null, {
  	'get':  {method:'GET', isArray:true},
  	'update':  {method:'PUT'}
  });
  return articlesSrvc;
}])
/**
 * Service module for the auth
 * @module services/auth
 */

angular.module('services.auth', [
	'config',
	'ngResource'
])
.factory('AuthService', ["$resource", "DOMAIN_URL", function($resource, DOMAIN_URL) {
  var currentUser = $resource(DOMAIN_URL + 'me/', null, {});
  return currentUser;
}]);
/**
 * Service module for the domain
 * @module services/domain
 */

angular.module('services.domain', [
	'config',
	'ngResource'
])
.factory('DOMAIN_URL', ["$location", "$rootScope", function($location, $rootScope) {
	$rootScope.domain = window.domainUrl;
	console.log($location.absUrl());
  	return window.domainUrl;
}])
/**
 * Service module for the domain
 * @module services/domain
 */

angular.module('services.notes', [
	'config',
	'ngResource'
])
.factory('NotesService', ["$resource", "DOMAIN_URL", function($resource, DOMAIN_URL) {
  var notesSrvc = $resource(DOMAIN_URL + 'notes/:id/', {id:'@_id'}, {
  	'update':  {method:'PUT'}
  });
  return notesSrvc;
}])