//p5.play library

//control
var stage = 0; //keeps track of which func to run

//counter
var score = 0;
var lives= 2; 
var timeLimit = 20;
var totalTime; 
var splashTime; 
var gameTime; //amount of time in game only

//player
var p1x = 400;
var p1Y = 400; 
var pWidth = 45;
var pHeight =90;

//player animation
var charObjects = [];
var animation = [];
var result;
var i = 0;

//platforms
var b1X = 200;
var b1Y = 300; 
var b2X = 600;
var b2Y = 300;
var b3X = 500;
var b3Y = 150;
var bWidth = 200;
var bHeight = 80; 
var b4X = 500;//ground
var b4Y = 470;
var baseHeight = 140;
var baseWidth = 1300;  

//points aka yum 
var c1X = 400; //pie `
var c1Y = 410; 
var c2X = 600;//pie 2
var c2Y = 250; 
var c3X = 500; // pie 3
var c3Y = 100; 
var c4X = 200; //pie 4 
var c4Y = 250;
var cWidth = 30; 
var cHeight = 30;

//Ouch aka slime 
var s1x = 200 ; 
var s1y = 400; 
var s2x = 500 ; 
var s2y = 100; 
var sWidth = 50; 
var sHeight = 70; 
var g1Postion = 200; //slimes starting postions 
var g2Postion = 500;
var gSpeed = 4; 
var gDirection = -1; //1 moves left , -1 moves right
var gDistance = 150; 
var g2Direction = 1; //1 moves left , -1 moves right
var g2Distance = 50;

//gravity 
var jump = false; 
var direction = 1;//force of gravity in y direction
var velocity = 1.6; //speed of player
var jumpPower = 13; // strength of player
var fallingSpeed = 3; // equal to velocity
var minHeight = 395; //ground 
var maxHeight = 50; //height of sky 
var jumpCounter = 0; //how much we are jumping 

//multimedia - Images,sounds, etic
var char; 
var platform;
var yum;
var landscape; 
var jumpSound; 
var yumSound; 
var ouchSound;
var youWin;
var youlose;
var backgroundM; //bg music 
var gameFont;
var slime; 



function setup(){
createCanvas(1000, 500);
rectMode(CENTER);
textAlign(CENTER);
imageMode(CENTER);

//bg music 
backgroundM.play();


}

function draw(){ 
//functions
//Pressed(); 
gravity();
totalTime = millis(); 


//stage
    if (stage == 0){
        splash(); 
    }
	
    if (stage == 1){
        game(); 
    }

    if (stage == 2){
       winScreen(); 
    }
	
    if (stage == 3){
        loseScreen(); 
    }

}



//splash
function splash ()
{
    splashTime = totalTime; 


	background(150, 230, 240); //sky 
		image(landscape, width/2, height/2, width, height);
   
	//title 
	textFont(gameFont);
	fill(255);
	stroke (0);
	strokeWeight(5);
	textSize(50); 
	text('CC2_Game', width/2, 120); 
	
	//player instructions 
	text('How to Play', width/2, 270);
	text('Use Arrow Keys to Move, Press A to Jump', width/2, 330);
	text('Obtain All Coins Before Time Runs Out', width/2, 380);
	text('Click the Screen to Start', width/2, 490);
	
}


