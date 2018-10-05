class Firework {
  constructor() {
    this.firework = new Particle(random(width), height);
    this.particles = [];
    this.exploded = false;
  }

  update() {
    if (!this.exploded) {
      this.firework.update();
      this.firework.applyForce(gravity);
      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }

    for (let y = this.particles.length - 1; y >= 0; y--) {
      this.particles[y].applyForce(gravity);
      this.particles[y].update();

      if(this.particles[y].done()) {
          this.particles.splice(y, 1);
      }
    }
  };

  explode() {
    let {pos} = this.firework;
    for (let x = 0; x < 75; x++) {
      let p = new Particle(pos.x, pos.y, true);
      this.particles.push(p);
    }
  };

  done() {
    return (this.exploded && this.particles.length === 0)
  };

  show() {
    if (!this.exploded)
      this.firework.show();

    for(let y = this.particles.length - 1; y >= 0; y--)
      this.particles[y].show();
  };
}
