//create main controller & inject $scope
inspiredApp.controller('mainController', ['$scope', 'quoteFactory', function($scope, quoteFactory){

	var afterQuotes = function(response){

		if (quoteFactory.quoteData.length == 0){
			response.data.forEach(function(item){
			quoteFactory.quoteData.push(item)
			})
		}

		$scope.messageContent = quoteFactory.quoteData[5].content
		$scope.messageAuthor = quoteFactory.quoteData[5].author


	}

	quoteFactory.get().then(afterQuotes)

}])


//create addQuote controller & inject $scope

inspiredApp.controller('addQuoteController', ['$scope', 'quoteFactory', function($scope, quoteFactory){

		$scope.messageContent = quoteFactory.quoteData[6].content
		$scope.messageAuthor = quoteFactory.quoteData[6].author
}])
