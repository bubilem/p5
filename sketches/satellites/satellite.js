class Satellite {
  constructor(xs, ys, l, r, level = 1) {
    this.xs = xs;
    this.ys = ys;
    this.l = l;
    this.r = r;
    this.fi = random(0, TWO_PI);
    this.x = this.xs - this.l * cos(this.fi);
    this.y = this.ys + this.l * sin(this.fi);
    this.speed = 2 / (this.l - this.r);
    this.satellites = [];
    this.level = level;

    if (this.r > 4 && this.level <= 5) {
      let scount = round(random(0, 5 - 2 * this.level));
      for (let i = 0; i < scount; i++) {
        let s = new Satellite(
          this.x,
          this.y,
          random(this.r + 5, this.l / 4),
          random(2, this.r / 2),
          this.level + 1
        );
        this.satellites.push(s);
      }
    }

    this.update = function () {
      this.fi += this.speed;
      if (this.fi > TWO_PI) {
        this.fi = 0;
      }
      this.x = this.xs - this.l * cos(this.fi);
      this.y = this.ys + this.l * sin(this.fi);
      for (let i = 0; i < this.satellites.length; i++) {
        this.satellites[i].xs = this.x;
        this.satellites[i].ys = this.y;
        this.satellites[i].update();
      }
    };

    this.draw = function () {
      translate(this.x, this.y);
      texture(satelliteTexture);
      sphere(this.r, 100, 100);
      translate(-this.x, -this.y);
      this.satellites.forEach(function (satellite) {
        satellite.draw();
      });
    };
  }
}
