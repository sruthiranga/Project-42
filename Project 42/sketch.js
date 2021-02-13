var hr;

var mn;

var sc;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255, 255, 255);  

  hr = hour();
  mn = minute();
  sc = second();

  translate(400, 200);

//clock hand for hours
  angleMode(degrees);
  hrAngle = map(hr, 0, 12, 0, 360);
  push();
  rotate(hrAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 90, 0);

//clock hand for minutes
  angleMode(degrees);
  mnAngle = map(mn, 0, 60, 0, 360);
  push();
  rotate(mnAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 90, 0);

//clock hand for seconds
  angleMode(degrees);
  scAngle = map(sc, 0, 60, 0, 360);
  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 90, 0);
  pop();

//arc
  stroke("blue");
  arc(60, 60, 80, 80, 0, PI + QUARTER_PI, OPEN);


  drawSprites();
}

function hour(){

}

function minute(){

}

function second(){
}