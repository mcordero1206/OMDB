$(document).ready(function()
{				
	//Click event that will search for the user input as a string against OMDP API
	$(".search").click(function()
	{
		//Logs the user searches input itno the text box
		console.log("down");
		//Variable that pulls the value of the user input from the text box
		var userSearch = $("#input").val();
		console.log(userSearch);
		
		var searchString = 'http://www.omdbapi.com/?s='+userSearch+'&r=json';
		console.log(searchString);

		$.getJSON(searchString, function(data)
		{
			console.log(data);
	      	var movieData = data.Search;
	      	console.log(movieData);
	 
		    for (var i = 0; i < movieData.length; i++) 
		    {
		    	var movieTitle = movieData[i].Title;
		    	console.log(movieTitle);
		    	$("#results").append(movieTitle);
		    }
		});		
	});
		
});
	

