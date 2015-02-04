var Joel = {
	num:'952-232-2201',
	mail:'jngotfredson@gmail.com'
};
var Jenna = {
	num:'563-387-1151',
	mail:'jngotfredson@gmail.com'
};
var Ranum = {
	num:'563-387-1410',
	mail:'ranumdav@luther.edu'
};
function show(id, type) {
	var bubbles = document.querySelectorAll(".bubble");
	var info;
	for (i=0; i<bubbles.length; i++) {
		if (bubbles[i].id==id){
			if (bubbles[i].childNodes) {
				bubbles[i].removeChild(bubbles[i].firstChild);
			}
			var a = document.createElement('a');
			if (id == 'Joel'){
				info = Joel[type];
			}
			else if (id == 'Jenna') {
				info = Jenna[type];
			}
			else {
				info = Ranum[type];
			}
			if (type == 'num') {
				a.href= 'tel:'+info;
			}
			else {
				a.href='mailto:'+info;
			}
			a.innerHTML=info;
			bubbles[i].appendChild(a);
			bubbles[i].style.visibility='visible';
		}
		else {
			bubbles[i].style.visibility='hidden';
		}
	}

}