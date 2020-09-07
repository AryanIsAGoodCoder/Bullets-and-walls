var wall,thickness;
var bullet,speed,weight;
var damage;
var button;
var b1,b2,b3,b4;


function setup() {
  createCanvas(1600,400);
  
  button();
  
  button = createSprite(100,300,150,50);
  button.shapeColor = "blue";

  b1 = createSprite(800,10,1600,20);
  b2 = createSprite(10,200,20,400);
  b3 = createSprite(1590,200,20,400);
  b4 = createSprite(800,390,1600,20);

  b1.visible = false;
  b2.visible = false;
  b3.visible = false;
  b4.visible = false;
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);

  bullet = createSprite(50,200,100,10);
  bullet.velocityX = speed

  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
}

function draw() {
  background(200,200,200); 
  
  console.log("This is speed"+ speed);
  console.log("This is weight"+weight);
  console.log("this is damage"+damage);
  console.log("This is tickness"+thickness);

  textSize(20);  

  text("Speed : " + speed,100,50);
  text("Weight : " + weight,100,80);
  text("Thickness : " + thickness,100,110);
  text("Damage : " + damage,100,140);

  if (mousePressedOver(button)) {
    button2();
  } 

  if (damage < 10 && bullet.collide(wall)) {
    b1.visible = true;
    b2.visible = true;
    b3.visible = true;
    b4.visible = true;

    b1.shapeColor = "red";
    b2.shapeColor = "red";
    b3.shapeColor = "red";
    b4.shapeColor = "red";
  }

  if (damage > 10 && bullet.collide(wall) ) {
    b1.visible = true;
    b2.visible = true;
    b3.visivble = true;
    b4.visible = true;

    b1.shapeColor = "green";
    b2.shapeColor = "green";
    b3.shapeColor = "green";
    b4.shapeColor = "green";
  }


  bullet.collide(wall);  
  drawSprites();
}

function button () {
  thickness = random(22,53);
  speed = random(123,221);
  weight = random(10,42); 

}

function button2 () {
  thickness = Math.round(thickness);
  weight = Math.round(weight);
  speed = Math.round(speed);
  damage = Math.round(damage);

}

