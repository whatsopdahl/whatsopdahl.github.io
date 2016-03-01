//the difference between this logo animation and the one used on my main site is that this is written in jQuery, not javascript
$logo=$('#mainLogo');
$newLogo=$('#hoverLogo');
$newLogo.css('display','none');
$newLogo.css('position','absolute');
$link = $logo.parent();
$link.width($logo.width());
$link.width($logo.width());
$link.on('mouseenter',function(){
	$logo.css('display','none');
	$newLogo.css('display','block');
});
$link.on('mouseleave',function(){
	$logo.css('display','block');
	$newLogo.css('display','none');
});
$link.on('click', function(){
	window.location="http://www.whatsopdahl.com";
});
