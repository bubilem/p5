var xs, ys, r, fi, x, y;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  xs = window.innerWidth / 2;
  ys = window.innerHeight / 2;
  r = 100;
  fi = 0;
  frameRate(60);
  background(0);
}

function draw() {
  background(0, 50);
  strokeWeight(2);
  stroke(10);
  noFill();
  circle(xs, ys, r * 2);
  fi += 0.02;

  let r2 = r / 2;
  x = xs + (r + r2) * cos(fi);
  y = ys + (r + r2) * sin(fi);
  circle(x, y, r2 * 2);

  let r3 = r2 / 2;
  x = x - (r2 + r3) * cos(fi + PI / 2);
  y = y + (r2 + r3) * sin(fi + PI / 2);
  circle(x, y, r3 * 2);

  let r4 = r3 / 2;
  x = x + (r3 + r4) * cos(fi);
  y = y + (r3 + r4) * sin(fi);
  circle(x, y, r4 * 2);

  let r5 = r4 / 2;
  x = x - (r4 + r5) * cos(fi);
  y = y + (r4 + r5) * sin(fi);
  //circle(x, y, r5 * 2);
  strokeWeight(4);
  stroke(255);
  point(x, y);
}
