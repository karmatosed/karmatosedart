function setup() {
    createCanvas(windowWidth, windowHeight);
    background(32);
}

function draw() {
    var circleX = random(width);
    var circleY = random(height);
    var circleSize = random(1, 10);
    fill(random(255), random(255), random(255));
    
    ellipse(circleX, circleY, circleSize)
}
