var par;
var thick;
var s = ['wider','narrower','ultra-condensed','extra-condensed','condesned'];

function setup() {
  // put setup code here
  par = createP("Looooooooooooooong");
  par.position(200,100);
  par.style('outline-style','double');
  par.style('outline-color','#000');
  par.style('outline-width','thick');
  par.style('text-align', 'left');
  par.style('text-decoration','overline');
  par.style('font-style', 'italic');
  //par.style('font-weight', '900');
  //par.style('font-stretch','wider');

  button = createButton("Click");
  button.position(100,100);
  button.style('rotate',45);

}

function draw() {
  // put drawing code here
  thick = map(mouseX, 0, width,0, 900);
  par.style('font-weight', thick);
  /*stretch = map(mouseX, 0, 5);
  par.style('font-stretch',s[stretch]);*/
}