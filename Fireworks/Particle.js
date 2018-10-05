'use strict'

class Particle {
  constructor(x, y, ex) {
    this.ex = ex;
    this.life = 255;
    this.pos = createVector(x, y);
    this.acc = createVector(0, 0);

    if (!ex) {
      this.vel = createVector(0, random(-6, -11));
    } else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(1, 5));
    }
  }

  update() {
    if(this.ex)
      this.vel.mult(0.95);

    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
    this.life -= 6;
  }

  applyForce(Force) {
    this.acc.add(Force);
  }

  done() {
    return this.life < 0;
  }

  show() {
    if (this.ex) {
      strokeWeight(2);
      stroke(255, this.life);
    } else {
      strokeWeight(4);
      stroke(255);
    }

    point(this.pos.x, this.pos.y);
  };
}
