//configure routes
inspiredApp.config(function($routeProvider){
	$routeProvider

	// home page
	.when('/', {
		templateUrl	: 'pages/main.html',
		controller 	: 'mainController'
	})

	// add quote
	.when('/addquote', {
		templateUrl	: 'pages/addquote.html',
		controller 	: 'addQuoteController'
	})

})