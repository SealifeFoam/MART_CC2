function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(255);
  
    // Cheese
    fill(255, 215, 0); // Yellow color for cheese
    ellipse(200, 200, 150, 100); // Cheese ellipse
  
    // Cheese holes
    fill(255); // White color for holes
    ellipse(170, 200, 30, 30); // Hole 1
    ellipse(200, 150, 30, 30); // Hole 2
    ellipse(230, 200, 30, 30); // Hole 3
  
    // Meat slices
    fill(139, 69, 19); // Brown color for meat slices
    ellipse(120, 250, 80, 50); // Meat slice 1
    ellipse(280, 250, 80, 50); // Meat slice 2
  
    // Platter
    fill(169, 169, 169); // Gray color for platter
    rect(100, 300, 200, 20); // Platter base
    rect(140, 280, 120, 20); // Platter border
  }