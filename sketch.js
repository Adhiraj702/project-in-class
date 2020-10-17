var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
 
  bounceoff(movingRect,fixedRect);
  
  drawSprites();
}

function bounceoff(one,two){
  if (one.x - two.x < two.width/2 + one.width/2
    && two.x - one.x < two.width/2 + one.width/2) {
  one.velocityX = one.velocityX * (-1);
  two.velocityX = two.velocityX * (-1);
}
if (one.y - two.y < two.height/2 + one.height/2
  && two.y - one.y < two.height/2 + one.height/2){
  one.velocityY = one.velocityY * (-1);
  two.velocityY = two.velocityY * (-1);
}
}