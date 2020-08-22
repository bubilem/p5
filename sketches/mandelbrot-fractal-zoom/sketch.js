/* 
https://cs.wikipedia.org/wiki/Mandelbrotova_mno%C5%BEina 
*/

var width;
var height;
var intx;
var inty;
var generated;

function setup() {
  width = 500;
  height = 400;
  createCanvas(width, height);
  intx = new p5.Vector();
  inty = new p5.Vector();
  resetZoom();
  generated = false;
}

function mousePressed() {
  if (mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height) {
    let x = map(mouseX, 0, width, intx.x, intx.y);
    let y = map(mouseY, 0, height, inty.x, inty.y);
    let xsize = (intx.y - intx.x) / 20;
    let ysize = (inty.y - inty.x) / 20;
    intx.x = x - xsize;
    intx.y = x + xsize;
    inty.x = y - ysize;
    inty.y = y + ysize;
  } else {
    resetZoom();
  }
  generated = false;
}

function resetZoom() {
  intx.x = -2.1;
  intx.y = 0.9;
  inty.x = -1.2;
  inty.y = 1.2;
}

function draw() {
  if (!generated) {
    mandelbrot();
  }
}

function mandelbrot() {
  background(0);
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      cx = map(x, 0, width, intx.x, intx.y);
      cy = map(y, 0, height, inty.x, inty.y);
      let zr = 0;
      let zi = 0;
      let bright = 0;
      for (let n = 0; n <= 100; n++) {
        let zzr = zr * zr - zi * zi;
        let zzi = 2 * zr * zi;
        zr = zzr + cx;
        zi = zzi + cy;
        if (abs(zr * zr + zi * zi) > 4) {
          //bright = map(n, 0, 100, 0, 255);
          //bright = map(n, 0, 100, 255, 0);
          bright = map(pow(n, 1 / 2), 0, 10, 0, 255);
          break;
        }
      }
      stroke(bright);
      point(x, y);
    }
  }
  generated = true;
}
