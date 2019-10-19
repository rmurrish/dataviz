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
    this.insideRadius = random(height);
    this.outsideRadius = random(width);
    this.diameter = random(10, 30);
    this.speed = 1;
  }


  display() {  
    let numPoints = int(map(mouseX, 0, width, 6, 60));
    let angle = 0;
    let angleStep = 180.0 / numPoints;
    
    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i <= numPoints; i++) {
      let px = this.x + cos(radians(angle)) * this.outsideRadius;
      let py = this.y + sin(radians(angle)) * this.outsideRadius;
      angle += angleStep;
      vertex(px, py);
      px = this.x + cos(radians(angle)) * this.insideRadius;
      py = this.y + sin(radians(angle)) * this.insideRadius;
      vertex(px, py);
      angle += angleStep;
    }
    endShape();
  }
}
