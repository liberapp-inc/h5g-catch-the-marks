class GameOver extends UICompornent{

    textGameOver:eui.Label = null;
    textScore:eui.Label = null;
    textColor : number = ColorPallet.BLACK;
    static gameOverFlag : boolean = false;

    constructor(x : number, y : number, width : number, height : number) {
        super(x,y,width,height);
        GameOver.gameOverFlag = true;

        this.textGameOver = Util.myText(Game.width/2, Game.height/2 - 50, "GAME OVER", 80, 1, this.textColor, true);
        this.textGameOver.anchorOffsetX = this.textGameOver.width/2;
        this.textGameOver.anchorOffsetY = this.textGameOver.height/2;
        this.compornent.addChild( this.textGameOver );
        
        this.textScore = Util.myText(Game.width/2, Game.height/2 + 50, "SCORE : " + Score.I.score, 80, 1, this.textColor, true);
        this.textScore.anchorOffsetX = this.textScore.width/2;
        this.textScore.anchorOffsetY = this.textScore.height/2;
        this.compornent.addChild( this.textScore );

        if( Score.I.score >= Score.I.bestScore ){
            Util.saveLocalStrage("bestScore",Score.I.score);
            //window.localStorage.setItem("bestScore", Score.I.score.toFixed() ); // string
        }
        UILayer.display.once(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => this.tap(e), this);
    }

    addDestroyMethod() {
        if(this.compornent){
            this.compornent.removeChildren();
        }
/*        this.compornent.removeChild( this.textGameOver );
        this.compornent.removeChild( this.textScore );*/
        this.textGameOver = null;
        this.textScore = null;
    }
    
    updateContent() {

     }

    tap(e:egret.TouchEvent){
        GameOver.gameOverFlag = false;
        GameObject.transit = Game.init;
        this.destroy();
    }
    
}