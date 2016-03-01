function centerAll(){
	$(".inner-content").each(function(){
		center($(this));
	});
}

function center(object){
	var parent = object.parent();
	//set margins to parents width-object width / 2
	var margin = (parent.width() - object.outerWidth()) / 2;
	object.css('margin-left',margin+'px');
	object.css('margin-right',margin+'px');
}