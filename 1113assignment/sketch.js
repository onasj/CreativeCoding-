var url;
var baseUrl;
var data;
//var breed = [];
var font;
var c = 69;
var x = 0;
var y = 110;
var amountimages = 0;
var allamount = [];
var breedimages;
var breed;
var index = 0;
var dogbreed = ["affenpinscher","african","airedale","akita","appenzeller","basenji","beagle","bluetick","borzoi","bouvier","boxer","brabancon","briard","bulldog","bullterrier","cairn","cattledog","chihuahua","chow","clumber","cockapoo","collie","coonhound","corgi","cotondetulear","dachshund","dalmatian","dane","deerhound","dhole","dingo","doberman","elkhound","entlebucher","eskimo","frise","germanshepherd","greyhound","groenendael","hound","husky","keeshond","kelpie","komondor","kuvasz","labrador","leonberg","lhasa","malamute","malinois","maltese","mastiff","mexicanhairless","mix","mountain","newfoundland","otterhound","papillon","pekinese","pembroke","pinscher","pointer","pomeranian","poodle","pug","puggle","pyrenees","redbone","retriever","ridgeback","rottweiler","saluki","samoyed","schipperke","schnauzer","setter","sheepdog","shiba","shihtzu","spaniel","springer","stbernard","terrier","weimaraner","whippet","wolfhound"]

function preload(){
  font = loadFont('assets/thefont.ttf');
  back = loadImage('assets/back.jpg');
  dog = loadImage('assets/doge.png');

}

function setup() {
  // put setup code here
  baseurl = 'https://dog.ceo/api/';
  url = baseurl + 'breeds/list/all';
  createCanvas(1000,1000);
  //breed[0] = 'affenpinscher';
  breed = loadJSON(url, getdata);
  angleMode(DEGREES);
  textFont(font);
  textSize(20);
  //textAlign(CORNERS);
}

function draw() {
  // put drawing code here
  background(100);
  imageMode(CENTER);
  image(back, width/2, height/2);
  image(dog, width/2, height/2, 350, 200);
  text("Keep Clicking until you get a full circle", 10, 50);
  text("From Red to Yellow is dog-breeds in Alphabetical order", 10, 70);
  text("and the amount of images of that dogbreed in the source", 10, 90);
  text("List of dog-breed in console log",10,110);
  /*push();
  noFill();
  ellipseMode(CENTER);
  ellipse(width/2,height/2, 100,100);
  pop();*/
  //rect(x*index, y, 50, amountimages);
  rectMode(CORNER);
  translate(width/2,height/2);
  for (var i = 0; i < 360; i++){
    noStroke();
    rotate(4.18); // 360/amount of dog breeds
    fill(255, c+i, 0);
    rect(x, y, 10, allamount[i]);
    /*push();
    fill(0);
    text(dogbreed[i], x, y);
    pop();*/
    
  }

}

function getdata(data) {
  amountimages = data.message.length;
	/*console.log(data);
  console.log(url);
  console.log(amountimages);*/
  //console.log(breed.data.message.dogbreed[0]);
  console.log(dogbreed);

}

function mousePressed() {
	url = baseurl + 'breed/' + dogbreed[index] + '/images';
	index++
  if (index > dogbreed.length) index = 0;
  breedimages = loadJSON(url, getdata);
  //console.log(breedimages);
  //translate(width/2, height/2);
  append(allamount, amountimages);
  //console.log(allamount);


}
