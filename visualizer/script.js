let octahedron;

var zoom = 9.00;
var zMin = 0.05;
var zMax = 500.00;
var sensativity = 4;

function preload() {
  texture_sample = loadImage('texture.jpg');
  model_sample = loadModel('cellular_form.obj');
}

function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(0);
  ambientLight(100);
  directionalLight(70, 250, 200, 0, -2.5,-1.2);
  ambientMaterial(250);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  scale(zoom);
  normalMaterial(250, 0, 0);
  texture(texture_sample);
  model(model_sample);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
  zoom -= sensativity;
  } else if (keyCode === RIGHT_ARROW) {
  zoom += sensativity;
  }
  zoom = constrain(zoom, zMin, zMax);
}