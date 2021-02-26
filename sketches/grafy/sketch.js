var chart;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(30);
  chart = new Chart(25, 25, width - 50, height - 50, data);
}

function draw() {
  background(255, 255, 255);
  chart.grow();
  chart.show();
}
