var f, f1, f2;
var sl1_size, sl2_size;
var sl1_angle, sl2_angle;
var xs = window.innerWidth / 2;
var ys = window.innerHeight / 2 + 100;

function setup() {
  f1_color = color("#00F");
  f2_color = color("#0F0");
  f_color = color("#0FF");
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(10);
  sl1_size = createSlider(0, min(window.innerWidth / 2, window.innerHeight / 2), 100, 10);
  sl1_size.position(xs - 200, 50);
  sl1_size.style("width", "150px");

  sl1_angle = createSlider(0, 359, 45);
  sl1_angle.position(xs - 200, 100);
  sl1_angle.style("width", "150px");

  sl2_size = createSlider(0, min(window.innerWidth / 2, window.innerHeight / 2), 200, 10);
  sl2_size.position(xs + 50, 50);
  sl2_size.style("width", "150px");

  sl2_angle = createSlider(0, 359, 135);
  sl2_angle.position(xs + 50, 100);
  sl2_angle.style("width", "150px");

  f1 = new Power(createVector(0, 0), sl1_size.value(), sl1_angle.value());
  f1.color = color("rgb(255,50,50)");
  f1.color_alt = color("rgba(255,50,50,0.4)");
  f2 = new Power(createVector(0, 0), sl2_size.value(), sl2_angle.value());
  f2.color = color("rgb(50,255,50)");
  f2.color_alt = color("rgba(50,255,50,0.4)");
  f = new Power(createVector(0, 0), 0, 0);
  f.color = color("rgb(255,255,50)");
}

function draw() {
  grid();
  translate(window.innerWidth / 2, window.innerHeight / 2 + 100);
  rotate(-PI);
  f1.set(sl1_size.value(), sl1_angle.value());
  f2.set(sl2_size.value(), sl2_angle.value());
  f.reset();
  f.add(f1);
  f.add(f2);
  strokeWeight(1);
  stroke(f2.color_alt);
  line(
    f1.begin.x + f1.getDx(),
    f1.begin.y + f1.getDy(),
    f.begin.x + f.getDx(),
    f.begin.y + f.getDy()
  );
  stroke(f1.color_alt);
  line(
    f2.begin.x + f2.getDx(),
    f2.begin.y + f2.getDy(),
    f.begin.x + f.getDx(),
    f.begin.y + f.getDy()
  );
  f1.draw(3);
  f2.draw(3);
  f.draw(6);
  rotate(PI);
  sliderText();
}

function sliderText() {
  let top = -window.innerHeight / 2 - 100;
  noStroke();
  textAlign("center");

  fill(f1.color);
  textSize(25);
  text("F1", -200, top + 8, 150, 25);
  textSize(15);
  text("power: " + round(f1.size) + "N", -200, top + 35, 150, 15);
  text("angle: " + round(degrees(f1.angle)) + "°", -200, top + 85, 150, 15);

  fill(f2.color);
  textSize(25);
  text("F2", 50, top + 8, 150, 25);
  textSize(15);
  text("power: " + round(f2.size) + "N", 50, top + 35, 150, 15);
  text("angle: " + round(degrees(f2.angle)) + "°", 50, top + 85, 150, 15);

  fill(f.color);
  textSize(25);
  text("F = F1 + F2", -100, top + 150, 200, 25);
  textSize(20);
  text(round(f.size) + "N " + round(degrees(f.angle)) + "°", -150, top + 180, 300, 20);
}

function grid() {
  background(0, 0, 0);
  strokeWeight(1);
  stroke(15);
  noFill();
  let step = 100;
  for (let i = 0; i < window.innerHeight; i += step) {
    line(0, ys - i, window.innerWidth, ys - i);
    line(0, ys + i, window.innerWidth, ys + i);
  }
  for (let i = 0; i < window.innerWidth; i += step) {
    line(xs - i, 0, xs - i, window.innerHeight);
    line(xs + i, 0, xs + i, window.innerHeight);
  }
  stroke(20);
  for (let i = 1; i < window.innerWidth || i < window.innerHeight; i += 2 * step) {
    circle(xs, ys, i);
  }
}
