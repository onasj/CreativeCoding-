function setup() {
	createCanvas(600,600);
	background(0);

}

function draw() {

}

function mousePressed() {
	if(mouseX > width/2 && mouseX < 500){
    background(3,252,75);
  }
  else if(mouseX < width/2 && mouseY > height/2){
    background(3,25,252);
  }
  else if (mouseX < width/2 && mouseY < height/2){
    background(252,94,2);
  }
  else if (mouseX > 500){
    background(0);
  }

}
