var xImage = 50, yImage = 300;
var myFont;
var myTime = 10;
var i = 0;
var flipX = false;
var idleStrings = [];
var walkStrings = [];
var idleArray = [];
var walkArray = [];

var objectToEat;
var objectToDraw;
var score  = 0;

var x;
var y;

var w;
var h;
var backgroundSound;
function preload() {
    idleStrings = loadStrings("../textfiles/idle.txt");
    walkStrings = loadStrings("../textfiles/walk.txt");
    backgroundSound = loadSound("../sounds/background.mp3");
}

function setup() {
    createCanvas(800, 800);
    x = 100;
    y = width;
    w = 100;
    h = height;
    for (let k = 0; k < idleStrings.length; k++) {
        idleArray.push(new myImage(idleStrings[k], 50, 300, 680, 472));
    }
    for (let k = 0; k < walkStrings.length; k++) {
        walkArray.push(new myImage(walkStrings[k], 50, 300, 680, 472));
    }

    objectToEat = new myImage("../images/bounce1.png", 500, 400, 100, 100);
    myFont = loadFont("fonts/ProtestRiot-Regular.ttf");

    setInterval(changeTime, 100);
    setInterval(changeClock, 1000);
}
// this runs continuously
function draw() {
    background(120);

    if (objectToEat != null) {
        objectToEat.draw();
    }

    if (keyIsPressed) {
        if (key == "w") {
            yImage -= 1;
        }
        if (key == "s") {
            yImage += 1;
        }
        if (key == "a") {
            xImage -= 1;
            flipX = true;
        }
        if (key == "d") {
            xImage += 1;
            flipX = false;
        }

        for (var ii = 0; ii < idleArray.length; ii++) {
            idleArray[ii].updateX(xImage);
            idleArray[ii].updateFlip(flipX);
            idleArray[ii].y = yImage;
            walkArray[ii].updateX(xImage);
            walkArray[ii].y = yImage;
            walkArray[ii].updateFlip(flipX);
            
            if (objectToEat != null) {
                if (walkArray[ii].checkCollision(objectToEat.x, objectToEat.y, objectToEat.w, objectToEat.h)) {
                    objectToEat = null;
                    score++;
                    
                }
            }

        }
        objectToDraw = walkArray;
    }
    else {
        objectToDraw = idleArray;     
    }

    objectToDraw[i].draw();

    fill(100, 252, 169);
    textSize(24);
    textFont(myFont);
    text("Score:" + score, 400, 50);

    fill(36, 250, 100);
    
    text(myTime + " seconds", 50, 50);
}

function changeTime() {
    i++;
    if (i > idleArray.length - 1) {
        i = 0;

    }
}

function changeClock()
{
    myTime--;
    if(myTime <= 0)
    {
        myTime = 10;
        if(objectToEat == null)
        {
            addNewFood();
    
        }
    }
}

function addNewFood()
{
  
        objectToEat = new myImage("../images/bounce1.png", random(x,y), random(w,h), 100, 100);

   
}
function mousePressed()
{
    backgroundSound.loop();
}
