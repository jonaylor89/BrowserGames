
function setup(){

  createCanvas(400, 400);
  background(51);

}
function draw(){

  let n = 5;
  let d = 7;
  let k = n/d;

  translate(width/2, height/2);
  stroke(255);
  strokeWeight(1);

  beginShape();
  noFill();

  for(let i = 0; i <= TWO_PI * d; i += 0.01){
    let  r = 100 * cos(k * i);
    let x = r * cos(i);
    let y = r * sin(i);

    vertex(x, y);
  }

  endShape(CLOSE);


}
