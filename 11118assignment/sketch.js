//var object1;
//var object2;
var ball1;
var ball2;
var ball3;

function setup() {
  // put setup code here
  createCanvas(500,500);
  //object1 = new myclass(100,100);
  //object2 = new myclass(200,200);
  //object1.display();
  //object2.display();
  ball1 = new myclass(100,100, 2, 3, 20);
  ball2 = new myclass(200,200, 3, 2, 30);
  ball3 = new myclass(300,300, 2.5, 3.4, 40);

}

function draw(){
	background(100);
	ellipseMode(RADIUS);
	noStroke();
	ball1.display();
	ball1.bounce();
	ball2.display();
	ball2.bounce();
	ball3.display();
	ball3.bounce();

}

function myclass(xpos, ypos, xspeed, yspeed, radius){
	this.x = xpos;
	this.y = ypos;
	this.xs = xspeed;
	this.ys = yspeed;
	this.xd = 1;
	this.yd = 1;
	this.r = radius;
	this.c1 = random(0,255);
	this.c2 = random(0,255);
	this.c3 = random(0,255);

	this.bounce = function(){
		this.x = this.x + this.xs*this.xd;
		this.y = this.y + this.ys*this.yd;

		if (this.x - this.r <= 0 || this.x + this.r >= width){
			this.xd *= -1;
		}
		if (this.y - this.r <= 0 || this.y + this.r >= height){
			this.yd *= -1;
		}

	}

	this.display = function(){
		ellipse(this.x, this.y, this.r, this.r);
		if (this.x + this.r == width || this.x - this.r == 0 || this.y + this.r == height || this.y - this.r == 0){
			fill(this.c1, this.c2, this.c3);

		}
	}

};