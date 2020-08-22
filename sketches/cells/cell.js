class Cell {
  constructor() {
    this.x;
    this.y;
    this.r;
    this.v;
    this.age;
    this.color;

    this.generate = function () {
      this.x = random(window.innerWidth - 100) + 50;
      this.y = random(window.innerHeight - 100) + 50;
      this.r = random(30, 50);
      this.v = p5.Vector.random2D();
      this.age = 1;
      this.color =
        round(random(150, 255)) + "," + round(random(150, 255)) + "," + round(random(150, 255));
    };

    this.turn = function () {
      this.age++;
      let dx = this.v.x;
      let dy = this.v.y;
      if (
        this.x + dx - this.r > 0 &&
        this.x + dx < window.innerWidth &&
        this.y + dy - this.r > 0 &&
        this.y + dy < window.innerHeight
      ) {
        this.v.rotate(random(-PI / 16, PI / 16));
      } else {
        this.v.rotate(PI);
      }
      this.x += dx;
      this.y += dy;
      if (this.age > 500 && this.r > 1) {
        this.r -= 0.5;
      }
    };

    this.separate = function () {
      if (this.age > 200 && this.age < 500 && round(random(100)) == 1) {
        this.age += 50;
        let cell = new Cell();
        cell.generate();
        cell.x = this.x;
        cell.y = this.y;
        cell.r = this.r;
        cell.color = this.color;
        return cell;
      } else {
        return null;
      }
    };

    this.draw = function () {
      strokeWeight(2);
      let alpha = map(this.age, 0, 550, 0.4, 0.1);
      stroke("rgba(" + this.color + "," + alpha * 2 + ")");
      fill("rgba(" + this.color + "," + alpha + ")");
      circle(this.x - this.r, this.y - this.r, this.r * 2);
    };
  }
}
