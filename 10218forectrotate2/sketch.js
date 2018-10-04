
function setup(){
  createCanvas(500,500);
  background(100);
}

function draw(){
	for(var i = 1; i < 4; i++){
		push();
		translate(i*100, height/2);
		rotate(PI/(3*i));
		rect(0, 0, 50, 50);
		pop();

	}
	
}