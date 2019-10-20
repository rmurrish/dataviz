let ring;

function setup() {
  createCanvas(710, 400);
  ring = new Donut();
}

function draw() {
  background(50, 240, 100);
  ring.display();
}

class Donut {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.insideRadius = random(height);
    this.outsideRadius = random(width);
  }


  display() {  
    let numPoints = 50;
    let angle = 0;
    let angleStep = random(360) / numPoints;
    
    beginShape(QUAD_STRIP);
    for (let i = 0; i <= numPoints; i++) {
      let px = this.x + cos(radians(angle)) * this.outsideRadius;
      let py = this.y + sin(radians(angle)) * this.outsideRadius;
      angle += angleStep;
      vertex(px, py);
      px = this.x + cos(radians(angle)) * this.insideRadius;
      py = this.y + sin(radians(angle)) * this.insideRadius;
      vertex(px, py);
      //angle += angleStep;
    }
    endShape();
  }
}
