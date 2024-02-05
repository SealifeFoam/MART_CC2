var crackerColorA = '#DCCEB0'; 
var vegO= '#7A9580'; //Veg outer color 
var vegI = '#b6cdbd';//Veg Inner color
var x = 105;
var y = 155;
var side = 20;
var circleX;
var circleY;
let flyImage; 
let flyX, flyY;
var r, g, b;
//rectangle button
var x = 80;
var y = 30;
var w = 80;
var h = 60;

function preload() {
  // Load fly image
  flyImage = loadImage('images.png');
 // Load your fly image file
}

function setup() {
  createCanvas(400, 400);
 flyX = random(width);
flyY = random(height);
   r = 0;
  g = 0;
  b = 0;
  noStroke();
}

function draw() {//Platter
  background(225);
  noStroke(); 
  fill('#a36361');
  rect(60,170,50,30);
  rect(100,140,200,90);
  
  fill('#a36361');
  circle(60,185,30);
  circle(300, 185, 90);
  
  //crackers var sub
  fill(crackerColorA)
  for(var i = 0; i < 5; i++)
        {
            rect(x,y,side);
            x+=5;
            y+=10;
        }

  
  //cheese
  fill('#e2b469')
  triangle(195, 195, 155, 195, 155, 145);
  fill('#F8D090')
  triangle(160, 145, 195, 190, 200, 145);
  
  //meat _ change x pts 
   fill('#B75841');
  circle(270, 215,25);
  fill('#c86249');
  circle(260, 215, 25);
  fill('#B75841');
  circle(250, 215,25);
  fill('#c86249');
  circle(240, 215, 25);
  fill('#B75841');
  circle(230, 215,25);
  fill('#c86249');
  circle(220, 215, 25);
  fill('#B75841');
  circle(210, 215,25);
  fill('#c86249');
  circle(200, 215, 25);
  fill('#B75841');
  circle(190, 215,25);
  fill('#c86249');
  circle(180, 215, 25);
  fill('#BA5C44');
  circle(170, 215,25);
  fill('#c86249');
  circle(160, 215,25);

  
  
  //bowel
  fill('#7d919a');
  circle(300, 180, 60);
  fill('#5A6A71');
  circle(300, 180,45);
  
  //grapes_ add random effect
  
  fill('#829e88');
  ellipse(290,170,15,20);
   fill('#7A9580');
  ellipse(300,170,20,15);
   fill('#829e88');
  ellipse(310,170,15,20);
   fill('#7A9580');
  ellipse(300,180,20,15);
   fill('#829e88');
  ellipse(290,190,15,20);
   fill('#7A9580');
  ellipse(310,190,20,15);
  
  //veggies
  fill(vegO)
  circle(220, 155, 20);
  fill(vegI);
  circle(220, 155, 15);
  fill(vegO);
  circle(220, 165, 20);
  fill(vegI);
  circle(220, 165, 15);
  fill(vegO);
  circle(220, 175, 20);
  fill(vegI);
  circle(220, 175, 15);
  fill(vegO);
  circle(220, 185, 20);
  fill(vegI);
  circle(220, 185, 15);
  
  fill('#ec9689')//dip
  arc(240, 150, 60, 60, 0, HALF_PI);
   fill('#F4D8D4');
  arc(243, 152, 50, 50, 0, HALF_PI);
  
//Type and Text
 fill(255);
    text('Everyday Platter', 5, 15);
    text('Sydney B.', 340, 385);
  
  //Random  ---Fly image????
  flyX += random(-5, 5); // Adjust the range to control the speed and direction
  flyY += random(-5, 5); // Adjust the range to control the speed and direction

  // Ensure boundries canvas
  flyX = constrain(flyX, 0, width);
  flyY = constrain(flyY, 0, height);

  // Draw the fly image at its updated position
  image(flyImage, flyX, flyY, 50, 50);
  
  //set the fill to whatever values are held by r, g, and b
	  fill(r, g, b);
  	  ellipse(mouseX, mouseY, 9, 9);

  	  //draw the rectangle button over the mouse trail
  	  rect(x, y, w, h);
  
  
  
  }

//whenever the mouse is pressed
function mousePressed(){
	//if the mouse is over the rectangle
	if ((mouseX > x) && (mouseX < x+w) &&
	    (mouseY > y) && (mouseY < y+h)) {

	    //set the red, green, and blue variables to a random value
	    r = random(0, 255); 
	    g = random(0, 255); 
	    b = random(0, 255);

	  } 
    
}
