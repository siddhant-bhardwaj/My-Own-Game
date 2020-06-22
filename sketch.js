var player,player_image;
var ground;
var enmy, enmy_image;
var purplekey, purplekey_Image;
var purpleSafe, purpleSafe_Image, purplesafeunlockedimg;
var flash;
var door, hammer, orangekey,orangelock,yellowkey,yellowlock;
var greenkey,greenlock,lock,code,redkey,redlock,stungun,whitekey,whitelock;
var plank;
var flashimage,doorimage,hammerimage,orangekeyimage,orangelockimage,yellowkeyimage,yellowlockimage;
var greenkeyimage,greenlockimage,lockimage,codeimage,redkeyimage,redlockimage,stungunimage,whitekeyimage,whitelockimage;
var plankimage;
var livingroom,livingroomimage;
var kitchen, kitchenimg;
var study, studyimg;
var boiler, boilerimg;
var backyard, backyardimg;
var ground;
var gameState = "livingroom";
var attack = "Reload";
var room,rooming;
var door1,door1img;
var bathroom,bathroomimg;
var bed,bedimg;

var player_running;
function preload(){
  player_image= loadAnimation("Images/DipperPines.png");
  player_running= loadAnimation("Images/DipperPines.png","Images/DipperRunning.png");
  flashimage = loadImage("Images/Bluelight.jpg");
  doorimage = loadImage("Images/door.png");
  hammerimage = loadImage("Images/Hammer.png");
  orangekeyimage = loadImage("Images/orangekey.png");
  orangelockimage = loadImage("Images/orangelock.png");
  yellowkeyimage = loadImage("Images/yellowkey.png");
  yellowlockimage = loadImage("Images/yellowlock.png");
  enmy_image= loadImage("Images/Villian.png");
  purplekey_Image = loadImage("Images/Purplekey.png");
  purpleSafe_Image = loadAnimation("Images/Purplesafelocked.png");
  purplesafeunlockedimg = loadAnimation("Images/purplesafeunlocked.png");
  kitchenimg = loadAnimation("Images/Kitchen2room.jpg");
  studyimg = loadAnimation("Images/study.jpg");
  roomimg = loadAnimation("Images/Extraroom2.jpg");
  greenkeyimage = loadImage("Images/greenkey.png");
  greenlockimage = loadImage("Images/greenlock.png");
  lockimage = loadImage("Images/Lock.png");
  codeimage  = loadImage("Images/lockcode.png");
  redkeyimage  = loadImage("Images/redkey.png");
  redlockimage = loadImage("Images/redlock.png");
  stungunimage = loadImage("Images/stungun.png");
  //whitekeyimage = loadImage("Images/whitekey.gif");
  //whitelockimage = loadImage("");
  plankimage = loadImage("Images/plank.png");
  livingroomimage = loadAnimation("Images/livingroom2.jpg");
  boilerimg = loadAnimation("Images/BoilerRoom.jpg");
  backyardimg = loadAnimation("Images/Backyard.jpg");
  door1img = loadImage("Images/door.png");
  bathroomimg=loadAnimation("Images/Bathroom.jpg");
  bedimg = loadAnimation("Images/BedRoom1.jpg");
  }

