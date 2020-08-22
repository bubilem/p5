var lightning;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(120);
  lightning = new Particle(window.innerWidth / 2, 0, new p5.Vector(0, 1), 1);
  lightning.v.mult(10);
  background(0);
}

function draw() {
  lightning.update();
  lightning.draw();
}
