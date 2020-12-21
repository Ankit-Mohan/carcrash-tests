var car,wall;
var speed,weight;
var deformation
function setup() {
  createCanvas(800,400);
  car = createSprite(200, 200, 20, 20);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255); 
  if (keyDown("space")){
    car.velocityX = 30;
  }
  if (car.x > 700){
    car.velocityX = 0;
  }
  deformation = (0.5*weight*speed*speed)/22500;
  
  if (deformation > 180){
    car.shapeColor=(255,0,0);
  }
  if (deformation < 180 && deformation > 100) {
    car.shapeColor = (230,230,0)
  }
  if (deformation < 100){
    car.shapeColor = (0,255,0);
  }
  
  drawSprites();
}


