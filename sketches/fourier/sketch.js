/* Shifmann */
let time = 0;
let wave = [];
let path = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(100);
}

function draw() {
  background(0);
  translate(400, window.innerHeight / 2);
  let x = 0;
  let y = 0;
  for (let i = 0; i < 4; i++) {
    let prevx = x;
    let prevy = y;
    let n = i * 2 + 1;
    let radius = 150 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);
    strokeWeight(1);
    stroke(50);
    noFill();
    ellipse(prevx, prevy, radius * 2);
    fill(255);
    ellipse(x, y, 10);
    stroke(200);
    strokeWeight(3);
    line(prevx, prevy, x, y);
  }
  wave.unshift(y);
  translate(500, 0);
  stroke(50);
  strokeWeight(3);
  line(x - 500, y, 0, wave[0]);
  stroke(255);
  noFill();
  beginShape();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();
  time += 0.02;
  if (wave.length > 1000) {
    wave.pop();
  }
}
