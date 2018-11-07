var square; 
var squarearray = [];
var side = 0;
var speed = 0;
function preload() {
	soundFormats('mp3', 'wav');
	background = loadImage("assets/background.png");
	//backsound = loadSound("assets/space.mp3");
	beep = loadSound("assets/beep.mp3");
	//buzz = loadSound("assets/buzz.mp3");
	//begin = loadSound("assets/begin.mp3");
	//end = loadSound("assets/end.mp3");
	shine = loadSound("assets/shine.mp3");
	beep2 = loadSound("assets/beep2.wav")
}
function setup() {
  // put setup code here
  createCanvas(600,600);
  image(background, 0, 0);
  rectMode(CENTER);
  side = 50;
  speed = 2;
  for(var i = 0; i<5;i++){
  	squarearray[i] = new square(random(side, width-side), random(side, height-side), side, speed);

  }
  shine.loop();


}

function draw() {
  // put drawing code here
  //backsound.play();
  shine.amp(0.02);
  //buzz.amp(2);
  beep.amp(1);
  shine.play();
  strokeWeight(0.5);
  stroke(250,255,0);
  for(var i = 0; i < squarearray.length; i++){
  	squarearray[i].move();
  	squarearray[i].display();
  }

}

function square(x,y,s,spd){
	this.x = x;
	this.y = y;
	this.s = s;
	this.spd = spd;
	this.r = 0;
	this.rs = 2;
	this.move = function(){
		this.y += this.spd;
		this.x += this.spd;
		this.r += this.rs;
		if (this.y - this.s >= height){
			this.y = -this.s;
		}
		if (this.x - this.s >= width){
			this.x = -this.s;
		}
		if (this.r >= 200){
			this.rs *= -1;
			beep.play();
			fill(250,255,0);
		}
		if (this.r <= 0){
			this.rs *= -1;
			//buzz.play();
			beep2.play();
			fill(250,255,0);
		}
		/*if (this.r > 0 && this.r < 125){
			end.play();
		}*/
		/*if (this.r > 125 && this.r > 250){
			begin.play();
		}*/
	}
	this.display = function(){
		fill(this.r, 0 , 255);
		rect(this.x,this.y,this.s,this.s);

	}

};