var circles;
var maxCount = 4000;
var count = 0;

function setup() {
  createCanvas(800, 600);
  frameRate(120);
  circles = [];
}

function draw() {
  if (count < maxCount) {
    background(255, 255, 255);
    for (k = 0; k < count / 100 + 1; k++) {
      count++;
      let c = new Circle();
      let colide;
      let attemp = 0;
      do {
        colide = false;
        c.x = random(width - 120) + 60;
        c.y = random(height - 120) + 60;
        attemp++;
        for (let i = 0; i < circles.length; i++) {
          if (c.colide(circles[i])) {
            colide = true;
            break;
          }
        }
      } while (colide && attemp < 1000);
      if (!colide) {
        append(circles, c);
      }
    }
    for (let i = 0; i < circles.length; i++) {
      if (circles[i].growing) {
        circles[i].r += 1;
        for (let j = 0; j < circles.length; j++) {
          if (i != j && circles[i].colide(circles[j])) {
            circles[i].growing = false;
            break;
          }
        }
      }
      circles[i].draw();
    }
  }
}
