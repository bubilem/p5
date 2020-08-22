class Particle {
  constructor(x, y, v) {
    this.x = x;
    this.y = y;
    this.lastx = x;
    this.lasty = y;
    this.v = v;
    const G = 0.5;
    this.alpha = 255;
    this.exploded = false;
    this.m = 1;
    this.type = 1;

    this.update = function () {
      this.lastx = this.x;
      this.lasty = this.y;
      if (this.type == 2 && random() < 0.5) {
        this.v.rotate(random(-PI / random(4, 8), PI / random(4, 8)));
      }
      this.v.y += G * this.m;
      this.x += this.v.x;
      this.y += this.v.y;
    };

    this.draw = function () {
      if (this.exploded && this.alpha > 0) {
        this.alpha -= 8;
      }
      stroke(255, this.alpha);
      line(this.x, this.y, this.lastx, this.lasty);
    };
  }
}
