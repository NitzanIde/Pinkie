function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 30, 60);
  for (let x = 0; x <= 400; x += 20) {
    spinnerRect(x, x);
  }
}
function spinnerRect(x) {
  push();
  fill(x, 20, 100);
  noStroke();
  rectMode(CENTER);
  translate(x,x);
  rotate(radians(frameCount));
  rect(0, 0, 20, 300);
  pop();
  push();
  fill(x, 20, 100);
  noStroke();
  rectMode(CENTER);
  translate(x,x);
  rotate(radians(-frameCount));
  rect(0, 0, 20, 300);
  pop();
}