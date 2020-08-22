class Star {
  constructor() {
    this.x;
    this.y;
    this.r;
    this.speed;
    this.v = new p5.Vector();
    this.light;

    this.generate = function () {
      /*
      let d = map(
        pow(random(), 1 / 20),
        0,
        1,
        4,
        min(window.innerWidth / 2, window.innerHeight / 2)
      );
      let fi = random(TWO_PI);
      let dx = cos(fi) * d;
      let dy = sin(fi) * d;
      this.x = window.innerWidth / 2 + dx;
      this.y = window.innerHeight / 2 + dy;
      this.r = random() + map(d, 1, min(window.innerWidth / 2, window.innerHeight / 2), 1, 0.1);
      */
      this.x = random(window.innerWidth - 20) + 10;
      this.y = random(window.innerHeight - 20) + 10;
      this.r = random() + 0.1;

      this.speed = random() * 2 + this.r;
      this.v.x = this.x - window.innerWidth / 2;
      this.v.y = this.y - window.innerHeight / 2;
      this.v.normalize();
      this.light = round(map(this.speed * this.r, 0.1, 3, 0, 100));
    };

    this.move = function () {
      this.speed *= pow(1.005, this.speed);
      this.x += this.v.x * this.speed;
      this.y += this.v.y * this.speed;
      this.r += 0.005 * this.speed;
      if (
        this.x - this.r < 0 ||
        this.x + this.r > window.innerWidth ||
        this.y - this.r < 0 ||
        this.y + this.r > window.innerHeight
      ) {
        this.generate();
      }
      if (this.light < 255) {
        this.light++;
      }
    };

    this.draw = function () {
      noStroke();
      fill(this.light);
      circle(this.x - this.r, this.y - this.r, this.r * 2);
    };
  }
}