///////game function
function game (){
    //appearance 
    background(150, 230, 240); //sky 
		image(landscape, width/2, height/2, width, height);
   
    //window frame?
    noFill();
    stroke(0);
    strokeWeight(15);
    rect(width/2, height/2, width, height);

///////////draw platform
stroke(0);
strokeWeight(5);
fill(255, 120, 0);
//rect(b1X, b1Y, bWidth, bheight);
image(platform, b1X, b1Y, bWidth, bHeight);
image(platform, b2X, b2Y, bWidth, bHeight);
image(platform, b3X, b3Y, bWidth, bHeight); 
image(platform, b4X, b4Y, baseWidth, baseHeight); //ground

// Collision detection for platform 1
if (p1x + pWidth / 2 >= b1X - bWidth / 2 && p1x - pWidth / 2 <= b1X + bWidth / 2 &&
    p1Y + pHeight / 2 >= b1Y - bHeight / 2 && p1Y - pHeight / 2 <= b1Y + bHeight / 2 &&
    velocity > 0) {
    p1Y = b1Y - bHeight / 2 - pHeight / 2; // Adjust player's Y position to sit on top of the platform
    velocity = 0; // Stop the player from falling further
    jumpCounter = 0; // Reset jump counter
}

// Collision detection for platform 2
if (p1x + pWidth / 2 >= b2X - bWidth / 2 && p1x - pWidth / 2 <= b2X + bWidth / 2 &&
    p1Y + pHeight / 2 >= b2Y - bHeight / 2 && p1Y - pHeight / 2 <= b2Y + bHeight / 2 &&
    velocity > 0) {
    p1Y = b2Y - bHeight / 2 - pHeight / 2; // Adjust player's Y position to sit on top of the platform
    velocity = 0; // Stop the player from falling further
    jumpCounter = 0; // Reset jump counter
}

// Collision detection for platform 3
if (p1x + pWidth / 2 >= b3X - bWidth / 2 && p1x - pWidth / 2 <= b3X + bWidth / 2 &&
    p1Y + pHeight / 2 >= b3Y - bHeight / 2 && p1Y - pHeight / 2 <= b3Y + bHeight / 2 &&
    velocity > 0) {
    p1Y = b3Y - bHeight / 2 - pHeight / 2; // Adjust player's Y position to sit on top of the platform
    velocity = 0; // Stop the player from falling further
    jumpCounter = 0; // Reset jump counter
}


//////////////////////pie_ points   
	image(yum, c1X, c1Y, cWidth, cHeight); //pie 1
	if (p1x >= c1X-cWidth/2 && p1x <= c1X+cWidth/2 && p1Y-cHeight/2 && p1Y <= c1Y+cHeight/2) {
		score = score +1 ;//char hit coin 
		c1X = -1000; //make pie disapear 
		yumSound.play();
	} 
    image(yum, c2X, c2Y, cWidth, cHeight); //pie2
	if (p1x >= c2X-cWidth/2 && p1x <= c2X+cWidth/2 && p1Y-cHeight/2 && p1Y <= c2Y+cHeight/2) {
		score = score +1 ;//char hit coin 
		c2X = -1000; //make pie disapear 
		yumSound.play();
	} 
    image(yum, c3X, c3Y, cWidth, cHeight);//pie 3 
	if (p1x >= c3X-cWidth/2 && p1x <= c3X+cWidth/2 && p1Y-cHeight/2 && p1Y <= c3Y+cHeight/2) {
		score = score +1 ;//char hit coin 
		c3X = -1000; //make pie disapear 
		yumSound.play();
	} 
    image(yum, c4X, c4Y, cWidth, cHeight);//pie 4
	if (p1x >= c4X-cWidth/2 && p1x <= c4X+cWidth/2 && p1Y-cHeight/2 && p1Y <= c4Y+cHeight/2) {
		score = score +1 ;//char hit coin 
		c4X = -1000; //make pie disapear 
		yumSound.play();
	} 


/////////////////////Slimes 
image(slime, s1x, s1y, sWidth, sHeight); 
if (p1x >= s1x-sWidth/2 && p1x <= s1x+sWidth/2 && p1Y >= s1y-sHeight/2 && p1Y <= s1y+sHeight/2){
    //hitting slime
    lives = lives - 1; //lose life 
    ouchSound.play(); 
    p1x = 400;
    p1Y = 375; //sends to start postion 
    
};
image(slime, s2x, s2y, sWidth, sHeight); 
if (p1x >= s2x-sWidth/2 && p1x <= s2x+sWidth/2 && p1Y >= s2y-sHeight/2 && p1Y <= s2y+sHeight/2){
    //hitting slime
    lives = lives - 1; //lose life 
    ouchSound.play(); 
    p1x = 400;
    p1Y = 375; //sends to start postion 
    
};
///////moving slimes
s1x += gSpeed * gDirection;
// Reverse direction if slime 1 reaches certain positions
if (s1x >= g1Postion + gDistance || s1x <= g1Postion - gDistance) {
    gDirection *= -1;
}

// Move slime 2
s2x += gSpeed * g2Direction;
// Reverse direction if slime 2 reaches certain positions
if (s2x >= g2Postion + g2Distance || s2x <= g2Postion - g2Distance) {
    g2Direction *= -1;
}



//draw player 
//stroke(0);
//fill (150, 0, 170);
//rect(p1x, p1Y, pWidth, pHeight);  
image(char, p1x, p1Y, pWidth, pHeight );

//scoreboard 
	textFont(gameFont);
	fill(255);
	stroke (0);
	strokeWeight(5);
	textSize(30); 
	text('Points', 50, 50 ); //place in corner 
	text(score, 100, 50); 	
	
//Lives 
textFont(gameFont);
fill(255);
stroke (0);
strokeWeight(5);
textSize(30); 
text('HP', 150, 50 ); //place Next to Score 
text(lives, 200, 50); 	

//Timer
splashTime = splashTime;
gameTime = int((totalTime - splash)/1000);
totalTime = int(totalTime/1000); //converts to sec

textFont(gameFont);
fill(255);
stroke (0);
strokeWeight(10);
textSize(30); 
text('Time Remaining', 600, 50 ); 
text(timeLimit - gameTime, 700, 50); 	


//code to trigger win-lose screens 
if (score >= 4){
    youWin.play();
    stage = 2; 
} //if you win

if (lives <=0){
    youlose.play();
    stage = 3; 
}//you lose after 3 lives 
if (gameTime >= timeLimit){
    youlose.play();
    stage = 3; 
}//you run out of time 



}