function setup() {
  
  createCanvas(1200,600);
  /*livingroom = createSprite(500,600,200,300);
  livingroom.addImage(livingroomimage);
  livingroom.scale = 1.2;
  kitchen = createSprite(2237,525,200,300);
  kitchen.addImage(kitchenimg);
  study = createSprite(3746,494,200,300);
  study.addImage(studyimg);
  study.scale= 0.75;
boiler = createSprite(5200,541,200,300);
boiler.addImage(boilerimg);
backyard = createSprite(6595,509,200,300);
backyard.addImage(backyardimg);
backyard.scale = 0.5;*/

ground = createSprite(600,300,300,200);
ground.addAnimation("livingroom",livingroomimage);
ground.addAnimation("kitchen",kitchenimg);
ground.addAnimation("study",studyimg);
ground.addAnimation("boilerroom",boilerimg);
ground.addAnimation("backyard",backyardimg);
ground.addAnimation("room",roomimg);
ground.addAnimation("bath",bathroomimg);
ground.addAnimation("bed",bedimg);

  door = createSprite(60,300,20,20);
door.addImage(doorimage);
door.scale = 0.5;
door.visible = false;
  
  player = createSprite(200,500,20,20);
player.addAnimation("static",player_image);
player.scale = 0.5;
player.addAnimation("run",player_running);
//player.debug = true;
player.setCollider("circle",0,0,200);
enmy = createSprite(1150,150,10,10);

enmy.velocityX = -0.3;
enmy.addImage(enmy_image);
//enmy.debug = true;
enmy.setCollider("circle",0,0,100);
stungun = createSprite(800,242,10,10);
stungun.addImage(stungunimage);
stungun.scale = 0.15;
stungun.setCollider("rectangle",0,0,800,800);

purpleSafe = createSprite(800,242,20,20);
purpleSafe.addAnimation("locked",purpleSafe_Image);
purpleSafe.addAnimation("unlocked",purplesafeunlockedimg);
purpleSafe.scale=0.2;

door1 = createSprite(770,64,20,20);
door1.addImage(door1img);
door1.scale=0.5;
door1.visible = false;



flash = createSprite(500,400,10,10);
flash.visible = false;
redkey = createSprite(634,476,10,10);
redkey.visible = false;
redkey.scale = 0.5;
redlock = createSprite(700,400,10,10);
redlock.visible = false;
yellowkey = createSprite(300,400,10,10);
yellowkey.visible = false;
yellowlock = createSprite(500,200,10,10);
yellowlock.visible = false;
greenkey = createSprite(711,403,10,10);
greenkey.visible = false;
greenlock = createSprite(200,200,10,10);
greenlock.visible = false;
orangekey = createSprite(490,522,10,10);
orangekey.visible = false;
orangelock = createSprite(761,79,10,10);
orangelock.visible = false;
hammer = createSprite(5736,702,20,20);
hammer.visible = false;
hammer.addImage(hammerimage);
hammer.scale = 0.35;
plank = createSprite(500,400,10,10);
plank.visible = false;
code = createSprite(500,400,10,10);
code.visible = false;
 purplekey = createSprite(3526,644,10,10);
 purplekey.visible= true;
 //purplekey.visible = false;
purplekey.addImage(purplekey_Image);
purplekey.scale = 0.15;

flash.addImage(flashimage);
redkey.addImage(redkeyimage);
yellowlock.addImage(yellowkeyimage);
yellowkey.addImage(yellowlockimage);
greenkey.addImage(greenkeyimage);
greenkey.scale = 0.5;
greenlock.addImage(greenlockimage);
redlock.addImage(redlockimage);
orangekey.addImage(orangekeyimage);
orangekey.scale=0.15;
orangelock.addImage(orangelockimage);
orangelock.scale = 0.3;
plank.addImage(plankimage);
hammer.addImage(hammerimage);
code.addImage(codeimage);



stungun.visible = false;




  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
 
  player.velocityY = 0.5;


  enmy.velocityY = random(-0.3,0.3);

if(keyDown("space")){
player.velocityY = -4;
}

if(purplekey.isTouching(purpleSafe)){
 purpleSafe.visible = false;
 //stungun.visible = true;
 

}

if(player.isTouching(stungun)){
  stungun.x = player.x+100;
  stungun.y = player.y-50;
  //stungun.debug = true;

}



if(keyDown(RIGHT_ARROW)){
  player.x = player.x+10;
  player.changeAnimation("run",player_running);
}

if(keyDown(LEFT_ARROW)){
  player.x = player.x -10;
  player.changeAnimation("run",player_running);
}

if(gameState==="livingroom"){
gameState="Diningroom";


}

if(player.x<0 && gameState==="Diningroom" ){
  ground.changeAnimation("kitchen",kitchenimg);
  player.x = 1130;
  greenkey.visible = true;
  stungun.visible = false;
  purpleSafe.visible=false;
  gameState="Study";
}

if(player.x<0 && gameState==="Study" ){
  ground.changeAnimation("study",studyimg);
  player.x = 1130;
  purplekey.visible = true;
  purplekey.x = 322;
  purplekey.y =494;
  gameState="Boiler";
}

if(player.x<0 && gameState==="Boiler" ){
  ground.changeAnimation("boilerroom",boilerimg);
  player.x = 1130;
  door.visible=true;
  greenlock.visible = true;
  greenlock.x = door.x;
  greenlock.y = door.y;
  purplekey.visible = false;
  //hammer.visible= true; //492,475
 // hammer.x = 492;
 // hammer.y = 475;
  if(greenkey.isTouching(door)){
  gameState="Backyard";
  greenlock.visible=false;
  }
}

if(player.x<0 && gameState==="Backyard" ){
  ground.changeAnimation("backyard",backyardimg);
  player.x = 1130;
  door.visible=false;
  greenkey.visible = false;
  purplekey.visible = false;
  door1.visible=true;
  orangelock.visible = true;
  gameState="room1";
}



if(player.x<0 && gameState==="room1"){
ground.changeAnimation("room",roomimg);
//ground.scale=0.7;
player.x=1130;
gameState="bedroom";
door1.visible=false;
orangelock.visible=false;
}

if(player.x<0 && gameState==="bedroom"){
  ground.changeAnimation("bed",bedimg);
  player.x=1130;
  orangekey.visible=true;
}

if(player.isTouching(orangekey)){
  orangekey.x = player.x+100;
  orangekey.y = player.y-50;
}


if(player.isTouching(greenkey)){
  greenkey.x = player.x+100;
  greenkey.y = player.y-50;
}


if(stungun.isTouching(enmy)&& stungun.visible===true){
  enmy.visible = false;
}

if(player.isTouching(purplekey)){
  purplekey.x = player.x+100;
  purplekey.y = player.y-50
}

if(player.isTouching(door1) && door1.visible===true){
  ground.changeAnimation("bath",bathroomimg);
  door1.visible=false;
  redkey.visible = true;
  orangelock.visible=false;
}

drawSprites();

/*if(mouseIsOver(stungun)&& attack==="Reload"){
  stungun.x = player.x+100;
  stungun.y = player.y-50;

  
    //flash.velocityY = -3;
  fill("red");
   text("Press s key to attack the enmy",200,200);
}*/

if(enmy.isTouching(player)){
  player.visible = false;
  text("You Have Lost",player.x,player.y);
}


  
  fill("black"); 
  text([mouseX,mouseY],mouseX,mouseY);  


  
}


function mousePressed(){
  console.log("mousePressed()");
  /*if(mouseIsOver(stungun)){
    
  }*/

}

