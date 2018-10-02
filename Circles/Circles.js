let circles = [];

function setup(){

  createCanvas(700, 700);
  background(51);
  stroke(255);

  let overlapping = false;

  while (circles.length < 300){
  //for(var i = 0; i < 20; i++){

    let circle = {
      x: random(width),
      y: random(height),
      r: random(300)
    };

    overlapping = false;

    for(let k = 0; k < circles.length; k++){

      let other = circles[k];
      let d = dist(circle.x, circle.y, other.x, other.y);

      if(d < other.r + circle.r){
        overlapping = true;
      }
    }

    if(!overlapping){
      circles.push(circle);
    }
  }

  for(let j = 0; j < circles.length; j++){

    noFill();
    ellipse(circles[j].x, circles[j].y, circles[j].r * 2, circles[j].r * 2);

  }

}

function draw(){


}
