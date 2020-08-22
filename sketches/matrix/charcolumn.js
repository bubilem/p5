class CharColumn {
  constructor(x, layer) {
    this.chars = [];
    this.x = x;
    this.speed;
    this.layer = layer;

    this.generate = function () {
      this.speed = random() * 4 * (this.layer + 1) + 1;
      let cnt = round(random(window.innerHeight / 24 - 20, window.innerHeight / 24 - 10));
      for (let i = 0; i < cnt; i++) {
        let c = new Character(
          this.x,
          i * 28,
          this.layer && i == cnt - 1 ? 255 : round(random(1, 60) + this.layer * 100)
        );
        c.setRndVal();
        append(this.chars, c);
      }
    };

    this.fall = function () {
      for (let i = 0; i < this.chars.length; i++) {
        this.chars[i].y += this.speed;
        if (this.chars[i].y > window.innerHeight + 24) {
          this.chars[i].y = 0;
        }
        this.chars[i].changeVal();
      }
    };

    this.draw = function () {
      this.chars.forEach(function (c) {
        c.draw();
      });
    };
  }
}
