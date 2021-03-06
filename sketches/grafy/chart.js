class Chart {
  constructor(x, y, w, h, data, caption) {
    this.caption = caption;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.bars = [];
    var count = Object.keys(data).length;
    var max = 0;
    Object.keys(data).forEach(function (key) {
      if (data[key] > max) {
        max = data[key];
      }
    });
    Object.keys(data).forEach(function (key, i) {
      let bar = new Bar();
      bar.name = key;
      bar.value = data[key];
      bar.x = this.x + i * (this.w / count) + 5;
      bar.y = this.y + this.h;
      bar.w = int(this.w / count) - 10;
      bar.h = (data[key] / max) * this.h;
      //this.bars[i] = bar;
      append(this.bars, bar);
    }, this);

    this.grow = function () {
      this.bars.forEach(function (bar) {
        bar.grow();
      });
    };

    this.show = function () {
      this.bars.forEach(function (bar) {
        bar.show();
      });
      strokeWeight(2);
      stroke(100, 110, 120);
      line(this.x, this.y + this.h, this.x + this.w, this.y + this.h);
      textSize(26);
      noStroke();
      fill(0);
      textAlign(CENTER, TOP);
      text(this.caption, this.x, this.y, this.w, 26);
    };
  }
}
