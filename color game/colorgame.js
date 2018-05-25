var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");


colorDisplay.textContent = pickedColor;


resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(6);
	//pick a new random color
	pickedColor = pickColor();
	//change display color to matched picked
	colorDisplay.textContent = pickedColor;
	//change the color of the 
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
	this.textContent = "New Colors";
});


for(var i = 0; i < squares.length; i ++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add event listeners
	squares[i].addEventListener("click",function(){
		//grab color of picked square
		var clickedColor = this.style.backgroundColor;
		//compare color to picked color
		if (clickedColor === pickedColor) {
			h1.style.backgroundColor = clickedColor;
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			resetButton.textContent = "Play Again?";
		} else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	}); 
}


function changeColors(color) {
	//loop through the 
	for(var i =0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num){
	//make array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}

	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	var r  = Math.floor(Math.random() * 256);
	//pick green 
	var g  = Math.floor(Math.random() * 256);
	//pick blue
	var b  = Math.floor(Math.random() * 256);
	var string = "rgb(" + r + ", " + g + ", " + b + ")";
	return string;
	// return "rgb(" + r + ", " + g ", " + b + ")";

}





















