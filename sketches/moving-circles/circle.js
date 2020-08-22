class Circle {
  constructor() {
    this.x;
    this.y;
    this.v = p5.Vector.random2D();
    this.speed = random() * 2 + 0.5;
    this.r = random(20, 50);

    this.move = function () {
      let newx = this.x + this.v.x * this.speed;
      let newy = this.y + this.v.y * this.speed;
      let colide = false;

      if (newx - this.r <= 0 || newx + this.r >= width) {
        this.v.x *= -1;
        colide = true;
      }
      if (newy - this.r <= 0 || newy + this.r >= height) {
        this.v.y *= -1;
        colide = true;
      }
      if (!colide) {
        this.x += this.v.x * this.speed;
        this.y += this.v.y * this.speed;
        this.speed = this.speed > 0 ? this.speed - 0.001 : 0;
      }
    };

    this.show = function () {
      strokeWeight(2);
      stroke(100);
      noFill();
      circle(this.x, this.y, this.r * 2);
    };

    this.colide = function (circle) {
      let dx = abs(this.x - circle.x);
      let dy = abs(this.y - circle.y);
      let dist = sqrt(dx * dx + dy * dy);
      return dist - (this.r + circle.r) < 0.1;
    };
  }
}
