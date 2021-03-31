var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game,planes,plane1,plane2,plane3,cloud,skyImg;

function preload(){
  plane1Img = loadImage("plane1.png");
  plane2Img = loadImage("plane2.png");
  plane3Img = loadImage("plane3.png");
  skyImg = loadImage("sky.png");
}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
//  if(World.frameCount){
   // spawnClouds();
 // }
//}
}
//function spawnClouds(){
 // var getCloudDirection=database.ref('cloud/cloudPosition');
 // getCloudDirection.on("value",function(data){
  //  position=data.val();
  //});
 // cloud=createSprite();
 //  cloud.x=position.x;
 //  cloud.y=position.y;
   
//}
