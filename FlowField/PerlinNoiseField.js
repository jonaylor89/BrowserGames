
var inc = 0.1;
var scl = 10;
var cols, rows;
var zoff = 0;
var particles = [];
var flowField = [];

function setup(){

  createCanvas(500, 500);
  pixelDensity(1);
  background(255);

  cols = floor(width/scl);
  rows = floor(height/scl);

  for(var a = 0; a < 200; a++){
    particles[a] = new Particle();
  }
}

function draw(){

  var yoff = 0;
  for(var y = 0; y < rows; y++){
    var xoff = 0;
    for(var x = 0; x < cols; x++){
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
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

  for(var i = 0; i < particles.length; i++){
    particles[i].follow(flowField);
    particles[i].update();
    particles[i].show();
  }

}
