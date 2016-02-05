//create main controller & inject $scope
inspiredApp.controller('mainController', ['$scope', 'quoteFactory', function($scope, quoteFactory){

	var afterQuotes = function(response){

		if (quoteFactory.quoteData.length == 0){
			response.data.forEach(function(item){
			new quoteFactory.Quote(item.author, item.content)
			})
		}

		$scope.randomQuote = quoteFactory.randomQuote()
		$scope.quotes = quoteFactory.quoteData


	}

	quoteFactory.get().then(afterQuotes)

}])


//create addQuote controller & inject $scope

inspiredApp.controller('addQuoteController', ['$scope', 'quoteFactory', function($scope, quoteFactory){

	$scope.submitQuote = function(){
		if ($scope.authorName && $scope.quoteContent){
			new quoteFactory.Quote($scope.authorName, $scope.quoteContent)
		}
		
		$scope.authorName = ""
		$scope.quoteContent = ""
	}


}])
