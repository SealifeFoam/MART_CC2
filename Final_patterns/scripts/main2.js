let img;
let stamp;
let topLayer;

function preload() {
  img = loadImage("./media/Bear.png");

  
}

function setup() {
  createCanvas(600, 600);
  topLayer = createGraphics(width, height);
  
  topLayer.background(img);
  topLayer.textSize(25);
  topLayer.textAlign(CENTER);
  topLayer.text("SCRATCH ME", width/2, height/2);
    
  topLayer.imageMode(CENTER);
  topLayer.strokeWeight(2);
  topLayer.blendMode(REMOVE);  
}

function draw() {
  image(img, 0, 0, width, height);
  
  if(mouseIsPressed) {
    topLayer.line(pmouseX, pmouseY, mouseX, mouseY);
    // topLayer.image(stamp, mouseX, mouseY, stamp.width * 2, stamp.height*2);
  }
  
  let greenBlueGradient = drawingContext.createLinearGradient(50, 50, 600, 600); //change to yellow bronze color
  greenBlueGradient.addColorStop(0, 'brown');
  greenBlueGradient.addColorStop(.9, 'maroon');
  drawingContext.fillStyle = greenBlueGradient; 
  drawingContext.fillRect(0, 0, 600, 600);


  image(topLayer, 0, 0);
}