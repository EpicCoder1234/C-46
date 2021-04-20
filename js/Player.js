class Player{
    constructor(){
        this.name = null
    }
    getPlayerCount(){
        database.ref("playerCount").on("value",function(data){
            playerCount = data.val();
        });
        return playerCount
    }
    updatePlayerCount(data){
        console.log(data);
        database.ref('/').update({
            playerCount:data,
        });
    }
    updateName(){
        console.log(this.name);
        var playerIndex = "players/player"+playerCount
        database.ref(playerIndex).set({
            name:this.name
        });
    }
    static getPlayerInfo(){
        database.ref("players").on("value",function(data){
            allPlayers = data.val();
        });
    }
}