class Circle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = 1;
    this.growing = true;

    this.draw = function () {
      strokeWeight(2);
      stroke(100);
      noFill();
      circle(this.x, this.y, this.r * 2);
    };

    this.colide = function (circle) {
      let dx = abs(this.x - circle.x);
      let dy = abs(this.y - circle.y);
      let dist = sqrt(dx * dx + dy * dy);
      return dist - (this.r + circle.r) < 1;
    };
  }
}
