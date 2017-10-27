
function Food(){

  this.cols = floor(width/scl);
  this.rows = floor(height/scl);

  this.pos = createVector(floor(random(this.cols)), floor(random(this.rows)));
  this.pos.mult(scl);

  this.location = function(){

    this.pos.x = floor(random(this.cols)) * scl;
    this.pos.y = floor(random(this.rows)) * scl;

  }

  this.show = function(){
    fill(255, 0, 0);
    rect(this.pos.x, this.pos.y, scl, scl);
  }


}
