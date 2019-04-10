let x, y;

function setup() {
  createCanvas(800, 800);
  createCanvas(900, 900);
  // Starts in the middle
  x = width / 2;
  y = height;
}

function draw() {
  background(120,200,70);
  background(120,200,70);
  
  // Draw a circle
  stroke(50);
  fill(23,54,12);
  ellipse(x, y, 350,400);
  //Draw a circle
    stroke(60);
    fill(120,120,70);
    ellipse(x,y,80,500);
    //Draw a circle
    stroke(60);
    fill(200);
    ellipse(mouseX,mouseY,80,90);
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
    
}