//図形などのGameObjectを描画するレイヤー
class GameStage{

    static display : egret.DisplayObjectContainer = null;
    static index :number;

    constructor(){
        //super();
        this.setContainer();
        GameStage.index = GameObject.display.getChildIndex(GameStage.display) ;
/*        GameStage.display.addEventListener( egret.TouchEvent.TOUCH_BEGIN, this.push, this );
        GameStage.display.addEventListener( egret.TouchEvent.TOUCH_MOVE, this.move, this );
        GameStage.display.addEventListener( egret.TouchEvent.TOUCH_END, this.end, this );
        GameStage.display.addEventListener( egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.end, this );*/

    }

/*    push(){
        GameStage.pushFlag = true;     
    }
    move(){
        GameStage.pushFlag = true;
    }
    end(){
        GameStage.pushFlag = false;
    }*/



    setContainer(){
        GameStage.display = new egret.DisplayObjectContainer();
        GameObject.display.addChild(GameStage.display);
    }

    addDestroyMethod(){
        if(GameStage.display){
            GameObject.display.removeChild(GameStage.display);
            GameStage.display =null;
        }
    }

    updateContent(){}

}

