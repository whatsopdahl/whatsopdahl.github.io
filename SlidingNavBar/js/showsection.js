$(document).ready(function(){
	$(".nav-list").children("li").each(function(){
		this.addEventListener("click", show);
	});
	$(".content").each(function(){
		$(this).hide();
	});
});

function show(){
	var _this = $(event.srcElement);
	//get corresponding section
	var section;
	for (var i = 0; i < $(".content").length; i++){
		//if the content pane has the class matching the id of the selected nav bar item,
		//show that content pane
		if ($($(".content")[i]).hasClass(_this.attr("id"))){
			$($(".content")[i]).toggleClass("selected");
		}
	}
}