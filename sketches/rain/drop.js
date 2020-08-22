class Drop {
  constructor() {
    this.generate = function (onTop = false) {
      this.x = random(width);
      this.y = random(onTop ? 0 : height);
      this.z = random(1, 10);
      this.len = map(this.z, 1, 10, 2, 10);
      this.thick = map(this.z, 1, 10, 1, 6);
      this.speed = map(this.z, 1, 10, 1, 8);
    };

    this.generate();

    this.fall = function () {
      this.y = this.y + this.speed;
      if (this.y > height) {
        this.generate(true);
      }
    };

    this.show = function () {
      stroke(100, 100, 150);
      strokeWeight(this.thick);
      line(this.x, this.y, this.x, this.y + this.len);
    };
  }
}
