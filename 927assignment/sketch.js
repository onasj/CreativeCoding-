
function setup(){
  createCanvas(400, 600);
}

function draw(){
  background(255,0,0);

  strokeWeight(0);
  translate(width/2, height/2); //location of star
  rotate(10*frameCount); //rotation speed
  stars(0, 0, 800, 13); //the star

}

function star(x, y, length){
  var slength = length/2.3;
  var ny, nx; //vertex coodrinates
  var angle; //angles to draw lines
  beginShape();
  for (angle = 0; angle < 6.28; angle += 1.26) { //makes it run 5 times
  	ny = (length*sin(angle)) + y; //find new vertex through inner angle
    nx = (length*cos(angle)) + x;
    vertex(nx, ny);
    ny = (slength*sin(angle+(0.63))) + y; //find new vertex trhough outer angle
    nx = (slength*cos(angle+(0.63))) + x;
    vertex(nx, ny);
  }
  endShape(CLOSE); //creates 10 vertexes
}

function stars(x, y, length, amount){
	var color1 = [0,230,20,230,230,0,230,0,200,255,180,250,250];//rgb values
	var color2 = [170,0,0,220,0,60,130,120,0,255,0,0,230];
	var color3 = [230,70,220,0,70,230,0,230,0,255,0,135,0];
	var i; //iterations
	var next = length/amount; //sizes
	for (i = 0; i<amount; i+=1){
		fill(color1[i],color2[i],color3[i]);
		star(x, y, length-(i*next));
	}
}