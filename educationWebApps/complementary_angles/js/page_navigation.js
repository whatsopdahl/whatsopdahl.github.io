function nextPage(){
	console.log(window.location.href);
	var pageNum = extract(window.location.href);
	console.log(pageNum);
	var next = pageNum + 1; 
	window.location.href = "page_"+next+".html";
}

function prevPage(){

	var pageNum = extract(window.location.href);
	var prev = pageNum - 1;
	window.location.href = "page_"+prev+".html";
}

function extract(URL){
	var elems = URL.split('/');
	var intStr = elems[elems.length-1].split("_");
	return parseInt(intStr[intStr.length-1]);
}