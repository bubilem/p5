var layers = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(60);

  for (let layer = 0; layer <= 1; layer++) {
    layers[layer] = [];
    for (let i = 0; i < window.innerWidth / 40; i++) {
      let col = new CharColumn(i * 40, layer);
      col.generate();
      append(layers[layer], col);
    }
  }
}

function draw() {
  background(10);
  layers.forEach(function (layer) {
    layer.forEach(function (col) {
      col.fall();
      col.draw();
    });
  });
}
