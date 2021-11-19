var player,playerImg;
var bg,shot,shotImg;
var asteriod,asteriodImg;

function preload(){
playerImg = loadImage("images/spaceship1.png");
bg = loadImage("images/bg1.jpg");
asteriodImg = loadImage("images/asteriod.png");
shotImg = loadImage("images/bullet.png")
}

function setup() {
  createCanvas(1000,750);

  player = createSprite(750, 650);
  player.addImage(playerImg);
  player.scale = 0.3;

  shot = createSprite(750,650);
  shot.addImage(shotImg);
  shot.scale = 0.05;
}

function draw() {
  background(bg); 
  
  if (keyDown("left")) {
    player.x = player.x -5;
  }
  
  if (keyDown("right")) {
    player.x = player.x +5;
  }
  
  if (keyDown("space")) {
    shot.x = player.x;
    shot.y = player.y;
    shot.velocityY = -15;
  }

  if(World.frameCount%80===0){}

  drawSprites();
  asteriod();
}

function asteriod(){
  ast = createSprite(Math.round(random(100,750)),0);
  ast.addImage(asteriodImg);
  ast.velocityY = 3;
  ast.lifetime = 200;
  ast.scale = 0.5;
}