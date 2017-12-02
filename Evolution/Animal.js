
class Animal{

  constructor(x, y, rad){
    this.pos = createVector(x, y);
    this.rad = rad;
    this.speed = this.rad * speedCalc;
    this.vel = createVector(0, 0);
    this.life = 255;
    console.log("I ran");
  }

  update(){

    this.pos.add(this.vel);
    this.life -= aging;

    if(random(1) < speedChange){
      let vnorm = createVector(random(-20, 20), random(-20, 20)).normalize();
      this.vel = vnorm.mult((1/this.speed) * speedMult);
    }

    if((this.pos.x > width) || (this.pos.x < -width) ||(this.pos.y > height) || (this.pos.y < -height)){
      this.vel.mult(-1);
    }

  }

  dead(){

    if(this.life <= 55){
      return true;
    }else{
      return false;
    }

  }

  reproduce(x){
    if(x < reproduceProb){
      return true;
    }else{
      return false;
    }
  }

  show(){

      noStroke();
      fill(255 - this.life);
      ellipse(this.pos.x, this.pos.y, this.rad * 2, this.rad * 2);

  }


}
