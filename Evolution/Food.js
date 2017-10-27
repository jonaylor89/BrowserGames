
function Food(x, y){

  this.pos = createVector(x, y);

  this.show = function(){
    fill(0)
    rect(this.pos.x, this.pos.y, 5, 5);
  }
}
