var angle = 0.0;
var offset = 60;
var scalar = 2;
var speed = 0.05;

function setup() {
  // put setup code here
  createCanvas(120,120);
  fill(0);
  background(204);
}

function draw() {
  // put drawing code here
 var x = offset + cos(angle) * scalar;
 var y = offset + sin(angle) * scalar;
 ellipse(x,y,2,2,);
 angle += speed;
 scalar += speed;
}
