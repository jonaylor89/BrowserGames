
class Food{

  constructor(x, y){
    this.pos = createVector(x, y);
  }

  show(){
    fill(0)
    rect(this.pos.x, this.pos.y, 5, 5);
  }
}
