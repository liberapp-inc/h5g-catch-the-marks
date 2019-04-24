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

        SaveData.load();
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

        /* new メソッドを記入*/
        new GameStage();
        new UILayer();
        new Background();
        new Score(0,0,0,0, ColorPallet.BLACK);
        new Frame(Game.width/12,Game.height/9.5,Game.width/1.2,Game.height/1.2, ColorPallet.BLACK);
        for(let i = 0; i < 20; i++){
        new Circle(Game.width/2,Game.height/2,Game.width/20,Game.height/20, ColorPallet.RED);
        new Cross(Game.width/2.5,Game.height/2,Game.width/26,Game.width/26, ColorPallet.BULE);

        }
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

class CreateWorld extends PhysicsObject{

    static I : CreateWorld = null;

    constructor() {
        super();
        CreateWorld.I = this;
        CreateWorld.world.on("beginContact",  this.collision, this);

    }
    createWorld(){
        CreateWorld.world = new p2.World();
        CreateWorld.world.sleepMode = p2.World.BODY_SLEEPING;
        CreateWorld.world.gravity = [0, 9.8];

    }

    static worldBegin(dt : number) :boolean{
       
        CreateWorld.world.step(1/60, dt/1000, 10);
        return false;
    }

    //コリジョンイベントはここにまとめる
    private collision(evt : any){

    }

    addDestroyMethod(){CreateWorld.world.clear();}

    updateContent(){}


}