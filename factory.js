inspiredApp.factory('quoteFactory', function($http){

	var quoteData = []

	var QuoteMaker = function(author, content){
		this.author		= author
		this.content	= content
		quoteData.push(this)
	}

	return {
		QuoteMaker	: QuoteMaker,
		quoteData	: quoteData,
		get 		: function(){
			return $http.get('samplequotes.json')
		}
	}

})
