console.log("connected");

// var posts = [
// 	{
// 		title: "cats are mediocre",
// 		author: "Colt",
// 		comments: ["Awesome Post", "terrible post"]
// 	},

// 	{
// 		title: "Cats are actually awesome",
// 		author: "Cat luvr",
// 		comments: ["I love you", "You are such a loser"]
// 	}

// ]



var movieDB = [
	{
		title: "Forrest Gump",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Les Miserable",
		rating: 4.5,
		hasWatched: false
	},
	{
		title: " Ninja Turtles",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Zack and Miri make a Porno",
		rating: 4.7,
		hasWatched: true
	},
	{
		title: "True Romance",
		rating: 2,
		hasWatched: false
	}

]

function buildString(movie) {
	var result = "You have ";
	if(movie.hasWatched) {
		result += "watched ";
	}
	else {
		result += "not seen ";
	}
	result += "\"" + movie.title +"\" - "; 
	result += movie.rating + " stars";
	return result;
}

movieDB.forEach (function(movie) {
	console.log(buildString(movie));
});









