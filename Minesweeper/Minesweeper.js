
let grid;
let columns;
let rows;
const w = 20;

function make2dArray(c, r){
  arr = new Array(c);
  for(let i = 0; i < arr.length; i++){
    arr[i] = new Array(r);
  }
  return arr;
}

function setup(){

  createCanvas(801, 801);

  columns = floor(width/w);
  rows = floor(height/w);

  grid = make2dArray(columns, rows, w);
  for(let a = 0; a < grid.length; a++){
    for(let b = 0; b < grid.length; b++){
      grid[a][b] = new Cell(a, b, w);
    }
  }

  for(let a = 0; a < grid.length; a++){
    for(let b = 0; b < grid.length; b++){
      grid[a][b].checkMines();
    }
  }

}

function draw(){

  background(0);

  for(let a = 0; a < grid.length; a++){
    for(let b = 0; b < grid.length; b++){
      grid[a][b].show();
    }
  }
}

function mousePressed(){
  for(let a = 0; a < grid.length; a++){
    for(let b = 0; b < grid.length; b++){
      if(grid[a][b].contains(mouseX, mouseY)){
        grid[a][b].reveal();

        if(grid[a][b].mine){
          for(let a = 0; a < grid.length; a++){
            for(let b = 0; b < grid.length; b++){
              grid[a][b].revealed = true;
            }
          }
        }
      }
    }
  }
}
