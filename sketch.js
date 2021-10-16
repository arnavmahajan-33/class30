
var player;
var score=0;
var wormGroup;

function preload(){
  wormImage = loadImage("images/snake.png");
  bgImage = loadImage("images/bg.png");
  playerImage = loadImage("images/bunnyImg.png");
  }

function setup() {
createCanvas(600,600);

bg=createSprite(300,300);
bg.scale=4;
bg.addImage(bgImage);

player = createSprite(40,550,30,30);
player.addImage(playerImage);
player.scale=0.4;
wormGroup= new Group();
}

function draw() {
background("black");  
stroke("red")
noFill();
ellipse(100,350,40,30);
player.x= mouseX;
player.y= mouseY;

if(player.x<150 && player.x>90 && player.y<380 && player.y>320 ){
  text("NO CHEATING!!",200,200);
  player.x=30;
  player.y=30;
}
generateWorms();

for(var i = 0 ; i< (wormGroup).length ;i++){
  var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }

  drawSprites();
  textSize(20);
  text("Worms destroyed: "+score,350,50);
}

function generateWorms(){
if(frameCount % 20===0){
  
  var worm=createSprite(random(40,380),random(290,380),40,5);
  worm.scale=random(0.1,0.3);
  worm.addImage(wormImage);
  worm.shapeColor="green";
  worm.velocityX=random(-4,4);
  worm.velocityY=random(-4,4);
  wormGroup.add(worm);
  }
}
