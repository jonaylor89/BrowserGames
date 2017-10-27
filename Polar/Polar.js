
function setup(){

  createCanvas(400, 400);
  background(51);

}
function draw(){

  var n = 5;
  var d = 7;
  var k = n/d;

  translate(width/2, height/2);
  stroke(255);
  strokeWeight(1);

  beginShape();
  noFill();

  for(var i = 0; i <= TWO_PI * d; i += 0.01){
    var r = 100 * cos(k * i);
    var x = r * cos(i);
    var y = r * sin(i);

    vertex(x, y);
  }

  endShape(CLOSE);


}
