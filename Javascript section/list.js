var todos = [];

var input = prompt("What would you like to do?");




while(input !== "quit") {
if(input === "list"){
	listTodos();
}
else if(input === "new"){
	addTodo();	
}
else if (input === "delete") {
deleteToDo();	
}

input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");

function listTodos(){

	console.log("**********");
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("**********");
}
	


function addTodo() {
	var newToDo = prompt("Enter a new to do.");
	todos.push(newToDo);
	console.log("Added Todo");
}

function deleteToDo() {
	var removed = prompt("Which one would you like to delete?");
	todos.splice(removed,1);
	console.log("Deleted To Do"); 
}