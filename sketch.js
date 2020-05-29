var car,wall;
var speed, weight;
var deformity;
function setup() {
  createCanvas(1600,400);
 var car =  createSprite(400, 200, 50, 50);
 var wall = createSprite(1500,200,60,200);
 car.shapeColor("blue");
 wall.shapeColor("blue")
 speed = random(55,90) ;
 weight = random(400,1500);
 car.velocityX=speed;
 
}

function draw() {
  background(0);
   
 

  if(car.x-wall.x<car.width/2+wall.width/2 && wall.x-car.x <car.width/2+wall.width/2 && 
    car.y-wall.y <car.height/2+wall.height/2 && wall.y-car.y < car.height/2+wall.height/2){
   var deformity = 0.5*weight*speed*speed/22500;
   car.velocityX = 0
   if(deformity<100){
    car.shapeColor = "green"
   }
   if(100<deformity<180){
    car.shapeColor = "yellow"  
   }
   if(deformity>180){
    car.shapeColor = "red" 
   }
  }
  else{
    car.shapeColor = "blue"
    wall.shapeColor = "blue"
  }
  drawSprites();
}