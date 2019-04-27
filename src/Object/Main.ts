enum ColorPallet{
    BULE = 0x45d9fd,
    WHITE = 0xf4f4f4,
    RED = 0xee2560,
    BLACK = 0x08182b,
}

class Main extends eui.UILayer {

    public constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
    }
 
    private addToStage() {

        GameObject.init( this.stage );
        Util.init(this);
        Game.init();
        egret.startTick(this.tickLoop, this);
    }

    tickLoop(timeStamp:number):boolean{
        GameObject.update();
        return false;
    }

}

class Game{

    static height: number;
    static width: number;

    static init() {
        
        this.height = egret.MainContext.instance.stage.stageHeight;
        this.width  = egret.MainContext.instance.stage.stageWidth;
        Mark.circleGeneratePos = [Game.width/1.5,Game.height/2];
        Mark.crossGeneratePos = [Game.width/3.0,Game.height/2];
        Mark.circleRadius  = Game.width/20;
        Mark.crossWidth  = Game.width/26;
        Mark.moveSpeed = 2;
        GameOver.gameOverFlag = false;
        GameScene.stageLevel = 1;

        /* new メソッドを記入*/
        new GameStage();
        new UILayer();
        new Background();
        //new Score(0,0,0,0, ColorPallet.BLACK);
        new Level(0,0,0,0, ColorPallet.BLACK);
        new Frame(Game.width/12,Game.height/9.5,Game.width/1.2,Game.height/1.2, ColorPallet.BLACK);
        GameScene.create();
        new PushMark(0,0,Game.width,Game.width,ColorPallet.BLACK);

        
    }


}


class Background extends GameCompornent{

    static I : Background = null;
    color :number = ColorPallet.WHITE;
    constructor() {
        super(0,0,Game.width,Game.height);
        Background.I = this;
        this.shapes[0] = new egret.Shape();
        this.shapes[0].graphics.beginFill(this.color);
        this.shapes[0].graphics.drawRect(0, 0, Game.width, Game.height);
        this.shapes[0].graphics.endFill();
        this.compornent.addChild(this.shapes[0]);
    }
    
    updateContent() {}
}

