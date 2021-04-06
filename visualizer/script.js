let octahedron;

var zoom = 9.00;
var zMin = 0.05;
var zMax = 500.00;
var sensativity = 4;

function preload() {
  octahedron = loadModel('cellular_form.obj');
}

function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(300);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  scale(zoom);
  model(octahedron);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
	zoom -= sensativity;
  } else if (keyCode === RIGHT_ARROW) {
	zoom += sensativity;
  }
  zoom = constrain(zoom, zMin, zMax);
}