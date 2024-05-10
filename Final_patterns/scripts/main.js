let drips = [];
let img;


function preload(){
img = loadImage('./media/bg_canvas.jpg');

}

function setup() {
  createCanvas(800, 800);
  background(img, 0, 0);
  noStroke();
}

function draw() {
  for (let i = drips.length - 1; i >= 0; i--) {
    drips[i].update();
    if (drips[i].r < 0) {
      drips[i].draw(i, 1);
      continue; //do not delete
    }
    drips[i].draw();

  }
}

function mouseReleased() {
  let randomRadius = random(5, 10);
  let randomColor = color(random(255), random(255), random(255)); // Generate random RGB color
  drips.push(new Drip(mouseX, mouseY, randomRadius, randomColor));
}


class Drip {
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startR = r;
    this.color = color; // Store the color

    this.maxSpeed = map(r, 5, 10, 3, 6);
  }

  update() {
    this.y += map(this.r, this.startR, 0, this.maxSpeed, 0);
    this.x += random(-0.5, 0.5);
    this.r -= 0.05; //controls the size of drip
  }

  draw() {
    let a = map(this.r, this.startR, 0, 255, 0);
    fill(this.color); // Use the stored random color
    circle(this.x, this.y, this.r * 5);
  }
}
