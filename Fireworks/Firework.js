
function Firework(){

  this.firework = new Particle(random(width), height);

  this.particles = [];
  this.exploded = false;

  this.update = function(){
    if(!this.exploded){
      this.firework.update();
      this.firework.applyForce(gravity);
        if(this.firework.vel.y >= 0){
          this.exploded = true;
          this.explode();
        }

    }

    for(var y = this.particles.length - 1; y >= 0; y--){
      this.particles[y].applyForce(gravity);
      this.particles[y].update();

      if(this.particles[y].done()){

          this.particles.splice(y, 1);

      }
    }
  };

  this.explode = function(){

      for(var x = 0; x < 75; x++){
        var p = new Particle(this.firework.pos.x, this.firework.pos.y, true);
        this.particles.push(p);

      }

  };

  this.done = function(){
    return (this.exploded && this.particles.length === 0)
  };

  this.show = function(){
    if(!this.exploded){
      this.firework.show();
    }
    for(var y = this.particles.length - 1; y >= 0; y--){
      this.particles[y].show();
    }
  };
}
