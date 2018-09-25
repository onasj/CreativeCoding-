int radius = 200; //radius of circle
float xc; // x coordinate of circle
float yc; // y coordinate of circle
int xcdirection = 1; 
int ycdirection = 1;
int capturetime; //time limit
float xcspeed = 1;//circle speed
float ycspeed = 1;
float xs, ys; // square coordinates
int xsdirection = 1;//square direction
int ysdirection = 1; 
float xsspeed = 1;//square speed
float ysspeed = 1;
int side = 200; //sideof square
float xt1, yt1, xt2, yt2, xt3, yt3;
float xtspeed = 1;
float ytspeed = 1;
int xtdirection = 1;
int ytdirection = 1;

void setup(){
  size(700, 600);
  stroke(242, 87, 203);
  strokeWeight(10);
  xc = random(0,width);
  yc = random(0,height);
  xs = random(0,width-side);
  ys = random(0,height-side);
  xt1 = 160;
  yt1 = 10;
  xt2 = 40;
  yt2 = 140;
  xt3 = 280;
  yt3 = 140;
  capturetime = millis();
  
}

void draw(){
  background(126, 172, 252);
  xc = xc + (xcspeed*xcdirection);
  yc = yc + (ycspeed*ycdirection);
  xs = xs + (xsspeed*xsdirection);
  ys = ys + (ysspeed*ysdirection);
  xt1 = xt1 + (xtspeed*xtdirection);
  yt1 = yt1 + (ytspeed*ytdirection);
  xt2 = xt2 + (xtspeed*xtdirection);
  yt2 = yt2 + (ytspeed*ytdirection);
  xt3 = xt3 + (xtspeed*xtdirection);
  yt3 = yt3 + (ytspeed*ytdirection);
  if (xc >= width || xc <= 0){
    xcdirection *=-1;//make it go opposite direction if the sides are reached
  }
  if (yc >= height || yc <= 0){
    ycdirection *=-1;//make it go opposite direction if the bottom or top is reached
  }
  if (xs+side >= width || xs <= 0){
    xsdirection *=-1;   
  }
  if (ys+side >= height || ys <= 0){
    ysdirection *=-1;   
  }
  if (yt3 >= height || yt1 <= 0){
    ytdirection *=-1;  
  }
  if (xt3 >= width || xt2 <= 0){
    xtdirection *=-1;
  }
  noFill();
  int mytime = millis();
  int time = mytime - capturetime;
  if (time < 15000){
    ellipse(xc, yc, radius, radius);
    rect(xs, ys, side, side);
    triangle(xt1, yt1, xt2, yt2, xt3, yt3);
  }
  else if (radius > 0 && time > 15000){
    println("time's up");
    background(255,0,127);
    fill(255,0,127);
  }
  
}

void mousePressed(){
  float circlerange = dist(xc, yc, mouseX, mouseY);
  float squarerange = dist(xs, ys, mouseX, mouseY);
  float trianglerange = dist(xt1, (yt1+50), mouseX, mouseY);
  if (circlerange <= radius){
    xc = random(0, width);//randomize location
    yc = random(0, height);//randomize location
    xcspeed += 0.60;//speed up circle
    ycspeed += 0.60;
    radius -=20;//shrink circle
     
  }
  if (squarerange <= radius){
    xs = random(0, width);//randomize location
    ys = random(0, height);
    xsspeed += 0.60;//speed up square
    ysspeed += 0.60;
    side -= 25;//shrink square
    
  }
  if (trianglerange <= 100){
    xtspeed += 0.60;//increasing speed of triangle
    ytspeed += 0.60;
    xt2 += 10;//shrinking triangle
    xt3 -= 10;
    yt2 -= 10;
    yt3 -= 10;
    yt1 += 10;
  }
}
