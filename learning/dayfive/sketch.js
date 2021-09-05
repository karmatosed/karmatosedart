function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i = 0; i < 30; i++) {
    fill(random(250), random(50), random(100), random(30));
    ellipse(random(windowWidth), random(windowHeight), random(1000)); 
  }
}