var pos;
var prevpos;
var direction;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  pos = createVector(width / 2, height / 2);
  prevpos = pos.copy();
  direction = p5.Vector.random2D();
  background(0);
  frameRate(60);
}

function draw() {
  background(0, 20);
  stroke(255);
  line(prevpos.x, prevpos.y, pos.x, pos.y);
  if (pos.x < 0 || pos.x >= width || pos.y < 0 || pos.y >= height) {
    if (pos.x < 0) {
      prevpos.x += width;
      pos.x += width;
    }
    if (pos.x >= width) {
      prevpos.x -= width;
      pos.x -= width;
    }
    if (pos.y < 0) {
      prevpos.y += height;
      pos.y += height;
    }
    if (pos.y >= height) {
      prevpos.y -= height;
      pos.y -= height;
    }
    line(prevpos.x, prevpos.y, pos.x, pos.y);
  }
  prevpos.set(pos);
  direction.rotate((random(-1, 1) * PI) / 4);
  direction.setMag(random() * (random() < 0.05 ? 200 : 10) + 1);
  pos.add(direction);
}
