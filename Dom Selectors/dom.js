console.log("test");

var button = document.querySelector("button");
var div = document.querySelector(".button-bg");

button.addEventListener("click", function(){
	div.style.width = "200px";
	div.style.height = "50px";
	div.style.background = "purple";
})