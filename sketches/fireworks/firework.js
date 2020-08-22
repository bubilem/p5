class Firework {
  constructor(x, y) {
    let v = new p5.Vector(0, -1);
    v.mult(random(20, 30));
    this.rocket = new Particle(x, y, v);
    this.particles = [];
    this.type = round(random(1, 2));

    this.exists = function () {
      return this.rocket.y < window.innerHeight * 3;
    };

    this.update = function () {
      if (!this.rocket.exploded && this.rocket.v.y > 0) {
        this.rocket.exploded = true;
        let pcount = pow(2, round(random(3, 9)));
        for (let i = 0; i < pcount; i++) {
          let p = new Particle(this.rocket.x, this.rocket.y, p5.Vector.random2D());
          p.v.mult(random(5, 10));
          p.type = this.type;
          p.m = p.type == 1 ? random(0.1, 1) : random(0.4, 1.2);
          this.particles.push(p);
        }
      }
      this.rocket.update();
      this.particles.forEach(function (particle) {
        if (!particle.exploded && random() < 0.2) {
          particle.exploded = true;
        }
        particle.update();
      });
    };

    this.draw = function () {
      this.rocket.draw();
      this.particles.forEach(function (particle) {
        particle.draw();
      });
    };
  }
}
