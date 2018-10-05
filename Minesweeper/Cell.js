
function Cell(i, j, w){

  this.i = i;
  this.j = j;
  this.x = i*w;
  this.y = j*w;
  this.w = w;

  this.mineCount;

  if(random(1) > 0.9){
    this.mine = true;
  }else{
    this.mine = false;
  }

  this.revealed = false;

}


  Cell.prototype.show = function () {
    stroke(0);
    fill(255);
    rect(this.x, this.y, this.w, this.w);

    if(this.revealed){
      if(this.mine){
        fill(125);
        ellipse(this.x + this.w/2, this.y + this.w/2, this.w/2);
      }
      else{
        fill(125);
        rect(this.x, this.y, this.w, this.w);

        if(this.mineCount > 0){
          textAlign(CENTER);
          fill(0);
          text(this.mineCount, this.x + this.w/2, this.y + this.w/2);
        }
      }
    }
  }

  Cell.prototype.checkMines = function(){

    if(this.mine){
      return -1;
    }else{

      let total = 0;

      for(let xoff = -1; xoff <= 1; xoff++){
        for(let yoff = -1; yoff <= 1; yoff++){
          let s = this.i + xoff;
          let t = this.j + yoff;
          if(s > -1 && s < columns && t > -1 && t < rows){
            if(grid[s][t].mine){
              total++;
            }
          }
        }
      }
      this.mineCount = total;
    }
  }

  Cell.prototype.contains = function(x, y) {
    return ((x > this.x) && (x < this.x + this.w) && (y > this.y) && (y < this.y + this.w));
  }

  Cell.prototype.reveal = function() {
    this.revealed = true;

    if(this.mineCount == 0){
      this.floodFill();
    }
  }

  Cell.prototype.floodFill = function(){

    for(let xoff = -1; xoff <= 1; xoff++){
      for(let yoff = -1; yoff <= 1; yoff++){
        let s = this.i + xoff;
        let t = this.j + yoff;
        if(s > -1 && s < columns && t > -1 && t < rows){
          if(!grid[s][t].mine && !grid[s][t].revealed){
            grid[s][t].reveal();
          }
        }
      }
    }

  }
