
function Particle(){

    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 2;

    this.update = function(){
      this.pos.add(this.vel);
      this.vel.add(this.acc);
      this.vel.limit(this.maxSpeed);
      this.acc.mult(0);

      this.edges();
    }

    this.follow = function(vectors){
      var x = floor(this.pos.x / scl);
      var y = floor(this.pos.y / scl);
      var index = x + y * cols;
      var force = vectors[index];
      this.applyForce(force);

    }

    this.applyForce = function(force){
      this.acc.add(force);
    }

    this.show = function(){
      stroke(0, 5);
      strokeWeight(7);
      point(this.pos.x, this.pos.y);
    }

    this.edges = function(){
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;

    }

}
