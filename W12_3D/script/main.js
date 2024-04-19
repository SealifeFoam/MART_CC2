

let img; 
let img2;
let img3;

function preload() {
    myFont = loadFont('./style/fonts/Exo2.ttf');
  }

function setup() {
    createCanvas(600, 800, WEBGL);
    img = loadImage('.W12_3D/style/textures/fog.jpg');
    img2 = loadImage('.W12_3D/style/textures/glass.jpg');
    img3 = loadImage('.W12_3D/style/textures/glass.jpg');
    textureMode(NORMAL);
  }
  
  function draw() {
      background(200);
      texture(img);
      
      normalMaterial();
      translate(-100,-100);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      ellipsoid(60, 100,35, 55, 24);
    
    translate(-100,-100);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      ellipsoid(60, 120,35, 24, 24);
    
    translate(-100,-100);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      ellipsoid(60, 50,35, 24, 24);
    
    translate(-100,-100);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      ellipsoid(60, 70,35, 24, 15);
    
    translate(-100,-100);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      ellipsoid(60, 90,35, 24, 24);

      rotateX(frameCount *0.01);
      rotateY(frameCount * 0.02);
      fill('#ED225D');
      textFont(myFont);
      textSize(36);
      text("Flying Jelly Beans!!", 10, 50);

  }

  //ellipsoid([radiusx], [radiusy], [radiusz], [detailX], [detailY])