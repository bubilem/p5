class Branch {
  constructor(newpos, length, angle, parentdir) {
    this.pos = createVector(newpos.x, newpos.y);
    this.dir = createVector(0, -1);
    this.deflection = createVector(0, 0);
    this.branches = [];
    this.thickness = round(map(length, 0, 100, 1, 5));

    if (parentdir != null) {
      this.dir.set(parentdir);
    }
    this.dir.setMag(length);
    this.dir.rotate(angle);

    if (length > 5) {
      let newlenght, newangle;
      let branchcount = round(random(1, 3));
      for (let i = 0; i < branchcount; i++) {
        newlenght = length * random(0.3, 0.9);
        newangle = random(-PI / 3, PI / 3);
        this.branches.push(
          new Branch(p5.Vector.add(this.pos, this.dir), newlenght, newangle, this.dir)
        );
      }
      /*
      newlenght = length * random(0.3, 0.8);
      newangle = -PI / 4 + random(-PI / 6, PI / 6);
      this.branches.push(
        new Branch(p5.Vector.add(this.pos, this.dir), newlenght, newangle, this.dir)
      );
      newlenght = length * random(0.3, 0.8);
      newangle = PI / 4 + random(-PI / 6, PI / 6);
      this.branches.push(
        new Branch(p5.Vector.add(this.pos, this.dir), newlenght, newangle, this.dir)
      );
      */
    }

    this.setDeflection = function (deflection, newpos) {
      this.deflection.set(deflection);
      if (newpos != null) {
        this.pos.set(newpos);
      }
      var newbranchpos = createVector(this.pos.x, this.pos.y);
      var dir = p5.Vector.add(this.dir, this.deflection);
      dir.setMag(this.dir.mag());
      newbranchpos.add(dir);
      var newdeflection = createVector(deflection.x, deflection.y);
      newdeflection.setMag(deflection.mag() * 1.05);
      for (let i = 0; i < this.branches.length; i++) {
        this.branches[i].setDeflection(newdeflection, newbranchpos);
      }
    };

    this.draw = function () {
      if (this.branches.length > 0) {
        strokeWeight(this.thickness);
        stroke(70, 60, 50);
        var dir = p5.Vector.add(this.dir, this.deflection);
        dir.setMag(this.dir.mag());
        line(this.pos.x, this.pos.y, this.pos.x + dir.x, this.pos.y + dir.y);
        this.branches.forEach(function (branch) {
          branch.draw();
        });
      } else {
        strokeWeight(5);
        stroke(100, 200, 100);
        var dir = p5.Vector.add(this.dir, this.deflection);
        dir.setMag(this.dir.mag());
        line(this.pos.x, this.pos.y, this.pos.x + dir.x, this.pos.y + dir.y);
      }
    };
  }
}
