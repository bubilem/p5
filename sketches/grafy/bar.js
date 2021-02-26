class Bar {
  constructor() {
    this.name;
    this.value;
    this.x;
    this.y;
    this.w;
    this.h;
    this.acth = 1;
    this.step = 7;

    this.grow = function () {
      if (this.acth < this.h) {
        this.acth += this.step;
      }
      if (this.acth > this.h) {
        this.acth = this.h;
      }
    };

    this.show = function () {
      noStroke();
      fill(100, 110, 120);
      rect(this.x, this.y - this.acth, this.w, this.acth, 7, 7, 0, 0);
      textSize(10);
      fill(255);
      textAlign(CENTER, CENTER);
      text(this.name + "\n" + this.value, this.x, this.y - this.acth, this.w, this.acth);
    };
  }
}
