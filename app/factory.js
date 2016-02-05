inspiredApp.factory('quoteFactory', function($http){

	var quoteData = []

	var Quote = function(author, content){
		this.author			= author
		this.content		= content
		this.ratingScore	= 0
		quoteData.push(this)
	}

	return {
		Quote 		: Quote,
		quoteData	: quoteData,
		get 		: function(){
			return $http.get('samplequotes.json')
		},
		randomQuote	: function(){
			return quoteData[Math.floor(Math.random()*quoteData.length)]
		}
	}

})
