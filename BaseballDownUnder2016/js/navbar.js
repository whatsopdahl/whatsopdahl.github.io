$( document ).ready(function() {
		$('nav').css('background-color','rgba(51,51,51,.75)');
});

$( window ).scroll(function(){
	changeHeader = 70;
	if (y() >= changeHeader){
		$('nav').css('background-color','rgba(51,51,51,1)');
	}
	if (y() < changeHeader){
		$('nav').css('background-color','rgba(51,51,51,.75)');
	}
});

y = function() {
	var dur = window.pageYOffset || document.documentElement.scrollTop;
	return dur;
};