// UnityのGameObjectライクなタスク管理クラス
//  update()に毎フレームの処理を書く
//  オブジェクトを破棄するときはdestroy()を呼ぶ
//  破棄のときに後処理が必要なら、onDestroy()に記述
//  生成時の初期化はUnityと違い、constructor()を使う（引数を渡せる）
//  シーンを切り替えたい場合は transitにシーンロード関数を設定（全オブジェクトを破棄してからtransitを実行）
//  compornentはshapeをひとまとめにする用の親コンテナ。継承先でsetCompornentすること

abstract class GameObject {
    
    static objects: GameObject[] = [];
    static display: egret.DisplayObjectContainer;
    static transit:()=>void;

    compornent: egret.DisplayObjectContainer = null;
    shapes :egret.Shape[] = [];
    destroyFlag : boolean = false;

    constructor() {
        GameObject.objects.push(this);
    }


    static init(mainStage: egret.DisplayObjectContainer){
        GameObject.objects = [];
        GameObject.display = mainStage;
    }

    abstract updateContent() : void;

    //オブジェクトを削除
    destroy() { this.destroyFlag = true; }
    
    //shapeの削除など、destroy後に追加処理が必要なら記述
    addDestroyMethod(){}


    protected delete(){

        this.addDestroyMethod();

        if( this.shapes && this.compornent){
            this.shapes.forEach(s => {
                this.compornent.removeChild(s);
                s = null;
            });
            this.shapes = [];
        }
        if(this.compornent){
            GameObject.display.removeChild(this.compornent);
            this.compornent=null;
        }
/*        const newArray : GameObject[] = GameObject.objects.filter(obj => obj.destroyFlag !== true);
        GameObject.objects = newArray;*/
    }

    static allDestroy(){
        GameObject.objects = GameObject.objects.filter( obj => {
            obj.destroy();
            obj.delete();
            return false; 
        });
    }

    //繰り返しメソッド
    static update(){
        GameObject.objects.forEach(obj => obj.updateContent());

        //destroyFlagがtrueならshapeを削除
        GameObject.objects = GameObject.objects.filter( obj =>{
            if( obj.destroyFlag ) obj.delete();
            return ( !obj.destroyFlag );
        } );

        if( GameObject.transit ) {
            GameObject.allDestroy();
            GameObject.transit();
            GameObject.transit = null;
        }

    }
}

abstract class PhysicsObject extends GameObject{

    protected body : p2.Body = null;
    protected bodyShape : p2.Circle | p2.Box = null;
    protected static world : p2.World = null;

    constructor(){
        super();
    }

    addDestroyMethod(){
        CreateWorld.world.removeBody(this.body);
    }


}

//GameStageに描画する用のコンポーネント
abstract class GameCompornent extends GameObject{

    constructor(x : number, y : number, width : number, height : number){
        super();
        this.setCompornent(x,y,width,height);
    }

    setCompornent(x : number, y : number, width : number, height : number){
        if(width <= 0){
            width = 1;
            console.log("widthが0以下です");
        }
        if(height <= 0){
            height = 1;
            console.log("heightが0以下です");
        }
        this.compornent = new egret.DisplayObjectContainer();
        this.compornent.width = width;
        this.compornent.height = height;
        GameStage.display.addChild(this.compornent);
    }

    //継承先でupdateContent(){}を追加すること

    //addDestroyMethod(){}

}

//UILayerに描画する用のコンポーネント
abstract class UICompornent extends GameObject{

    static compornents: UICompornent[] = [];

    constructor(x : number, y : number, width : number, height : number){
        super();
        this.setCompornent(x,y,width,height);
    }

    setCompornent(x : number, y : number, width : number, height : number){
        if(width <= 0){
            width = 1;
            console.log("widthが0以下です");
        }
        if(height <= 0){
            height = 1;
            console.log("heightが0以下です");
        }
        this.compornent = new egret.DisplayObjectContainer();
        this.compornent.width = width;
        this.compornent.height = height;
        UILayer.display.addChild(this.compornent);
    }

    //継承先でupdateContent(){}を追加すること

    //addDestroyMethod(){}


}