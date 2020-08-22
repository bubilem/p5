var satellites = [];
var satellliteTexture;
var sunTexture;

function preload() {
  satelliteTexture = loadImage("sattexture.jpg");
  sunTexture = loadImage("suntexture.jpg");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  frameRate(60);

  for (let i = 0; i < 6; i++) {
    let s = new Satellite(
      window.innerWidth / 2,
      window.innerHeight / 2,
      random(80, min(window.innerWidth, window.innerHeight) / 2 - 80),
      random(5, 20),
      1
    );
    satellites.push(s);
  }
}

function draw() {
  background(5, 5, 5);
  texture(sunTexture);
  sphere(40, 100, 100);
  translate(-window.innerWidth / 2, -window.innerHeight / 2);
  pointLight(250, 250, 250, 0, 0, 0);
  satellites.forEach(function (satellite) {
    satellite.update();
    satellite.draw();
  });
}
