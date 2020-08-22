var drops = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < 300; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(200, 200, 200);
  for (let i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}
