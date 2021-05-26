var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("back.jpg");
  player_img = loadImage("basket2.png");
  fruit1_img = loadImage("apple2.png");
  fruit2_img = loadImage("banana2.png");
  fruit3_img = loadImage("melon2.png");
  fruit4_img = loadImage("orange2.png");
  fruit5_img = loadImage("pineapple2.png");
  rImage = loadImage("rabbit.png");
  mImage = loadImage("monkey.png");
  sImage = loadImage("squi.png");
  dImage = loadImage("deer.png");
  g1Img = loadImage("g1.png");
  g2Img = loadImage("g2.png");
  back2 =loadImage("wallpaper2.png")


  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  rabbit = createSprite(220,540,20,20)
  rabbit.addImage(rImage)
  rabbit.scale = 0.5
  
  deer = createSprite(360,450,20,20)
  deer.addImage(dImage)
  deer.scale = 0.6

  squi = createSprite(100,50,20,20)
  squi.addImage(sImage)
  squi.scale = 0.25

  monkey = createSprite(600,480,20,20)
  monkey.addImage(mImage)
  monkey.scale = 0.4

  g1 = createSprite(160,480,20,20);
  g1.addImage(g1Img);
  g1.scale = 0.8;

  g2 = createSprite(780,500,20,20);
  g2.addImage(g2Img);
  g2.scale = 0.8;
  
}

function draw() {
  background(back_img);
  if (gameState === 1) {
    clear(); 
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
  if (playerCount === 2) {
    game.update(1);
  }
}