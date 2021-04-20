var database;
var player;
var playerCount=0;
var form;
var game;
var gameState;
var allPlayers;
var ship1,ship2,ship3;
var ships = []

function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    game = new Game();

    //playerCount = 2;
}

function draw(){
    gameState = game.getState();
    game.start();


    if(playerCount === 3){
        game.updateState(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }
      if(gameState===2){
        game.end();
      }
      console.log(gameState);
}
