class Player extends GameCompornent{

    static I : Player = null;

    constructor(x : number, y : number, width : number, height : number, color:number) {
        super(x,y,width,height);
        Player.I = this;
        this.loadStatus();

    }

    private loadStatus(){

    }

    resetStatus(){

    }

    updateContent(){}

}