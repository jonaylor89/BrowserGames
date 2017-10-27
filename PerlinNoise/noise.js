
var xoff;
var change = 0;

function setup(){

  createCanvas(600, 600);

}

function draw(){

    background(0);

    stroke(255);
    noFill();
    xoff = change;
    beginShape();
    for(var i = 0; i < width; i++){

      xoff += 0.01;
      //vertex(i, random(height));
      vertex(i, noise(xoff + change) * height);

    }

    endShape();

    change += 0.02;

}
