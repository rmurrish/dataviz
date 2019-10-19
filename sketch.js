let ring;

function setup() {
  createCanvas(710, 400);
  ring = new Donut();
}

function draw() {
  background(50, 240, 100);
  bug.display();
}

class Donut {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }


  display() {  
    let numPoints = int(map(mouseX, 0, width, 6, 60));
    let angle = 0;
    let angleStep = 180.0 / numPoints;
    
    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i <= numPoints; i++) {
      let px = x + cos(radians(angle)) * outsideRadius;
      let py = y + sin(radians(angle)) * outsideRadius;
      angle += angleStep;
      vertex(px, py);
      px = x + cos(radians(angle)) * insideRadius;
      py = y + sin(radians(angle)) * insideRadius;
      vertex(px, py);
      angle += angleStep;
    }
    endShape();
  }
}
