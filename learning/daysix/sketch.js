var NOISE_SCALE = 0.004;
var STEP = 20;
var count;

function setup() {
  createCanvas (windowWidth, windowHeight);
  strokeWeight(.5);
  noFill();
  count = round(width*1.5/STEP);
  background(255);
}

function drawPerlinCurve ( x, y, phase, step, count, myColour) {
  push();
  stroke(myColour);
  beginShape();
  for (var i=0; i<count; i++) {
    curveVertex(x, y);
    var angle = 2*PI*noise(x* NOISE_SCALE, y* NOISE_SCALE, phase* NOISE_SCALE);
    x += cos(angle)*step;
    y += sin(angle)*step;
  }
  endShape();
  pop();
}

function draw() {
  //background(255);
push();
fill(255,16);
rect(0,0,width, height);
pop();
 

var phase = frameCount / 2;

  for (var y = 0; y < height; y+=10) {
    var myColour = lerpColor(color(10,11,13), color(155, 155, 155), y / height);
    drawPerlinCurve(width+50, y, phase, STEP, count, myColour);
   

  }
}