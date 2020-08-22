var stars = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(30);

  for (let i = 0; i < 2000; i++) {
    let star = new Star();
    star.generate();
    append(stars, star);
  }
}

function draw() {
  background(0);
  stars.forEach(function (star) {
    star.move();
    star.draw();
  });
}
