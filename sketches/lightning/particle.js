class Particle {
  constructor(x, y, v, level = 1) {
    this.x = x;
    this.y = y;
    this.lastx = x;
    this.lasty = y;
    this.v = v;
    const G = 1.1;
    this.alpha = 255;
    this.particles = [];
    this.level = level;
    const maxparticles = 4;
    this.particlecount = 0;

    this.update = function () {
      this.lastx = this.x;
      this.lasty = this.y;
      if (random() < 0.2) {
        this.v.rotate(random(-PI / random(2, 4), PI / random(2, 4)));
      }
      this.v.y += G;
      this.x += this.v.x;
      this.y += this.v.y;
      if (
        this.particlecount < maxparticles &&
        this.level <= 5 &&
        this.alpha > 20 &&
        random() < 0.15
      ) {
        let particle = new Particle(this.x, this.y, p5.Vector.random2D(), this.level + 1);
        particle.v.mult(random(5, 10));
        particle.alpha = this.alpha;
        this.particles.push(particle);
        this.particlecount++;
      }
      this.particles.forEach(function (particle) {
        particle.update();
      });
    };

    this.draw = function () {
      if (this.alpha > 0) {
        this.alpha -= round(random(2, 10));
      }
      strokeCap(SQUARE);
      strokeJoin(ROUND);
      strokeWeight(6 - this.level);
      stroke(255, this.alpha);
      line(this.x, this.y, this.lastx, this.lasty);
      this.particles.forEach(function (particle) {
        particle.draw();
      });
    };
  }
}
