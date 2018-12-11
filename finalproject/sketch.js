var apikey;
var baseurl;
var cityname;
var wdata;
var weather;
var weight;
var temperature;
var fahrenheit = 0;
//var conditions = ["Clear", "Clouds", "Rain", "Snow", "Mist", "Fog", "Haze"];
var wcloudarray = [];
var wcside;
var wcspeed = 0;
var bcloudarray = [];
var bcside;
var bcspeed = 0;
var rainarray = [];
var rside;
var rspeed = 0;
var snowarray = [];
var sside;
var sspeed = 0;
var rrainarray = [];
var rrside;
var rrspeed = 0;
var rsnowarray = [];
var rsside;
var rsspeed = 0;
var imagestate = 0;
var w = 6; //default for amount of weather
var c = 6;


function preload() {
	cloudimage = loadImage("assets/cloud.png");
	bcloudimage = loadImage("assets/bcloud.png");
	rainimage = loadImage("assets/rain.png");
	snowimage = loadImage("assets/snow.png");
	skullimage = loadImage("assets/skull.png");
	dayimage = loadImage("assets/day.png");
	nightimage = loadImage("assets/night.jpg");
	sunimage = loadImage("assets/sun.png");
	moonimage = loadImage("assets/moon.png");
	//frames
	skull1 = loadImage("assets/skull1.png");
	skull2 = loadImage("assets/skull2.png");
	skullsnow1 = loadImage("assets/skullsnow1.png");
	skullrain1 = loadImage("assets/skullrain1.png");4
	skullsnow2 = loadImage("assets/skullsnow2.png");
	skullrain2 = loadImage("assets/skullrain2.png");
  //sound for rain and snow;
  rainsound = loadSound("assets/rainsound.mp3");
  snowsound = loadSound("assets/snowsound.mp3");


}

function setup() {
  // put setup code here
  imageMode(CENTER);
  input = createInput("");
  input.position(30, 25);
  input.style('width', '150px');
  button = createButton("Enter");
  button.position(190, 25);
  button.mousePressed(userinput);
  createCanvas(800,600);
  background(65,105,225);
}


function draw() {
  // put drawing code here
  	imageMode(CENTER);
  	//background(65,105,225);
  	//image(skullimage, width/2, height*(5/12), 400, 400);
  	var count = frameCount % 10;
  	if (count == 0){
    	imagestate++;
    	if (imagestate > 1){
      		imagestate=0;
    	}
  	}
  	if (hour() < 18){
  		image(dayimage, width/2, height/2, 800, 600);
  		push();
  		translate(150,200);
  		rotate(frameCount/10);
  		image(sunimage, 150, 200, 250, 250);
  		pop();
  	}
  	if (hour() < 6){
  		image(nightimage, width/2, height/2, 800, 600);
  		push();
  		translate(150,200);
  		rotate(frameCount/10);
  		image(moonimage, 0, 0, 250, 250);
  		pop();
  	}
 	if (hour() > 18){
  		image(nightimage, width/2, height/2, 800, 600);
  		push();
  		translate(150,200);
  		rotate(frameCount/10);
  		image(moonimage, 0, 0, 250, 250);
  		pop();
  	}
  	if (weather == "Clear"){
  		skull();
  	}
  	else if (weather == "Clouds"){
  		for(var i = 0; i < wcloudarray.length; i++){
  			wcloudarray[i].move();
  			wcloudarray[i].display();
  			skull();
  		}
  	}
  	else if (weather == "Haze" || weather == "Fog" || weather == "Mist"){
  		for(var i = 0; i < wcloudarray.length; i++){
  			wcloudarray[i].move();
  			wcloudarray[i].display();
  			skull();
  		}
  	}
  	else if (weather == "Rain"){
      //rainsound.play();
  		for(var j = 0; j < bcloudarray.length; j++){
  			bcloudarray[j].move();
  			bcloudarray[j].display();
  			skullrain();
  		}
  		for(var i = 0; i < rainarray.length; i++){
  			rainarray[i].move();
  			rainarray[i].display();
  		}
  		for(var k = 0; k < rrainarray.length; k++){
  			rrainarray[k].move();
  			rrainarray[k].display();
  		}
  	}
  	else if (weather == "Drizzle"){
      //rainsound.play();
  		for(var j = 0; j < bcloudarray.length; j++){
  			bcloudarray[j].move();
  			bcloudarray[j].display();
  			skullrain();
  		}
  		for(var i = 0; i < (rainarray.length)/3; i++){
  			rainarray[i].move();
  			rainarray[i].display();
  		}
  		for(var k = 0; k < rrainarray.length/3; k++){
  			rrainarray[k].move();
  			rrainarray[k].display();
  		}
  	}
  	else if (weather == "Snow"){
      //snowsound.play();
  		for(var j = 0; j < bcloudarray.length; j++){
  			bcloudarray[j].move();
  			bcloudarray[j].display();
  			skullsnow();
  		}
  		for(var i = 0; i < snowarray.length; i++){
  			snowarray[i].move();
  			snowarray[i].display();
  		}
  		for(var k = 0; k < rsnowarray.length; k++){
  			rsnowarray[k].move();
  			rsnowarray[k].display();
  		}
  	}
}


