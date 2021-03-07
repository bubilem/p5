var chart;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(30);
  chart = new Chart(25, 25, window.innerWidth - 50, window.innerHeight - 50, data, caption);
}

function draw() {
  chart.grow();
  background(255, 255, 255);
  chart.show();
}
