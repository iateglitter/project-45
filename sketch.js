

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
obsBottom1Img = loadImage ("assets/obsBottom1.png");
obsBottom2Img = loadImage ("assets/obsBottom2.png");
obsBottom3Img = loadImage ("assets/obsBottom3.png");
}

function setup(){
createCanvas(800,600);
bg = createSprite (400,300,800,600)
bg.addImage(bgImg);
ground1 = createSprite(400,590,800,20);
ground2 = createSprite(400,10,800,20);
balloon = createSprite (50,300,40,40);
balloon.addAnimation("lballoon", balloonImg);
balloon.scale = 0.3;

//creating top and bottom grounds



      
//creating balloon     




}

function draw() {
  
  background("black");
  drawSprites ();
        if (keyDown("space") && balloon.y>30){
          balloon.velocityY = -5;
        }
        balloon.velocityY = balloon.velocityY+1;
        balloon.collide(ground1);
bottomObstacles();
          //making the hot air balloon jump
       
}

function bottomObstacles() {
  if(frameCount%100 === 0){
    obs1 = createSprite(750,480,80,100);
    obs1.addImage ("o1", obsBottom1Img);
    obs1.velocityX = -3
    obs1.lifetime = 800;
    obs1.scale = 0.1;
  }
}