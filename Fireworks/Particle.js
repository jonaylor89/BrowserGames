
function Particle(x, y, ex){

  this.life = 255;

  this.pos = createVector(x, y);
  if(!ex){
    this.vel = createVector(0, random(-6, -11));
  }else{
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1, 5));
  }
  this.acc = createVector(0, 0);

  this.update = function(){

    if(ex){
      this.vel.mult(0.95);
    }

      this.pos.add(this.vel);
      this.vel.add(this.acc);
      this.acc.mult(0);

      this.life -= 6;

  };

  this.applyForce = function(Force){
      this.acc.add(Force);
  };

  this.done = function(){
    return this.life < 0;
  };

  this.show = function(){

    if(ex){
      strokeWeight(2);
      stroke(255, this.life);
    }else{
      strokeWeight(4);
      stroke(255);
    }


    point(this.pos.x, this.pos.y);

  };

}
