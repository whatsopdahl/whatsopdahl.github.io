var timeout=false;
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
//on resize is debounced, meaning one we begin resizing the window, we will wait for 75ms before
// we call the adjustNavBar, allowing us to resize after the window is where we want it to be, 
//3rather than every at every resize detected
window.onresize = function(){
	centerAll();
	clearTimeout(timeout);
	timeout = setTimeout(adjustNavHighlighter, 75);
};

adjustNavHighlighter =  function(){
	var current = $(".selected");
	var highlight = $("#nav-highlighter");
	var end = current.offset();
	var animateSlide={'left' : end.left+"px",
						'width' : current.width()};

	highlight.animate(animateSlide, {easing: 'swing'});
};
