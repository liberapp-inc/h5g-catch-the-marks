//UIコンポーネントを描画するレイヤー
class UILayer {

    static display: eui.UILayer = null;
    static index :number;
    static pushFlag : boolean = false;

    constructor(){
        //super();
        this.setContainer();
        UILayer.index = GameObject.display.getChildIndex(UILayer.display) ;
        UILayer.display.addEventListener( egret.TouchEvent.TOUCH_BEGIN, this.push, this );
        UILayer.display.addEventListener( egret.TouchEvent.TOUCH_MOVE, this.move, this );
        UILayer.display.addEventListener( egret.TouchEvent.TOUCH_END, this.push, this );
        UILayer.display.addEventListener( egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.out, this );
    }

    setContainer(){
        UILayer.display = new eui.UILayer();
        GameObject.display.addChild(UILayer.display);
    }

    push(e : egret.TouchEvent){
        if(!GameOver.gameOverFlag){

            if(e.touchDown){
                UILayer.pushFlag = true;
                PushMark.I.push(e.stageX, e.stageY);
            }
            else{
                UILayer.pushFlag = false;
                PushMark.I.release();
            }
        }

    }

    move(e : egret.TouchEvent){
        if(!GameOver.gameOverFlag){

            if(e.touchDown){
                UILayer.pushFlag = true;
                PushMark.I.move(e.stageX, e.stageY);
            }
            else{
                UILayer.pushFlag = false;
                PushMark.I.release();
            }
        }
    }

    out(e : egret.TouchEvent){
        if(!GameOver.gameOverFlag){
            UILayer.pushFlag = false;

        }
    }


    addDestroyMethod(){
        if(UILayer.display){
            UILayer.display.removeChildren();
            UILayer.display.removeEventListener( egret.TouchEvent.TOUCH_BEGIN, this.push, this );
            UILayer.display.removeEventListener( egret.TouchEvent.TOUCH_MOVE, this.move, this );
            UILayer.display.removeEventListener( egret.TouchEvent.TOUCH_END, this.push, this );
            UILayer.display.removeEventListener( egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.push, this );
            GameObject.display.removeChild(UILayer.display);
            UILayer.display =null;
        }
    }

    updateContent(){}


}

