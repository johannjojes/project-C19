var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  
  cloudImage=loadImage("cloud.png");
  
  obstacle1Image=loadImage("obstacle1.png");
  obstacle2Image=loadImage("obstacle2.png");
  obstacle3Image=loadImage("obstacle3.png");
  obstacle4Image=loadImage("obstacle4.png");
  obstacle5Image=loadImage("obstacle5.png");
  obstacle6Image=loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(255);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  drawSprites(); 
  
  spawnClouds();
  
  spawnObstacle();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,80,40,10);
    cloud.y =Math.round( random(80,120));
    cloud.addImage("cloud",cloudImage)
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 210;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
  
}function spawnObstacle () {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var obstacle= createSprite(600,170,10,30);
    var rand =Math.round( random(1,6));
    switch(rand){
      case 1:
    obstacle.addImage(obstacle1Image)
        break;
      case 2:
    obstacle.addImage(obstacle2Image)
        break;
         case 3:
    obstacle.addImage(obstacle3Image)
        break;
         case 4:
    obstacle.addImage(obstacle4Image)
        break;
         case 5:
    obstacle.addImage(obstacle5Image)
        break;
         case 6:
    obstacle.addImage(obstacle6Image)
        break;
        default:break;
        
    }
        
        
        
    obstacle.scale    = 0.5;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 210;
    
 
  
    
  }
  
}

