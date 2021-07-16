var trackImg,track,boyImg,boy;
var coin,coinImg;

function preload(){
  trackImg=loadImage("images/bgreal.png");
  boyImg=loadAnimation("images/man1.png","images/man2.png","images/man3.png");
}

function setup(){
 createCanvas(windowWidth,windowHeight);

/* track=createSprite(windowWidth*2.6,windowHeight/2,50,50);
 track.addImage("track",trackImg);
 track.scale=2.9;*/

  boy=createSprite(-windowWidth/2.2,windowHeight/1.1,50,50);
  boy.addAnimation("boy_running",boyImg);
   

}

function draw(){
  background(225);
  image(trackImg,0,0,windowWidth*5,windowHeight);
    camera.position.x=boy.x;


  if(keyDown(RIGHT_ARROW)){
    boy.velocityX=3;
    spawnCoins();
  }


 drawSprites();
}

function spawnCoins(){
  if(frameCount%10===0){
    coin=createSprite(camera.position.x+20,windowHeight/2,10,10);

  }
  
}