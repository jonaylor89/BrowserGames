
minVal = -0.5;
maxVal = 0.5;

var minSlider;
var maxSlider;

function setup() {

  createCanvas(360, 360);
  pixelDensity(1);

  minSlider = createSlider(-2.5, 0, -2.5, 0.01);
  maxSlider = createSlider(0, 2.5, 2.5, 0.01);
}

function draw() {
  var maxIter = 100;
  loadPixels();
  for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {

      var a = map(i, 0, width, minSlider.value(), maxSlider.value());
      var b = map(j, 0, height, minSlider.value(), maxSlider.value());

      var ca = a;
      var cb = b;

      var n = 0;

      while (n < maxIter) {
        var aa = a * a - b * b;
        var bb = 2 * a * b;

        a = aa + ca;
        b = bb + cb;

        if (abs(aa + bb) > 16) {
          break;
        }

        n++;
      }

      var bright = map(n, 0, maxIter, 0, 1);
      bright = map(sqrt(bright), 0, 1, 0, 255);
      if (n == maxIter) {
        bright = 0;
      }

      var pix = (i + j * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();

}
