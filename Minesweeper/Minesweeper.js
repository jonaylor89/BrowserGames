
var grid;
var columns;
var rows;
var w = 20;

function make2dArray(c, r){
  arr = new Array(c);
  for(var i = 0; i < arr.length; i++){
    arr[i] = new Array(r);
  }
  return arr;
}

function setup(){

  createCanvas(801, 801);

  columns = floor(width/w);
  rows = floor(height/w);

  grid = make2dArray(columns, rows, w);
  for(var a = 0; a < grid.length; a++){
    for(var b = 0; b < grid.length; b++){
      grid[a][b] = new Cell(a, b, w);
    }
  }

  for(var a = 0; a < grid.length; a++){
    for(var b = 0; b < grid.length; b++){
      grid[a][b].checkMines();
    }
  }

}

function draw(){

  background(0);

  for(var a = 0; a < grid.length; a++){
    for(var b = 0; b < grid.length; b++){
      grid[a][b].show();
    }
  }
}

function mousePressed(){
  for(var a = 0; a < grid.length; a++){
    for(var b = 0; b < grid.length; b++){
      if(grid[a][b].contains(mouseX, mouseY)){
        grid[a][b].reveal();

        if(grid[a][b].mine){
          for(var a = 0; a < grid.length; a++){
            for(var b = 0; b < grid.length; b++){
              grid[a][b].revealed = true;
            }
          }
        }
      }
    }
  }
}
