var frank,frankImg,/*frankL*/frankR,frankImg2
var score;
var lives;
var coin,coinImg;
var spike,spikeImg;
var mushroom;
var luckyblock;
var coins,spikes;

function preload(){
  frankImg2 = loadImage("Assets/Frank(Flipped),.png")
  frankImg = loadImage("Assets/Frank.png")
  backgroundImg = loadImage("Assets/bgimg.jpg")
  floorImg = loadImage("Assets/Picture1.png")
  spikeImg = loadImage("Assets/Spikes.png")
  coinImg = loadAnimation("Assets/Coins/Coin1.png","Assets/Coins/Coin2.png","Assets/Coins/Coin3.png","Assets/Coins/Coin4.png","Assets/Coins/Coin5.png","Assets/Coins/Coin6.png")
  mushroom = loadImage("Assets/Mushroom.png")
  luckyblock = loadAnimation("Assets/Blocks/Block1.png","Assets/Blocks/Block2.png","Assets/Blocks/Block3.png","Assets/Blocks/Block4.png","Assets/Blocks/Block5.png","Assets/Blocks/Block6.png","Assets/Blocks/Block7.png")
}



function setup() {
  createCanvas(800,500);

  score = 0;
  lives = 3;  
  bgImg = createSprite(615,255)
  bgImg.addImage("Background", backgroundImg)
  bgImg.scale = 1.5
  bgImg.velocityX = -2.5

  frankR = createSprite(375,350)
  frankR.addImage("right",frankImg)
  frankR.scale = 0.075
  frankR.changeImage("right")
  //frankL = createSprite(frankR.x,frankR.y)
  frankR.addImage("left",frankImg2)
  //frankL.scale = 0.85

  floor = createSprite(350,460)
  floor.addImage("floor",floorImg)
  floor.scale = 1.75
  floor.velocityX = -2.5

  coins = createGroup()
  spikes = createGroup()

}

function draw() 
{
  background("white")

  if(keyDown("up")){
    frankR.y = frankR.y - 3;
  }

  if(keyDown("down")){
    frankR.y = frankR.y + 3;
  }

  if(keyDown("right")){
    frankR.x = frankR.x + 0;
    frankR.changeImage("right")
    /*frankL.visible = false
    frankR.visible = true
    console.log(frankR.x)*/
  }

  if(keyDown("left")){
    frankR.x = frankR.x - 0;
    frankR.changeImage("left")
   /* frankL.visible = false
    frankR.visible = true
    console.log(frankR.x)*/
  }

  if(frankR.isTouching(coins)){
    console.log("Frank is collecting coins")
    coins.destroyAllEach()
    score += 1;

  }

  if(frankR.isTouching(spikes)){
    console.log("Frank is touching the spikes!!")
  }
  /*frankL.x = frankR.x
  frankL.y = frankR.y*/


  if(bgImg.x < 150){
    bgImg.x = bgImg.width/2
  }

  if(floor.x < 250){
    floor.x = floor.width/2
  }

  frankR.collide(floor)

   camera.x = frankR.x 
  
  genCoin();
  genSpikes();

  drawSprites()
  textSize(40)
  fill("black")
  text("Score: " + score,50,50)
  
}

function genCoin(){
  if(frameCount % 200 === 0){
  coin = createSprite(400,250)
  coin.addAnimation("coin", coinImg);
  coin.scale = 0.075;
  coin.x = Math.round(random(750,800))
  coin.velocityX = -3
  
  coins.add(coin)
  }

}

function genSpikes(){
  if(frameCount % 250 === 0){
  spike = createSprite(400,390)
  spike.addImage("spike", spikeImg);
  spike.scale = Math.random(0.009, 0.001)
  spike.x = Math.round(random(750,800))
  spike.velocityX = -3
  spikes.add(spike)
  }
}

function scoreIncrease(){

}

