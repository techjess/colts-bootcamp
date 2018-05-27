// check off specific to dos by clicking

$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");  
});

//click on the X to delete To Do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();

});


$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new to do text from input
		var todoText = $(this).val();
		$(this).val("");

		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");

	}
});

$("#toggle-input").click(function(){
	$("input[type='text']").fadeToggle();
});