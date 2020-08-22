var circles;

function setup() {
  createCanvas(800, 600);
  frameRate(60);
  circles = new Circles(20);
}

function draw() {
  background(200, 200, 200);
  circles.move();
  circles.show();
}
