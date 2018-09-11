size(720,480);
//rect(200,100,500,400); potential base
background(127, 176, 255);
stroke(0, 96, 252);//lineblue
strokeWeight(4);
beginShape();//another base
vertex(250,120);//upperl
vertex(230,330);//lowerl
vertex(200,380);//cheek
vertex(450,450);//chinl
vertex(650,380);//chinr
vertex(620,120);//ulr
vertex(250,120);//start
endShape();//headshape
noFill();
ellipse(290,220,150,150);//leftinner
stroke(252, 121, 248);//linepink
ellipse(293,220,170,170);//leftouter
stroke(0, 96, 252);//lineblue
rect(390,225,40,10);//frame
stroke(252, 121, 248);//linepink
ellipse(515,230,120,120);//rightinner
stroke(0, 96, 252);//lineblue
ellipse(515,230,133,133);//rightouter
strokeWeight(1);
fill(252, 121, 248);
triangle(280,200,340,180,340,190);//eyebrowl
triangle(560,220,500,190,500,200);//eyebrowr
strokeWeight(6);
beginShape();//nose/lips
vertex(405,240);
vertex(390,290);//nosebri
vertex(400,300);//nos
vertex(350,340);//upperlip
vertex(490,340);//lip
vertex(395,355);//lowerlip
endShape();
beginShape();//chinshadowline
strokeWeight(2);
vertex(395,357);
vertex(395,425);
vertex(517,425);
endShape();
fill(73, 93, 183);
beginShape();//ears
strokeWeight(5);
vertex(620,255);
vertex(680,225);
vertex(700,265);
vertex(650,355);
vertex(640,345);
endShape();
strokeWeight(3);
beginShape();//inner ear
fill(229, 167, 217);
vertex(635,260);
vertex(675,245);
vertex(685,255);
vertex(645,345);
endShape();
beginShape();//hairleft
fill(122, 42, 214);
strokeWeight(2);
vertex(480,120);
vertex(500,50);
vertex(450,20);
vertex(250,70);
vertex(220,130);
vertex(240,170);
vertex(260,180);
endShape();
//hair right
stroke(166, 97, 244);
strokeWeight(10);
//horizontal
line(510,50,560,35);
line(505,70,570,55);
line(500,90,580,75);
line(495,110,590,95);
//vertical
line(580,30,650,220);
line(600,30,670,200);
line(620,50,680,180);
//triangle
line(510,120,630,230);
line(530,110,620,190);
line(560,100,610,150);
//eyeleft
strokeWeight(2);
stroke(12, 0, 255);
fill(12, 0, 255);
line(280,220,340,210);
ellipse(330,220,20,20);
//eyeright
line(500,220,560,230);
ellipse(550,235,20,20);
