var input;
var button;
var doglink;
var breedimages;
var url;
var breed;
var totalimages;
var randomimage;
var dogimg;
var dogbreed = ["affenpinscher","african","airedale","akita","appenzeller","basenji","beagle","bluetick","borzoi","bouvier","boxer","brabancon","briard","bulldog","bullterrier","cairn","cattledog","chihuahua","chow","clumber","cockapoo","collie","coonhound","corgi","cotondetulear","dachshund","dalmatian","dane","deerhound","dhole","dingo","doberman","elkhound","entlebucher","eskimo","frise","germanshepherd","greyhound","groenendael","hound","husky","keeshond","kelpie","komondor","kuvasz","labrador","leonberg","lhasa","malamute","malinois","maltese","mastiff","mexicanhairless","mix","mountain","newfoundland","otterhound","papillon","pekinese","pembroke","pinscher","pointer","pomeranian","poodle","pug","puggle","pyrenees","redbone","retriever","ridgeback","rottweiler","saluki","samoyed","schipperke","schnauzer","setter","sheepdog","shiba","shihtzu","spaniel","springer","stbernard","terrier","weimaraner","whippet","wolfhound"];


function preload(){
  font = loadFont('assets/thefont.ttf');
}

function setup() {

	baseurl = 'https://dog.ceo/api/';
	url = baseurl + 'breeds/list/all';
	breed = loadJSON(url, getdata);
  input = createInput("");
  input.position(30, 100);
  input.style('width', '150px');
  button = createButton("Enter");
  button.position(190,100);
  button.mousePressed(userinput);
  console.log(dogbreed);
  textFont(font);
  textSize(20);
  createCanvas(450,200);


}

function draw() {
	//background(100);
  text("Type a dogbreed in the search bar", 10, 30);
  text("All lower case!!!", 10, 55);
  text("List of dogbreeds in the console log", 10, 80);
  /*dogimg = createImg(str(randomimage));
  dogimg.position(10, 150);
  dogimg.size(400,400);*/


}


function getdata(data) {
  doglink = dogbreed.length;
  //console.log(dogbreed);
  totalimages = data.message.length
  randomimage = data.message[int(random(0,totalimages))];
  //console.log(totalimages);
  console.log(randomimage);
  dogimg = createImg(str(randomimage));
  dogimg.position(10, 150);
  dogimg.size(400,400);

}

function userinput(){

	var result = input.value();
	console.log(result);
  	for (var i = 0; i < doglink; i++){
  		if (dogbreed[i]==result){
  			url = baseurl + 'breed/' + dogbreed[i] + '/images';
  			//console.log(url);
  		}
  	}
	input.value("");
	breedimages = loadJSON(url, getdata);

}
