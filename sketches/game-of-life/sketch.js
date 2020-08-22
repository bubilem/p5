/* 
https://cs.wikipedia.org/wiki/Hra_%C5%BEivota 
*/

const COLS = 100;
const ROWS = 60;
var act = [];
var prev = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(3);
  for (let x = 0; x < COLS; x++) {
    act[x] = [];
    for (let y = 0; y < ROWS; y++) {
      act[x][y] = random() < 0.1 ? 1 : 0;
    }
  }
}

function draw() {
  let dx = width / COLS;
  let dy = height / ROWS;

  background(0);
  noStroke();

  for (let x = 0; x < COLS; x++) {
    for (let y = 0; y < ROWS; y++) {
      let liveNeighbours = getLiveNeighbours(x, y, act);
      if (act[x][y] == 1) {
        fill(190 + liveNeighbours * 20);
      } else {
        fill(20 + liveNeighbours * 5);
      }
      rect(x * dx, y * dy, width / COLS, height / ROWS, 4);
    }
  }

  for (let x = 0; x < COLS; x++) {
    prev[x] = [];
    for (let y = 0; y < ROWS; y++) {
      prev[x][y] = act[x][y];
    }
  }

  for (let x = 0; x < COLS; x++) {
    for (let y = 0; y < ROWS; y++) {
      let liveNeighbours = getLiveNeighbours(x, y, prev);
      if (prev[x][y] == 1 && (liveNeighbours < 2 || liveNeighbours > 3)) {
        act[x][y] = 0;
      } else if (prev[x][y] == 0 && liveNeighbours == 3) {
        act[x][y] = 1;
      }
    }
  }
}

function getLiveNeighbours(x, y, arr) {
  var nx,
    ny,
    c = 0;
  var arounds = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];
  for (let i = 0; i < arounds.length; i++) {
    nx = x + arounds[i][0];
    ny = y + arounds[i][1];
    if (nx < 0) {
      nx = COLS - 1;
    }
    if (nx >= COLS) {
      nx = 0;
    }
    if (ny < 0) {
      ny = ROWS - 1;
    }
    if (ny >= ROWS) {
      ny = 0;
    }
    if (arr[nx][ny] == 1) {
      c++;
    }
  }
  return c;
}
