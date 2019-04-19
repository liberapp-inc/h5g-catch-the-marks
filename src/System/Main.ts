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

        /* new メソッドを記入*/
        new GameStage();
        new UILayer();
        new Background();

    }


}


class Background extends GameCompornent{

    static I : Background = null;
    color :number = Util.color(0,0,0);
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