inspiredApp.factory('quoteFactory', function($http){

	var quoteData = [
		{
			author: "John Doe", 
			content: "You are wise now. Boom!"
		},
		{
			author: "Jane Doe", 
			content: "You are bright now. KaBoom!"
		}
	]

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
