var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
//var distance = 0;
var database;

var form, player, game;

var pirate1,pirate2;

var pirates,island;

function preload(){
  pirate1img=loadImage("images/Captain1.jpg");
  pirate2img=loadImage("images/Captain 2.png")
  islandimg=loadImage("images/island.jpg")
  backgroundimg=loadImage("images/pirates.jpg")
}

function setup(){

  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundImage)
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