//You Win Screen
function winScreen(){
    image(landscape, width/2, height/2, width, height);
    textFont(gameFont);
	fill(255);
	stroke (10);
	strokeWeight(10);
	textSize(200); 
	text('You Win', width/2, 120); 
}

//You Lose Screen
function loseScreen(){
    image(landscape, width/2, height/2, width, height);
    textFont(gameFont);
	fill(255);
	stroke (0);
	strokeWeight(10);
	textSize(200); 
	text('You Lose', width/2, 190); 
}


///////////gravity
function gravity(){
if(p1Y >= minHeight && jump == false){
    p1Y = p1Y;
    jumpCounter = 0; //reset jump counter when jumping 
}
else{
    p1Y = p1Y + (direction*velocity); //code that makes gravity work - Do NOT delete 
}

if(jump == true){
    if(p1Y <= maxHeight || jumpCounter >= jumpPower){
        if(p1Y >= minHeight){
            p1Y = minHeight; 
        }
        else{
        velocity = fallingSpeed; //fall at maxumuns 
    }}
    else {
				jumpSound.play(); //triggers jump sound
        velocity = -jumpPower; //negative equals up
        jumpCounter = jumpCounter+1; //add to jump counter
    }
}
else{
    velocity = fallingSpeed;
}

}

function keyPressed(){//Controls
console.log('Pressed')
if (key === 'a') {
    p1x -= 20; // Move left faster
}
else if (key === 'd') {
    p1x += 20; // Move right faster
}
   else if (key ==='w'){
        console.log('jumping')
        jump = true; //jump 
        
    }
    else {
        jump = false ; 
    }

}//end kp

function mousePressed(){
  stage = 1;  
}



function preload(){
//image 
char = loadImage('./media/images/char.png');
platform = loadImage('./media/images/platform.png'); //find bg images
yum = loadImage('./media/images/yum.png')//pie for points
slime = loadImage('./media/images/ouch.png')
landscape = loadImage('./media/images/sky.png'); 

//animations 

	
//sounds 
jumpSound = loadSound('./media/audio/jump.wav');
yumSound = loadSound('./media/audio/chomp.mp3'); 
ouchSound = loadSound('./media/audio/ouch.mp3'); 
youlose = loadSound('./media/audio/Lose.wav');
youWin = loadSound('./media/audio/SweetVictory.wav');
backgroundM = loadSound('./media/audio/bg.wav');
//fonts 
gameFont = loadFont('./style/font/Pixel.ttf')// find ttf file 
 
}//close preload


