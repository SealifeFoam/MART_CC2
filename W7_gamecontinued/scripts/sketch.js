let player;
let playerFrames = [];
let food;
let foodFrames =  []; 
let playerFrameIndex;
let foodFrameIndex;
let playerAnimationSpeed = 10; // Speed of player animation - lower is faster
let foodAnimationSpeed = 15; // Speed of food animation - lower is faster
let score = 0;
let timeRemaining = 60;


function preload() {
  for (let i = 0; i < 4; i++) {
    playerFrames[i] = loadImage(`/images/run${i}.png`); // Load player animation frames
    foodFrames[i] = loadImage(`/images/cracker${i}.jpg`); // Load food animation frames
  }
}

function setup() {
  createCanvas(800, 600);
  player = new Player();
  food = new Food();
  frameRate(60);
}

function draw() {
  background(255);
  player.update();//
  player.show();
  food.update();
  food.show();

  // Collisions
  if (player.hits(food)) {
    score++;
    food.randomize();
  }

  //score
  textSize(24);
  fill(0);
  text(`Score: ${score}`, 20, 30);

  // Timer --- Do not forget this time!
  if (frameCount % 60 == 0 && timeRemaining > 0) {
    timeRemaining--;
  }
  if (timeRemaining <= 0) {
    gameOver();
  }
  text(`Time: ${timeRemaining}`, width - 150, 30);
}

//arrow key movement not wsad - should switch to 'hold down' instead of endless pressing 
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.move(-5, 0);
  } else if (keyCode === RIGHT_ARROW) {
    player.move(5, 0);
  } else if (keyCode === UP_ARROW) {
    player.move(0, -5);
  } else if (keyCode === DOWN_ARROW) {
    player.move(0, 5);
  }
}

function gameOver() {
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255, 0, 0); //Red text 
  text("Game Over", width / 2, height / 2);
  noLoop(); // <--Stops the draw loop
}

class Player {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.size = 50;
  }

  move(x, y) { //use constrain
    this.x += x;
    this.y += y;
    this.x = constrain(this.x, 0, width - this.size);
    this.y = constrain(this.y, 0, height - this.size);
  }

  show() {
    image(playerFrames[playerFrameIndex], this.x, this.y, this.size, this.size); // Draw player frame
  }

  hits(food) {
    return collideRectRect(
      this.x,
      this.y,
      this.size,
      this.size,
      food.x,
      food.y,
      food.size,
      food.size
    );
  }
}

class Food {
  constructor() {
    this.randomize();
  }

  randomize() {
    this.x = random(width);
    this.y = random(height);
    this.size = 20;
  }

  show() {
    image(foodFrames[foodFrameIndex], this.x, this.y, this.size, this.size); // Draw food frame
  }

  update() { //bouncing ball loop???
        // Move the food
        this.x += this.speedX;
        this.y += this.speedY;
    
        // Bouncing math
        if (this.x <= 0 || this.x >= width - this.size) {
          this.speedX *= -1;
        }
        if (this.y <= 0 || this.y >= height - this.size) {
          this.speedY *= -1;
    
  }
}

animate() {
  // Update food animation frame index
  foodFrameIndex = (foodFrameIndex + 1) % foodFrames.length;
}

}

function collideRectRect(x1, y1, w1, h1, x2, y2, w2, h2) {
    return (
      x1 < x2 + w2 &&
      x1 + w1 > x2 &&
      y1 < y2 + h2 &&
      y1 + h1 > y2
    );
}// <--Stop forgetting this at the end