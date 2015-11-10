$(document).ready(function(){
	$("#0").addClass("selected");
	initialize();
});
//this initializes the height of the navbar highlighter
function initialize() {
	var highlight = $("#nav-highlighter");
	var selectedOption=$($(".selected")[0]);
	var start = $("#nav-highlighter").position();
	var end = selectedOption.offset();
	highlight.width(selectedOption.width());
	//take the left offset of the end goal and subtract the margin 
	highlight.css("left",end.left+"px");

	//now center the highlihgter vertically
	var parent = $(highlight.parent("div"));
	//1. take 1/2 the parent element's height
	var top=parent.height()/2;
	//2. get 1/2 the highlighter's TOTAL height (height+padding+border)
	top-=(highlight.height()/2);
	top-=parseInt(highlight.css("border-width"));
	top-=parseInt(highlight.css("padding"));
	//set highlight's top
	highlight.css("top", top);
}

function slide(event){
	//unselect all selected elements 
	var current = $(".selected");
	for (var i =0; i< current.length; i++){
		$(current[i]).toggleClass("selected");
	}
	//select the clicked element
	var clicked = $(event.srcElement);
	clicked.toggleClass("selected");
	var highlight = $("#nav-highlighter");

	var end = clicked.offset();
	var animateSlide={'left' : end.left+"px",
						'width' : clicked.width()};

	highlight.animate(animateSlide, {easing: 'swing'});

}
