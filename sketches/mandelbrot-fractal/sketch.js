/* 
https://cs.wikipedia.org/wiki/Mandelbrotova_mno%C5%BEina 
*/

var width;
var height;
var intx;
var inty;

function setup() {
  width = 800;
  height = 800;
  intx = new p5.Vector(-2.1, 1.1);
  inty = new p5.Vector(-1.4, 1.4);

  createCanvas(width, height);
  background(0);
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      cx = map(x, 0, width, intx.x, intx.y);
      cy = map(y, 0, height, inty.x, inty.y);
      let zr = 0;
      let zi = 0;
      let bright = 0;
      for (let n = 0; n < 100; n++) {
        let zzr = zr * zr - zi * zi;
        let zzi = 2 * zr * zi;
        zr = zzr + cx;
        zi = zzi + cy;
        if (abs(zr * zr + zi * zi) > 4) {
          bright = map(sqrt(n), 0, 10, 0, 255);
          break;
        }
      }
      stroke(bright);
      point(x, y);
    }
  }
}
