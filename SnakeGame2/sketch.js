
let snake;

function setup() {
    creatCanvas(400, 400);

    snake = new Snake();
}

function draw() {
    background(220);

    snake.update();
    snake.show();
}
