class Tree {
  constructor(pos, l) {
    this.basis = new Branch(pos, l, 0);

    this.setDeflection = function (deflection) {
      this.basis.setDeflection(deflection);
    };

    this.draw = function () {
      this.basis.draw();
    };
  }
}
