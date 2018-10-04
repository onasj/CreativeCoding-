function setup(){
  createCanvas(500,500);
  background(100);
}

function draw(){
	radiusx = mouseX - 100; // distance from x coodinate of object
	radiusy = mouseY - 100; // distance from y coordinate of object
	degree = atan2(radiusy, radiusx); //value for rotating takes input of both x and y
	for(var i = 1; i < 4; i++){
		push();
		translate(i*100, height/2);
		rotate(PI/2*i);
		rotate(degree);
		rect(0, 0, 50, 50);
		pop();

	}
}