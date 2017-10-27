var animals = [];
var foods = [];

var startingNum = 20;
var speedMult = 35;
var speedCalc = 0.5;
var speedChange = 0.01;
var foodProb = 0.1;
var aging = 0.5;
var foodLife = 50;
var maxSize = 75;
var minSize = 10;
var reproduceProb = 0.001;

function setup(){

  createCanvas(800, 600);
  background(200);

  for(var i = 0; i < startingNum; i++){
    var a = new Animal(random(width), random(height), random(minSize, maxSize));
    animals.push(a);
  }

  for(var j = 0; j < 10; j++){
    var f = new Food(random(width), random(height));
    foods.push(f);
  }

}

function draw(){
  background(200);

  for(var i = 0; i < animals.length; i++){
    if(!animals[i].dead()){
      animals[i].update();
      animals[i].show();


        for(var x = 0; x < foods.length; x++){

          var d = dist(animals[i].pos.x, animals[i].pos.y, foods[x].pos.x, foods[x].pos.y)

            if(d < animals[i].rad){
              animals[i].life += foodLife;
              foods.splice(x, 1);
            }
        }

      if(animals[i].reproduce(random(1))){
        var a = new Animal(animals[i].pos.x, animals[i].pos.y, animals[i].rad);
        animals.push(a);
      }

    }else{
      animals.splice(i, 1);
    }

  }

  if((random(1) < foodProb) && foods.length < 50){
        var f = new Food(random(width), random(height));
        foods.push(f);
  }

  for(var i = 0; i < foods.length; i++){
      foods[i].show();
  }

}
