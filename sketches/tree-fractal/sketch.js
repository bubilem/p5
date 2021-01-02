const LENGTH_RATIO = 2 / 3;
const LENGTH_RATIO_DISPERSION = 0.5;
const FI = 3.1415 / 8;
const FI_DISPERSION = 0.8;
const INITIAL_LENGTH = window.innerHeight / 5;
const MINIMAL_LENGTH = 1;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  translate(window.innerWidth / 2, window.innerHeight);
  branch(INITIAL_LENGTH);
}

function branch(l) {
  stroke(255, 40);
  line(0, 0, 0, -l);
  if (l > MINIMAL_LENGTH) {
    translate(0, -l);
    push();
    rotate(-FI * (FI_DISPERSION == 0 ? 1 : random(1 - FI_DISPERSION, 1 + FI_DISPERSION)));
    branch(
      l *
        LENGTH_RATIO *
        (LENGTH_RATIO_DISPERSION == 0
          ? 1
          : random(1 - LENGTH_RATIO_DISPERSION, 1 + LENGTH_RATIO_DISPERSION))
    );
    pop();
    rotate(FI * (FI_DISPERSION == 0 ? 1 : random(1 - FI_DISPERSION, 1 + FI_DISPERSION)));
    branch(
      l *
        LENGTH_RATIO *
        (LENGTH_RATIO_DISPERSION == 0
          ? 1
          : random(1 - LENGTH_RATIO_DISPERSION, 1 + LENGTH_RATIO_DISPERSION))
    );
  }
}
