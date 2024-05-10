
let shapeArray =[];

let gem;
let fog; 
let ice; 
let glass;
let scale; 
let scale2; 


function preload() {
  
  well = loadModel('./assets/objects/gem.obj', true);
  fog = loadImage('./textures/fog.jpg');
  glass = loadImage('./textures/glass.jpg');
  ice = loadImage('./textures/glass2.jpg');
  scale = loadImage('./textures/scale.jpg');
  scale2 = loadImage('./textues/scale2.jpg');
}

function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(200);
  scale(1); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial(); // For effect
  texture(fog);
  model(gem);

////////////////five shapes

//one ellipse 
push();
rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial();
  texture(ice);
  ellipsoid(30, 55, 40);
  pop();

///2 e 
push()
rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial();
  texture(glass);
  ellipsoid(30, 45, 40);
  pop();

  ///3e 
  push();
  rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    normalMaterial();
    texture(scale);
    ellipsoid(30, 25, 40);
    pop();

//4e
    push();
rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial();
  texture(scale2);
  ellipsoid(30, 65, 40);
  pop();
  
//5e
  push();
rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial();
  texture(ice);
  ellipsoid(30, 55, 40);
  pop();

}