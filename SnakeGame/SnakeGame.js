
var snake;
var food;
var rate = 10;
var scl = 20;


function setup(){

  createCanvas(windowWidth - 100, windowHeight - 100);
  snake = new Snake();
  food = new Food();

    frameRate(rate);
}

function draw(){

  frameRate(rate);


  background(0);

  snake.death();
  snake.update();
  snake.show();

  food.show();

  if(snake.pos.equals(food.pos)){
    food.location();
    snake.eat();
    rate += 1;
  }

}


function keyPressed(){

  if(keyCode === UP_ARROW){
    snake.dir(0, -1);
  } else if(keyCode === DOWN_ARROW){
    snake.dir(0, 1);
  }else if(keyCode === RIGHT_ARROW){
    snake.dir(1, 0);
  }else if(keyCode === LEFT_ARROW){
    snake.dir(-1, 0);
  }else if(keyCode === ALT){
    snake.eat();
  }

}
