class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val();
        });
        return gameState
    }
    updateState(data){
        database.ref('/').update({
            playerCount:data,
        });
    }
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            //player.getPlayerCount();
          }
          form = new Form()
          form.display();
        }
        ship1 = createSprite(100,200);
        ship2 = createSprite(300,200);
        ship3 = createSprite(500,200);
        ships = [ship1,ship2,ship3];
        /*car1.addImage("car1",car1Img);
        car2.addImage("car2",car2Img);
        car3.addImage("car3",car3Img);
        car4.addImage("car4",car4Img);*/
    }

play(){
    form.hide();
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background("");
      //image(sea,0,-displayHeight*4,displayWidth,displayHeight*5)
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x;
      var y=300;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        y = y + 300;
        //use data form the database to display the cars in y direction
        x = displayHeight - allPlayers[plr].distance;
        ships[index-1].x = x;
        ships[index-1].y = y;

        if (index === player.index){
          fill("red");
          strokeWeight(3);
          ellipse(ships[index-1].x,ships[index-1].y,60,60);
          camera.position.x = ships[index-1].y;
          camera.position.y = displayWidth/2; 
        }
      }
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      if(player.distance>3900){
        gameState = 2;
      }
  
      drawSprites();
    }
    end(){
      alert("Game Over");
    }
  }