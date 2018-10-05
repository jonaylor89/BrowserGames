
const inc = 0.1;
const scl = 10;
let cols, rows;
let zoff = 0;
let particles = [];
let flowField = [];

function setup(){

  createCanvas(500, 500);
  pixelDensity(1);
  background(255);

  cols = floor(width/scl);
  rows = floor(height/scl);

  for(let a = 0; a < 200; a++){
    particles[a] = new Particle();
  }
}

function draw(){

  let yoff = 0;
  for(let y = 0; y < rows; y++){
    let xoff = 0;
    for(let x = 0; x < cols; x++){
      let index = x + y * cols;
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(0.5);
      flowField[index] = v;

      // push();
      //
      // translate(x*scl, y*scl);
      // rotate(v.heading());
      // stroke(0);
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      //
      // pop();

    xoff += inc;
    }
    yoff += inc;
    zoff += 0.0001;
  }

  for(let i = 0; i < particles.length; i++){
    particles[i].follow(flowField);
    particles[i].update();
    particles[i].show();
  }

}
