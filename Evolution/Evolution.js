let animals = [];
let foods = [];

let startingNum = 20;
let speedMult = 35;
let speedCalc = 0.5;
let speedChange = 0.01;
let foodProb = 0.1;
let aging = 0.5;
let foodLife = 50;
let maxSize = 75;
let minSize = 10;
let reproduceProb = 0.001;

function setup(){

  createCanvas(800, 600);
  background(200);

  for(let i = 0; i < startingNum; i++){
    let a = new Animal(random(width), random(height), random(minSize, maxSize));
    animals.push(a);
  }

  for(let j = 0; j < 10; j++){
    let f = new Food(random(width), random(height));
    foods.push(f);
  }

}

function draw(){
  background(200);

  for(let i = 0; i < animals.length; i++){
    if(!animals[i].dead()){
      animals[i].update();
      animals[i].show();


        for(let x = 0; x < foods.length; x++){

          let d = dist(animals[i].pos.x, animals[i].pos.y, foods[x].pos.x, foods[x].pos.y)

            if(d < animals[i].rad){
              animals[i].life += foodLife;
              foods.splice(x, 1);
            }
        }

      if(animals[i].reproduce(random(1))){
        let a = new Animal(animals[i].pos.x, animals[i].pos.y, animals[i].rad);
        animals.push(a);
      }

    }else{
      animals.splice(i, 1);
    }

  }

  if((random(1) < foodProb) && foods.length < 50){
        let f = new Food(random(width), random(height));
        foods.push(f);
  }

  for(let i = 0; i < foods.length; i++){
      foods[i].show();
  }

}