function gotData(wdata){ //callback function from loadJSON
	console.log(wdata);
	weather = wdata.weather[0].main;
	console.log(weather);
	weight = wdata.weather[0].description;
	console.log(weight);
  temperature = wdata.main.temp;
  fahrenheit = (temperature - 273.15)*(9/5) + 32;
  console.log(fahrenheit);
	weightsplit = splitTokens(weight, " ");
	for (var i = 0; i < weightsplit.length; i++){
  		if ("light" == weightsplit[i]){
  			w -= 3;
  		}
  		else if ("heavy" == weightsplit[i]){
  			w += 4;
  		}
  	}
  	if (weather == "Haze" || weather == "Fog" || weather == "Mist"){
  		c = c*2;

  	}
  wcside = 400;
	wcspeed = 2;
	for(var i = 0; i<c;i++){ //generating white clouds
	  wcloudarray[i] = new wcloud(random(wcside, 1200), random(0, height), wcside, wcspeed);

	}
	bcside = 400;
	bcspeed = 2;
	for(var i = 0; i<6;i++){ //generating black clouds
	  bcloudarray[i] = new bcloud(random(bcside, 1200), random(0, height), bcside, bcspeed);

	}
	rside = 60;
	rspeed = 2;
	for(var i = 0; i<w;i++){ //generating rain
	  rainarray[i] = new rain(random(300, 350), random(250, height), rside, rspeed);
	}
	rrside = 60;
	rrspeed = 2;
	for(var i = 0; i<w;i++){ //generating rain
	  rrainarray[i] = new rain(random(480, 530), random(250, height), rrside, rrspeed);

	}
	sside = 40;
	sspeed = 2;
	for(var i = 0; i<w;i++){ //generating snow
	  snowarray[i] = new snow(random(300, 350), random(270, height), sside, sspeed);

	}
	rsside = 40;
	rsspeed = 2;
	for(var i = 0; i<w;i++){ //generating snow
	  rsnowarray[i] = new snow(random(480, 530), random(270, height), rsside, rsspeed);

	}
  cn = createP('Location:'+ cityname);
  cn.position(80,130);
  cn.style('outline-style','double');
  cn.style('outline-color','#200');
  cn.style('outline-width','thick');
  cn.style('text-decoration','overline');
  cn.style('font-style', 'italic');
  wn = createP('Weather:'+ weight);
  wn.position(80,160);
  wn.style('outline-style','double');
  wn.style('outline-color','#200');
  wn.style('outline-width','thick');
  wn.style('text-decoration','overline');
  wn.style('font-style', 'italic');
  tn = createP('Temp:'+ int(fahrenheit));
  tn.position(80,190);
  tn.style('outline-style','double');
  tn.style('outline-color','#200');
  tn.style('outline-width','thick');
  tn.style('text-decoration','overline');
  tn.style('font-style', 'italic');


}


function userinput(){
	cityname = input.value();
	console.log(cityname);
	baseurl = "http://api.openweathermap.org/data/2.5/weather?";
  	apikey = "72755bc467c1d53c659735f90fec6c06";
	url = baseurl + "q=" + cityname + "&appid=" + apikey;
	console.log(url);
	input.value("");
	wdata = loadJSON(url, gotData);

}


function wcloud(x,y,s,spd){
	this.x = x;
	this.y = y;
	this.s = s;
	this.spd = spd;
	this.move = function(){
		this.x += this.spd;
		if (this.x - this.s >= width){
			this.x = -this.s;
		}

	}
	this.display = function(){
		image(cloudimage,this.x,this.y,this.s,250);

	}

};

function bcloud(x,y,s,spd){
	this.x = x;
	this.y = y;
	this.s = s;
	this.spd = spd;
	this.move = function(){
		this.x += this.spd;
		if (this.x - this.s >= width){
			this.x = -this.s;
		}

	}
	this.display = function(){
		image(bcloudimage,this.x,this.y,this.s,250);

	}

};


function rain(x,y,s,spd){
	this.x = x;
	this.y = y;
	this.s = s;
	this.spd = spd;
	this.move = function(){
		this.y += this.spd;
		if (this.y - this.s >= height){
			this.y = 250;
		}
	}
	this.display = function(){
		image(rainimage,this.x,this.y,this.s,80);

	}

};

function snow(x,y,s,spd){
	this.x = x;
	this.y = y;
	this.s = s;
	this.spd = spd;
	this.move = function(){
		this.y += this.spd;
		if (this.y - this.s >= height){
			this.y = 270;
		}
	}
	this.display = function(){
		image(snowimage,this.x,this.y,this.s,120);

	}

};

function skull(){
  switch(imagestate){
    case 0:
      image(skull1, width/2, height*(5/12), 400, 400);
      break;
    case 1:
      image(skull2, width/2, height*(5/12), 400, 400);
      break;
  }
}

function skullrain(){
  switch(imagestate){
    case 0:
      image(skullrain1, width/2, height*(5/12), 400, 400);
      break;
    case 1:
      image(skullrain2, width/2, height*(5/12), 400, 400);
      break;
  }
}

function skullsnow(){
  switch(imagestate){
    case 0:
      image(skullsnow1, width/2, height*(5/12), 400, 400);
      break;
    case 1:
      image(skullsnow2, width/2, height*(5/12), 400, 400);
      break;
  }
}