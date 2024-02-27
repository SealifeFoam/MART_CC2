var run1;
var run2;

var imageX1 = 300;
var imageY1 = 100;
var speedX, speedY;
var imageW1 = 256;
var imageH1 = 256;

var textX = 50;
var textY = 50;
var fontType;
var i = 0;
var time = 10;
var counter = 0;

var flipX = false;

var animations = [];
function setup() {
    createCanvas(1600, 1400);
  
    for(var i = 0; i < 7; i++)
    {
        animations[i] = new myImage("./images/run" + (i+1) + ".png", imageX1, imageY1, imageW1, imageH1);
    }
   
    fontType = loadFont("./fonts/ProtestRiot-Regular.ttf")

    setInterval(timeIt, 50);

}
// this runs continuously
function draw() {

    background(120);
    animations[i].setX(imageX1);
    animations[i].setFlipX(flipX);
    animations[i].draw();

    if (keyIsPressed) {
        if (key == "a") {
            flipX = true;
            imageX1 -= 2;
        }

        if (key == "d") {
            flipX = false;
            imageX1 += 2;
        }
        if (key == "w") {
            imageY1 -= 2;
        }
        if (key == "s") {
            imageY1 += 2;
        }


    }

}

function checkCollision(x, y, w, h, x2, y2, w2, h2) {

    if (
        x - w / 2 < x2 + w2 / 2 &&
        x + w2 / 2 > x2 - w / 2 &&
        y - h2 / 2 < y2 + h / 2 &&
        y + h2 / 2 > y2 - h / 2

    ) {
        return true;
    } else {
        return false;
    }
}

function timeIt() {
    if (i < animations.length - 1) {
        i++;
    }
    else {
        i = 0;
    }


}

function moveEnemy() {
    if (counter >= 2) {
        if (imageX1 >= imageX2) {
            imageX1 -= 1;
        }
        if (imageY1 >= imageY2) {
            imageY1 -= 1;
        }

        if (imageX1 <= imageX2) {
            imageX1 += 1;
        }
        if (imageY1 <= imageY2) {
            imageY1 += 1;
        }
        counter = 0;
    }


    counter++;

}