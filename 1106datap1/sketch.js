var bird;
var textf;

function preload(){
	textf = loadFont("assets/segoescb.ttf");
  bird = loadJSON("assets/birds_antarctica.json");


}

function setup() {
  // put setup code here
  createCanvas(1000,300);
  background(200,0,255);
  textFont(text);
  textSize(20);
  text('Bird of Antarctica', 20, 20);
  fill(255,0,200);
  strokeWeight(3);
  stroke(0,90,255);
  for (var i = 0; i < bird.birds.length; i++){
    var members = bird.birds[i].members.length;
    //print(bird.birds[i].members.length);
    var family = bird.birds[i].family;
    //print(family);
    text(family, 30*i*3, 50);
    rect(30*i*3, 60, 50, members*10);
  }
}

function draw() {
  // put drawing code here
}
