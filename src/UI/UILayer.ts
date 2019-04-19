//UIコンポーネントを描画するレイヤー
class UILayer extends GameObject{

    static display: eui.UILayer = null;
    static index :number;
    static pushFlag : boolean = false;

    constructor(){
        super();
        this.setContainer();
        UILayer.index = GameObject.display.getChildIndex(UILayer.display) ;
        UILayer.display.addEventListener( egret.TouchEvent.TOUCH_BEGIN, this.push, this );
        UILayer.display.addEventListener( egret.TouchEvent.TOUCH_MOVE, this.push, this );
        UILayer.display.addEventListener( egret.TouchEvent.TOUCH_END, this.push, this );
        UILayer.display.addEventListener( egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.push, this );
    }

    setContainer(){
        UILayer.display = new eui.UILayer();
        GameObject.display.addChild(UILayer.display);
    }

    push(e : egret.TouchEvent){
        if(e.touchDown){
            UILayer.pushFlag = true;
            console.log("push");
        }
        else{
            UILayer.pushFlag = false;
            console.log("release");
        }
    }


    addDestroyMethod(){
        if(UILayer.display){
            UILayer.display.removeEventListener( egret.TouchEvent.TOUCH_BEGIN, this.push, this );
            UILayer.display.removeEventListener( egret.TouchEvent.TOUCH_MOVE, this.push, this );
            UILayer.display.removeEventListener( egret.TouchEvent.TOUCH_END, this.push, this );
            UILayer.display.removeEventListener( egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.push, this );
            GameObject.display.removeChild(UILayer.display);
            UILayer.display =null;
        }
    }

    updateContent(){}


}

