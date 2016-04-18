$(document).ready(function(){
	$(".success,.fail").hide();

	var triangle = { A:{x:15, y:15},
					 B:{x:285, y:285},
					 C:{x:15, y:285}};

	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.font = "18px Arial";
	ctx.lineWidth = 3;

	drawTriangle(triangle,ctx);

	labelSides(triangle,ctx);
	labelAngles(triangle,ctx);
});

function drawTriangle(triangle, ctx) {
	ctx.lineWidth = '3px';
	ctx.moveTo(triangle.A.x, triangle.A.y);
	ctx.lineTo(triangle.C.x, triangle.C.y);
	ctx.stroke();

	ctx.lineTo(triangle.B.x, triangle.B.y);
	ctx.stroke();

	ctx.lineTo(triangle.A.x, triangle.A.y);
	ctx.stroke();
}

function labelSides(t,ctx){
	var x;
	var y;
	//line opposite gamma
	x = 15 + Math.round((t.B.x - t.A.x)/2)
	y = Math.round((t.B.y-t.A.y)/2) - 15;
	ctx.fillText("c",x,y);
	ctx.stroke();
	//side opposite beta
	x = t.C.x - 15;
	y = Math.round((t.C.y - t.A.y)/2);
	ctx.fillText("b",x,y);
	ctx.stroke();
	//side opposite alpha
	x = Math.round((t.B.x - t.C.x)/2);
	y = t.C.y + 15;
	ctx.fillText("a",x,y);
	ctx.stroke();
}

function labelAngles(t,ctx){
	ctx.moveTo(t.A.x, t.A.y);
	ctx.fillText(unescape('%u03B1'), t.A.x+7, t.A.y +40);
	ctx.stroke();

	ctx.moveTo(t.B.x, t.B.y);
	ctx.fillText(unescape("%u03B2"), t.B.x - 40, t.B.y - 7);
	ctx.stroke();

	ctx.moveTo(t.C.x+10,t.C.y);
	ctx.lineTo(t.C.x+10, t.C.y-10);
	ctx.stroke();
	ctx.lineTo(t.C.x, t.C.y-10);
	ctx.stroke();

	ctx.fillText("A", t.A.x+10, t.A.y);
	ctx.stroke();

	ctx.fillText("B", t.B.x, t.B.y-10);
	ctx.stroke();

	ctx.fillText("C", t.C.x-15, t.C.y+15);
	ctx.stroke();
}