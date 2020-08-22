class Character {
  constructor(x, y, light) {
    this.x = x;
    this.y = y;
    this.val;
    this.steps = 0;
    this.stepsToChange = random(1, 100);
    this.light = light;
    this.otherLight = this.light > 250 ? round(random(100, 150)) : round(random(10, 40));

    this.setRndVal = function () {
      this.val = String.fromCharCode(0x1400 + round(random(0, 640)));
      //this.val = String.fromCharCode(0x2800 + round(random(0, 256)));
    };

    this.changeVal = function () {
      if (this.steps++ > this.stepsToChange) {
        this.steps = 0;
        this.stepsToChange = random(1, 100);
        this.setRndVal();
      }
    };

    this.draw = function () {
      textSize(24);
      fill(this.otherLight, this.light, this.otherLight);
      text(this.val, this.x, this.y);
    };
  }
}
