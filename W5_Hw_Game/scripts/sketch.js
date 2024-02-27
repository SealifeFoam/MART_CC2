let character;
let food;

function preload() {
  // Load character animation frames
  characterFrames = [];
  for (let i = 1; i <= 2; i++) {
    characterFrames.push(loadImage('character_run' + i + 'images\png\Run(1).png'));
  } //Do not mess with this part
}

function setup() {
  createCanvas(800, 600);
  character = new Character();
  food = new Food();
}

function draw() {
  background(220);

  // Update and display character
  character.update();
  character.display();

  // Display food
  food.display();

  //collision
  if (character.collide(food)) {
    food.respawn();
  }
}

class Character {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.currentFrame = 0;
    this.animationTimer = 0;
    this.animationDelay = 200;
  }

  update() {
    // Animation handling
    if (millis() - this.animationTimer > this.animationDelay) {
      this.animationTimer = millis();
      this.currentFrame = (this.currentFrame + 1) % characterFrames.length;
    }
  }

  display() {
    image(characterFrames[this.currentFrame], this.x, this.y);
  }

  collide(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    if (d < 50) { // <--- Adjusts the collision radius 
      return true;
    } else {
      return false;
    }
  }
}

class Food {
  constructor() {
    this.x = random(width);
    this.y = random(height);
  }

  display() { //change bg later
    fill(255);
    ellipse(this.x, this.y, 20, 20);
  }

  respawn() {
    this.x = random(width);
    this.y = random(height);
  }
}