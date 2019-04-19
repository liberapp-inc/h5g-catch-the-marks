class Player extends GameObject{

    static I : Player = null;

    constructor() {
        super();
        Player.I = this;
        this.loadStatus();

    }

    private loadStatus(){

    }

    resetStatus(){

    }

    updateContent(){}

}