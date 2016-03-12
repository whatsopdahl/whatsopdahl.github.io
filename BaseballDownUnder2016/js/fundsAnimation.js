$( document ).ready(function(){
	//define Images
	var image = new Image();
	image.src= "img/worldMap.png";
	var plane = new Image();
	plane.src="img/Airplane.png";
	var canvas = this.getElementById('fundsAnimation');
	$bg = $('#fundsAnimation').parent();
	var ctx = canvas.getContext("2d");
	//variables dealing with funds
	var raised = 700;
	var percent = raised/5298;
	var length = 373.162;
	var destination = percent * length;
	
	image.onload = function(){
		canvas.height = this.height;
		canvas.width= this.width;	
		$bg.width(this.width+'px');
		center($bg);
	};
	
	plane.onload = function() {
		//init coordinates
		var location = {
			x:-40,
			y:-40
		};	ctx.stroke();
		var circle = {
			x:length,
			y:0,
			radius:50
		};
		ctx.save();
		ctx.translate(70,60);
		ctx.rotate(.3132761807);
		//draw initial plane
		drawPlane(this, location, ctx, canvas);
		//draw initial circle
		drawCircle(circle, ctx, canvas);

		var startTime = (new Date()).getTime();
		var linearSpeed = 75;
	
		animate(plane, circle, location, destination, ctx, canvas, startTime, linearSpeed);

		$container = $('#funds-raised-container');
		$container.width(image.width+'px');
		center($container);
		$fundsRaised = $('#funds-raised');
		$fundsRaised.width('0px');
		var width = percent * image.width;

		$fDisplay = $('#funds-display');

		$fundsRaised.animate({
			width: width+'px'
		},(percent*5100), function(){});
	}
});

function drawPlane(plane, location, ctx, canvas){
	ctx.drawImage(plane, location.x, location.y, 80, 80);
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(location.x+40, location.y+40);
	ctx.setLineDash([2,3]);
	ctx.stroke();
};

function animate(plane, circle, location, destination, ctx, canvas, startTime, linearSpeed){
    reqAnimFrame = window.mozRequestAnimationFrame    ||
           window.webkitRequestAnimationFrame ||
           window.msRequestAnimationFrame     ||
           window.oRequestAnimationFrame
           ;

    // update
    var time = (new Date()).getTime() - startTime;

    // pixels / second
    var newX = linearSpeed * time / 1000;
    var radius = 50 - (linearSpeed * time / 1000)/2;

    if(newX < destination && radius > 3) {
    	location.x = newX - 40;
    	circle.radius = radius;

	   	// clear
		ctx.restore();
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
	    ctx.save();
	    ctx.translate(70,60);
	    ctx.rotate(.3132761807);

	    drawPlane(plane, location, ctx, canvas);
	   	drawCircle(circle, ctx, canvas);

	    // request new frame
	    reqAnimFrame(function() {
	      animate(plane, circle, location, destination, ctx, canvas, startTime, linearSpeed);
	    });
	} else if (newX < destination && radius <= 3){
    	location.x = newX - 40;

	   	// clear
		ctx.restore();
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
	    ctx.save();
	    ctx.translate(70,60);
	    ctx.rotate(.3132761807);

	    drawPlane(plane, location, ctx, canvas);
	   	drawCircle(circle, ctx, canvas);

	    // request new frame
	    reqAnimFrame(function() {
	      animate(plane, circle, location, destination, ctx, canvas, startTime, linearSpeed);
	    });
	} else if (radius > 3 && newX >= destination){
    	circle.radius = radius;

	   	// clear
		ctx.restore();
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
	    ctx.save();
	    ctx.translate(70,60);
	    ctx.rotate(.3132761807);

	    drawPlane(plane, location, ctx, canvas);
	   	drawCircle(circle, ctx, canvas);

	    // request new frame
	    reqAnimFrame(function() {
	      animate(plane, circle, location, destination, ctx, canvas, startTime, linearSpeed);
	    });
	}
};

function drawCircle(circle, ctx, canvas) {
	ctx.beginPath();
	ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke();
};