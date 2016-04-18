$( document ).ready(function(){
	$(".success,.fail").hide();

	drawFigure();
});

function drawFigure() {
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");

	var height = canvas.height;
	var width = canvas.width;
	var labels = ["a","b",'c','d','e','f','g','h'];
	var consts = [5, "5\u221A//2", 4, 3];

	var intersect = [ 	{x:Math.round(width/5),
						y:Math.round(height/5)},
						{x:Math.round(width/5),
						y:Math.round(4*height/5)}, 
						{x:Math.round(4*width/5),
						y:Math.round(4*height/5)}]

	ctx.moveTo(0,0);
	ctx.lineWidth = 3;
	ctx.lineTo(width, height);
	ctx.stroke();

	ctx.moveTo(Math.round(width/5),0);
	ctx.lineTo(Math.round(width/5), height);
	ctx.stroke();

	ctx.moveTo(0, Math.round(4*height/5));
	ctx.lineTo(width, Math.round(4*height/5));
	ctx.stroke();

	ctx.moveTo(Math.round(4*width/5),height);
	ctx.lineTo(Math.round(4*width/5),0);
	ctx.stroke();

	ctx.moveTo(intersect[0].x,intersect[0].y);
	ctx.lineTo(width,0);
	ctx.stroke();

	ctx.moveTo(intersect[1].x,intersect[1].y-10);
	ctx.lineTo(intersect[1].x+10,intersect[1].y-10);
	ctx.stroke();
	ctx.lineTo(intersect[1].x+10,intersect[1].y);
	ctx.stroke();

	ctx.moveTo(intersect[2].x,intersect[2].y-10);
	ctx.lineTo(intersect[2].x+10,intersect[2].y-10);
	ctx.stroke();
	ctx.lineTo(intersect[2].x+10,intersect[2].y);
	ctx.stroke();

	ctx.moveTo(intersect[0].x,intersect[0].y);
	ctx.lineWidth = 1;
	ctx.arc(intersect[0].x,intersect[0].y, 10, 3*Math.PI/2, Math.PI/4);
	ctx.stroke();

	ctx.moveTo(intersect[0].x,intersect[0].y);
	ctx.arc(intersect[0].x,intersect[0].y, 15, 3*Math.PI/2, Math.PI/4);
	ctx.stroke();

	ctx.lineWidth=3;
	var adj = (3*width/5);
	var hyp = adj/Math.sin(3*Math.PI/8);
	intersect.push({x:Math.round(4*width/5),
					y:Math.round(Math.sqrt(Math.pow(hyp,2) - Math.pow(adj,2)))-height/5});

	var l = hyp*Math.sin(Math.PI/2-(3*Math.PI/8));
	intersect.push({x:Math.round(width/5+(l*Math.SQRT2/2)),y:Math.round(height/5+(l*Math.SQRT2)/2)});

	ctx.moveTo(intersect[3].x,intersect[3].y);
	ctx.lineTo(intersect[4].x,intersect[4].y);
	ctx.stroke();

	ctx.moveTo(intersect[4].x-Math.sqrt(50),intersect[4].y-Math.sqrt(50));
	ctx.lineTo(intersect[4].x,intersect[4].y-Math.sqrt(200));
	ctx.stroke();
	ctx.lineTo(intersect[4].x+Math.sqrt(50),intersect[4].y-Math.sqrt(50));
	ctx.stroke();

	//add labels
	ctx.fillText('a',intersect[0].x+7, intersect[0].y+40);

	ctx.fillText('b',intersect[2].x-40,intersect[2].y-7);
	ctx.fillText('c',intersect[2].x-20,intersect[2].y-40);

	ctx.fillText('d',intersect[0].x-20,intersect[0].y-40);
	ctx.fillText('e',intersect[3].x-40,intersect[3].y+20);
	ctx.fillText('f',intersect[3].x-20,intersect[3].y+40);
	ctx.fillText('g',intersect[3].x+7,intersect[3].y+20);

	ctx.fillText('\u221A2/2', Math.round(width/2)-20, intersect[2].y+20);

}