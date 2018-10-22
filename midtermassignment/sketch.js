var x = 0;
var y = 0;
var xd = 1;
var yd = 1;
var d = 0;
var imagestate = 0;
var counter = 0; 
var text;

function preload() {
	//myImage = loadImage("asset/testfile.png");
	//anima = loadImage("asset/resize.png");
  img1 = loadImage("asset/frame1.png"); //animated frames
  img2 = loadImage("asset/frame2.png");
  img3 = loadImage("asset/frame3.png");
  b1 = loadImage("asset/background1.jpg"); //changing backgrounds
  b2 = loadImage("asset/background2.jpg");
  b3 = loadImage("asset/background3.jpg");
  b4 = loadImage("asset/background4.jpg");
  b5 = loadImage("asset/background5.jpg");
  text = loadFont("asset/segoescb.ttf");

}

function setup() {
  // put setup code here
  createCanvas(600,600);
  //textFont(text); 
  //textSize(100);
}

function draw() {
  // put drawing code here
  //image(myImage, 0, 0);
  //background(100);
  //image(b1, width/2, height/2);
  //image(anima, x, y); original test code
  var count = frameCount % 10; //animation code taken from class provided by the professor
  if (count == 0){
    imagestate++;
    if (imagestate > 2){
      imagestate=0;
    }
  }
  if (counter == 0){ //counter for stages of the background
      image(b1, width/2, height/2);
    }
    if (d<50 && mouseIsPressed){
      x = random(50, width-50);
      y = random(50, width-50);
      counter += 1;
      if (counter == 1){
        image(b4, width/2, height/2);
      }
      else if (counter == 2){
        image(b3, width/2, height/2);
      }
      else if (counter == 3){
        image(b2, width/2, height/2);

      }    
  }
  drawsprite(); //sprite animation
  run(10); //moving the animation
}

function drawsprite(){ //sprite animation code taken from class provided by the professor
  switch(imagestate){
    case 0:
      image(img1, x, y, 100, 100);
      break;
    case 1:
      image(img2, x, y, 100, 100);
      break;
    case 2:
      image(img3, x, y, 100, 100);
  }
}

function run(s){ //moving the sprite animation
  //bounce(1.2, 1.8);
  if (counter == 1){ //changing the background depending on the conditions
    image(b4, width/2, height/2);
    bounce(2.2, 2.8);
  }
  else if (counter == 2){
    image(b3, width/2, height/2);
    bounce(3.2, 3.8);
  }
  else if (counter == 3){
    image(b2, width/2, height/2);
    bounce(4.2, 4.8);
  }
  else if (counter >= 4){
    image(b1, width/2, height/2);
    x = width-50;
    y = 300;
    for (var i = 0; i < 100; i++){
      if (i%2==0){
        image(b1, width/2, height/2);
      }
      else {
        image(b5, width/2, height/2);
      }
    }

  }
  imageMode(CENTER);
  noStroke();
  fill(165,42,42);
  x = constrain(x, 50, width-50); //constraining the sprite within the canvas
  y = constrain(y, 50, height-50);
  drawsprite();
  d = int(dist(x, y, mouseX, mouseY));
  //bounce(1.2, 1.8);
  /*if (d<50 && mouseIsPressed){
    x = random(50, width-50);
    y = random(50, width-50);
  }*/
  if (d<80 && mouseX < x && mouseY == y){ //code for spirte running away from mouse
    x = x + s;
  }
  else if (d<80 && mouseX > x && mouseY == y){
    x = x - s;
  }
  else if (d<80 && mouseX == x && mouseY < y){
    y = y + s;
  }
  else if (d<80 && mouseX == x && mouseY > y){
    y = y - s;
  }
  else if (d<80 && mouseX < x && mouseY < y){
    x = x + s;
    y = y + s;
  }
  else if (d<80 && mouseX < x && mouseY > y){
    x = x + s;
    y = y - s;
  }
  else if (d<80 && mouseX > x && mouseY > y){
    x = x - s;
    y = y - s;
  }
  else if (d<80 && mouseX > x && mouseY < y){
    x = x - s;
    y = y + s;
  }

}

function bounce(xs,ys){ //code for bouncing square adapted from processing.org https://processing.org/examples/bounce.html
  x = x+xs*xd;
    y = y+ys*yd;
  if ((x-50<=0) || (x+50>=width)){
      xd=xd*-1;
    }
    if (d<80){
      if (x-50<=mouseX || x+50>=mouseX){
        xd=xd*-1;
      }
    }
  if ((y-50<=0) || (y+50>=height)){
      yd=yd*-1;
    }
    if (d<80){
      if (y-50<=mouseY || y+50>=mouseY){
        yd=yd*-1;
      }
    }
}

