
function setup(){
  createCanvas(500,500);
  background(100);
}

function draw(){

	push();
	translate(100,height/2);
	rotate(PI/3);
	rect(0,0,50,50);
	pop();

	push();
	translate(200,height/2);
	rotate(PI/4);
	rect(0,0,50,50);
	pop();

	push();
	translate(300,height/2);
	rotate(PI/5);
	rect(0,0,50,50);
	pop();

	
}