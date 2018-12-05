var apikey;
var baseurl;
var cityname;
var wdata;
var weather;
//var conditions = ["Clear", "Clouds", "Rain", "Snow"];
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


function setup() {
  // put setup code here
  input = createInput("");
  input.position(30, 25);
  input.style('width', '150px');
  button = createButton("Enter");
  button.position(190, 25);
  button.mousePressed(userinput);
  createCanvas(800,600);
  background(65,105,225);
  wcside = 50;
  wcspeed = 2;
  for(var i = 0; i<5;i++){ //generating white clouds
  	wcloudarray[i] = new wcloud(random(wcside, width-wcside), random(wcside, height/3), wcside, wcspeed);

  }
  bcside = 50;
  bcspeed = 2;
  for(var i = 0; i<5;i++){ //generating black clouds
  	bcloudarray[i] = new bcloud(random(bcside, width-bcside), random(bcside, height/3), bcside, bcspeed);

  }
  rside = 50;
  rspeed = 2;
  for(var i = 0; i<5;i++){ //generating rain
  	rainarray[i] = new rain(random(300, 500), random(height/3, height), rside, rspeed);

  }
  sside = 50;
  sspeed = 2;
  for(var i = 0; i<5;i++){ //generating snow
  	snowarray[i] = new snow(random(300, 500), random(height/3, height), sside, sspeed);

  }
}


function draw() {
  // put drawing code here
  	//background(65,105,225);
  	if (weather == "Clouds"){
  		for(var i = 0; i < wcloudarray.length; i++){
  			wcloudarray[i].move();
  			wcloudarray[i].display();
  		}
  	}
  	else if (weather == "Rain"){
  		for(var i = 0; i < rainarray.length; i++){
  			rainarray[i].move();
  			rainarray[i].display();
  		}
  		for(var j = 0; j < bcloudarray.length; j++){
  			bcloudarray[j].move();
  			bcloudarray[j].display();
  		}
  	}
  	else if (weather == "Drizzle"){
  		rspeed = 1;
  		for(var i = 0; i < rainarray.length; i++){
  			rainarray[i].move();
  			rainarray[i].display();
  		}
  		for(var j = 0; j < bcloudarray.length; j++){
  			bcloudarray[j].move();
  			bcloudarray[j].display();
  		}
  	}
  	else if (weather == "Snow"){
  		for(var i = 0; i < snowarray.length; i++){
  			snowarray[i].move();
  			snowarray[i].display();
  		}
  		for(var j = 0; j < bcloudarray.length; j++){
  			bcloudarray[j].move();
  			bcloudarray[j].display();
  		}
  	}

}


function gotData(wdata){ //callback function from loadJSON
	console.log(wdata);
	weather = wdata.weather[0].main;
	console.log(weather);
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
		fill(255);
		rect(this.x,this.y,this.s,this.s);

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
		fill(50);
		rect(this.x,this.y,this.s,this.s);

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
			this.y = height/3;
		}
	}
	this.display = function(){
		fill(31, 49, 193);
		rect(this.x,this.y,this.s,this.s);

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
			this.y = height/3;
		}
	}
	this.display = function(){
		fill(117, 133, 255);
		rect(this.x,this.y,this.s,this.s);

	}

};