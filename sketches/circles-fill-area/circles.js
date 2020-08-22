class Circles {
  constructor(count) {
    this.circles = [];
    for (let i = 0; i < count; i++) {
      this.circles[i] = new Circle();
      let colide = false;
      do {
        this.circles[i].x = random(50, width - 100);
        this.circles[i].y = random(50, height - 100);
        colide = false;
        for (let j = 0; j < i; j++) {
          if (this.circles[i].colide(this.circles[j])) {
            colide = true;
            break;
          }
        }
      } while (colide);
    }

    this.move = function () {
      for (let i = 0; i < this.circles.length; i++) {
        let oldx = this.circles[i].x;
        let oldy = this.circles[i].y;
        this.circles[i].move();
        let colide = false;
        for (let j = i + 1; j < this.circles.length; j++) {
          if (this.circles[i].colide(this.circles[j])) {
            let ivx = this.circles[i].v.x;
            let ivy = this.circles[i].v.y;
            let ispeed = this.circles[i].speed;
            this.circles[i].v.set(this.circles[j].v.x, this.circles[j].v.y);
            this.circles[i].speed = this.circles[j].speed;
            this.circles[j].v.set(ivx, ivy);
            this.circles[j].speed = ispeed;
            colide = true;
          }
        }
        if (colide) {
          this.circles[i].x = oldx;
          this.circles[i].y = oldy;
        }
      }
    };

    this.show = function () {
      this.circles.forEach(function (c) {
        c.show();
      });
    };
  }
}
