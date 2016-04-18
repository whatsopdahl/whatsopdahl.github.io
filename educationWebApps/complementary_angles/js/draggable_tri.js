$( document ).ready(function(){
	canvasApp();
	$(".success,.fail").hide();
});

function canvasApp() {
	
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');

	init();

	var dragging;
	var radius = 4;
	var lineWidth = 3;
	var mousePos;
	var dragHoldPos;
	var dragIndex;

	var vertexA;
	var vertexB;
	var vertexC;

	var draggableVertices; 

	function init(){
		vertexA = {x:15,y:15};
		vertexB = {x:285,y:285};
		vertexC = {x:15,y:285};

		draggableVertices = [vertexA,vertexB];

		drawTriangle();

		canvas.addEventListener("mousedown", mouseDownListener, false);
	}

	function drawTriangle() {
		ctx.clearRect(0,0,canvas.width,canvas.height);

		ctx.beginPath();
		ctx.lineWidth = lineWidth;
		ctx.moveTo(vertexA.x, vertexA.y);
		ctx.lineTo(vertexC.x, vertexC.y);
		ctx.stroke();

		ctx.lineTo(vertexB.x, vertexB.y);
		ctx.stroke();

		ctx.lineTo(vertexA.x, vertexA.y);
		ctx.stroke();

		drawVertex(vertexA);
		drawVertex(vertexB);

		angleA();
		angleB();
	}

	function drawVertex(coordinates){
		ctx.beginPath();
		ctx.arc(coordinates.x, coordinates.y, radius, 0, 2*Math.PI, false);
		ctx.fillStyle = 'red';
		ctx.fill();
		ctx.stroke();
	}

	//Listener functions
	function mouseDownListener(evt) {
		var bRect = canvas.getBoundingClientRect();
		mousePos = { x: ((evt.clientX - bRect.left)*(canvas.width/bRect.width)),
					 y: ((evt.clientY - bRect.top)*(canvas.height/bRect.height))};

		for (var i = 0; i < draggableVertices.length; i++) {
			if ( hitTest(draggableVertices[i], mousePos) ){ 
				dragging = true;
				dragHoldPos = {	x: (mousePos.x - draggableVertices[i].x),
								y: (mousePos.y - draggableVertices[i].y) };
				dragIndex = i;
			}
		}

		if (dragging) {
			window.addEventListener("mousemove", mouseMoveListener, false);
		}
		canvas.removeEventListener("mousedown", mouseDownListener, false);
		window.addEventListener("mouseup", mouseUpListener, false);

		//code below prevents the mouse down from having an effect on the main browser window:
		if (evt.preventDefault) {
			evt.preventDefault();
		} //standard
		else if (evt.returnValue) {
			evt.returnValue = false;
		} //older IE
		return false;
	}
		
	function mouseUpListener(evt) {
		canvas.addEventListener("mousedown", mouseDownListener, false);
		window.removeEventListener("mouseup", mouseUpListener, false);
		if (dragging) {
			dragging = false;
			window.removeEventListener("mousemove", mouseMoveListener, false);			
		}
	}

	function mouseMoveListener(evt) {
		var minX = radius + lineWidth + 7;
		var maxX = canvas.width - radius - lineWidth - 7;
		var minY = radius + lineWidth + 7;
		var maxY = canvas.height - radius - lineWidth - 7;
		var posX;
		var posY;

		var bRect = canvas.getBoundingClientRect();
		mousePos = { x: ((evt.clientX - bRect.left)*(canvas.width/bRect.width)),
					 y: ((evt.clientY - bRect.top)*(canvas.height/bRect.height))};

		//clamp x and y positions to prevent object from dragging outside of canvas
		posX = mousePos.x - dragHoldPos.x;
		posX = (posX < minX) ? minX : ((posX > maxX) ? maxX : posX);
		posY = mousePos.y - dragHoldPos.y;
		posY = (posY < minY) ? minY : ((posY > maxY) ? maxY : posY);

		//if we are moving A, only move Y. Else, only move x
		if (dragIndex == 0) {
			draggableVertices[dragIndex].y = posY;
		} else {
			draggableVertices[dragIndex].x = posX;
		}

		drawTriangle();
	}

	function hitTest(vertex, m) {
		var dx;
		var dy;
		dx = m.x - vertex.x - lineWidth;
		dy = m.y - vertex.y - lineWidth;
		
		//a "hit" will be registered if the distance away from the center is less than the radius of the circular object		
		return (dx*dx + dy*dy < (radius+lineWidth)*(radius+lineWidth));
	}

	function angleA(){
		var angle = 180*(Math.atan( (vertexB.x-vertexC.x)/(vertexC.y - vertexA.y) ))/Math.PI;
		ctx.font = "18px Arial";
		ctx.fillStyle = 'black';
		ctx.fillText(angle.toFixed(2)+"\xB0", vertexA.x + 5 , vertexA.y + ( (vertexC.y - vertexA.y)/3 ));
		ctx.stroke();

		ctx.fillText("A", vertexA.x+7, vertexA.y);
		ctx.stroke();
	} 

	function angleB(){
		var angle = 180*(Math.atan( (vertexC.y-vertexA.y)/(vertexB.x - vertexC.x) ))/Math.PI;
		ctx.font = "18px Arial";
		ctx.fillStyle = 'black';
		ctx.fillText(angle.toFixed(2)+"\xB0", vertexB.x-( (vertexB.x-vertexC.x)/3 ), vertexB.y -5 );
		ctx.stroke();

		ctx.fillText("B", vertexB.x, vertexB.y-7);
		ctx.stroke();	
	}
}