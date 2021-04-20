class Form{
    constructor(){
        this.heading = createElement('h1');
        this.heading2 = createElement('h1');
        this.input = createInput("Name");
        this.button1 = createButton("Play");
    }
    hide(){
        this.button1.hide();
        this.input.hide();
    }
    display(){
        this.heading.html("Ship Racing Game");
        this.heading.position(displayWidth/2, displayHeight-800);
        this.input.position(displayWidth/2,displayHeight-600);
        this.button1.position(displayWidth/2,displayHeight-500);
        this.button1.mousePressed(()=>{
                player.name = this.input.value();
                playerCount+=1
                player.updatePlayerCount(playerCount);
                //console.log(playerCount)
                player.updateName();
                this.input.hide();
                this.button1.hide();
                this.heading2.html("Waiting for players...")
                this.heading2.position(displayWidth/2, displayHeight-600);
            }
        )
    }
}