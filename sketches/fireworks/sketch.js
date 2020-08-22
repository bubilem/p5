var fireworks = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(40);
}

function draw() {
  if (random() < 0.05) {
    let firework = new Firework(round(random(window.innerWidth - 200) + 100), window.innerHeight);
    fireworks.push(firework);
  }
  background(0, 60);
  fireworks.forEach(function (firework) {
    firework.update();
    if (firework.exists()) {
      firework.draw();
    } else {
      fireworks.splice(fireworks.indexOf(firework), 1);
    }
  });
}
