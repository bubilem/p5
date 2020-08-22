var trees = [];
var force = 50;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < 10; i++) {
    trees.push(
      new Tree(
        createVector(random(width - 300) + 150, random(height / 10) + (height / 10) * 9),
        random(height / 10, height / 5)
      )
    );
  }
}

function draw() {
  background(10, 20, 30);

  trees.forEach((tree) => {
    tree.setDeflection(
      createVector(
        map(mouseX - width / 2, -width / 2, width / 2, -force, force),
        map(mouseY - height / 2, -height / 2, height / 2, -force, force)
      )
    );
    tree.draw();
  });

  fill(0, 0, 250);
  noStroke();
  circle(width / 2, height / 2, 8);
}
