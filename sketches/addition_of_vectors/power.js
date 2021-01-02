class Power {
  constructor(begin, size, angle) {
    this.begin = begin;
    this.color = color("rgb(255,255,255)");
    this.color_alt = color("rgba(255,255,255,0.5)");

    this.set = function (size, angle) {
      this.size = size;
      this.angle = radians(angle);
    };

    this.set(size, angle);

    this.add = function (other) {
      let dx = this.getDx() + other.getDx();
      let dy = this.getDy() + other.getDy();
      this.size = sqrt(dx * dx + dy * dy);
      if (dx > 0 && dx > 0) {
        this.angle = atan(dy / dx);
      } else {
        this.angle = atan(dy / dx) + PI;
      }
    };

    this.reset = function () {
      this.size = 0;
      this.angle = 0;
    };

    this.getDx = function () {
      return this.size * cos(this.angle);
    };

    this.getDy = function () {
      return this.size * sin(this.angle);
    };

    this.draw = function (weight) {
      strokeWeight(weight);
      stroke(this.color);
      line(this.begin.x, this.begin.y, this.begin.x + this.getDx(), this.begin.y + this.getDy());
      fill(this.color);
      circle(this.begin.x, this.begin.y, weight * 2);
      circle(this.begin.x + this.getDx(), this.begin.y + this.getDy(), weight * 2);
    };
  }
}
