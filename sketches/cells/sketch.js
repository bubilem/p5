var cells = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(60);

  for (let i = 0; i < 2; i++) {
    let cell = new Cell();
    cell.generate();
    append(cells, cell);
  }
}

function draw() {
  background(0);
  cells.forEach(function (cell) {
    cell.turn();
    if (cells.length < 200) {
      newCell = cell.separate();
      if (newCell != null) {
        append(cells, newCell);
      }
    }
    if (cell.r <= 1) {
      let index = cells.indexOf(cell);
      cells.splice(index, 1);
    }
    cell.draw();
  });
}
