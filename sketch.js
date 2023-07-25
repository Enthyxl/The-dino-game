
var trex ,trex_running;
var ground;groundimage

function preload(){
  trex_running= loadAnimation("trex1.png","trex3.png","trex4.png")
  groundimage=loadImage("ground1.png")
}

function setup(){
  createCanvas(600,200)
    //create a trex sprite
  trex= createSprite(100,150,50,50)
  trex.scale=0.5;
  trex.x = 50
  ground=createSprite(300,180,600,15)

trex.addAnimation("trexneedhelp",trex_running)
}

function draw(){
  background("white")
  if(keyDown("space")) {
    trex.velocityY = -10;
  }

  //gravity
  trex.velocityY = trex.velocityY + 0.8
  trex.collide(ground);

  drawSprites();
}