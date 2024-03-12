let player;
let bobs = [];
let yummy = [];
var x;
var y;
var w;
var h;
//sounds
var backgroundSound;
var yum ; 
var yuck; 
//score
let score = 0;
let minScore = 0;
var xImage = 50, yImage = 300;
var myFont;
var i = 0;
var flipX = false;
//animations
var idleStrings = [];
var walkStrings = [];
var idleArray = [];
var walkArray = [];

function setup() {
  createCanvas(500, 250);
  player = new Player();
  //sounds 
  backgroundSound = loadSound('/sounds/menu_bg.wav'); 
  yum = loadSound('/sounds/yum.wav');
  yuck = loadSound('/sounds/yack.wav');
}

function keyPressed() {
  if (key == ' ') {
    player.jump();
  }
}

function draw() {

  background(220);

  score += .05; //fix score counter later
  fill(0, 102, 153);

  //score
  textSize(24);
  fill(0);
  text(`Score: ${score}`, 20, 20);

  player.show();
  player.move();

//yummy _ gain  points 
if (random(1) < 0.03) {
  if (score > minScore) {
      yummy.push(new Yummy());
      minScore = score + 2 + random(1);
  }
}

for (let i = yummy.length - 1; i >= 0; i--) {
  yummy[i].setSpeed(8 + sqrt(score) / 5);
  yummy[i].move();
  yummy[i].show();

  if (player.hits(yummy[i])) {
      // Increase the score 
      score += 10; // Increase the score by 10
      yum.play(); // yum sound effect
      yummy.splice(i, 1); // Remove the gathered item from the array - do not delete 
  }

  if (yummy[i].getX() < -50) {
      yummy.splice(i, 1); // Remove items that have gone off-screen
  }

//Game Over
  for (bobs of bobs) {
    bobs.setSpeed(8 + sqrt(score) / 5);
    bobs.move();
    bobs.show();

    if (player.hits(bobs)) { 
      yuck.play(); //yuck sound effect 
      textSize(32);
      textAlign(CENTER, CENTER);
      fill(255, 0, 0); //Red text 
      text("Game Over", width / 2, height / 2);
      noLoop();
    }

    if (bob.getX() < -50) {
      bobs.shift();
      print("Removed");
    }
  }

}

function mousePressed()
{
    backgroundSound.loop();
}}
