var logo=document.getElementById('mainLogo');
var link=logo.parentNode;
var newlogo=document.createElement('img');
newlogo.src='img/logos/whatsOpdahlLogo:hover.png';
newlogo.style.height='50px';
newlogo.style.width='auto';
newlogo.style.display='none';
newlogo.style.position='absolute';
link.appendChild(newlogo);
link.onmouseenter=function(){
	logo.style.display='none';
	newlogo.style.display='block';
};
link.onmouseleave=function(){
	logo.style.display='block';
	newlogo.style.display='none';
};
