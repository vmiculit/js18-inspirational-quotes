//create main controller & inject $scope
inspiredApp.controller('mainController', ['$scope', 'quoteFactory', function($scope, quoteFactory){

	quoteFactory.get().then(function(response){
		response.data.forEach(function(item){
			quoteFactory.quoteData.push(item)
		})
		console.log(quoteFactory.quoteData)
		$scope.messageContent = quoteFactory.quoteData[5].content
		$scope.messageAuthor = quoteFactory.quoteData[5].author


	})
}])


//create addQuote controller & inject $scope

inspiredApp.controller('addQuoteController', ['$scope', 'quoteFactory', function($scope, quoteFactory){

		$scope.messageContent = quoteFactory.quoteData[6].content
		$scope.messageAuthor = quoteFactory.quoteData[6].author
}])
