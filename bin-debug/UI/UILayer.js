var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//UIコンポーネントを描画するレイヤー
var UILayer = (function () {
    function UILayer() {
        //super();
        this.setContainer();
        UILayer.index = GameObject.display.getChildIndex(UILayer.display);
        UILayer.display.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.push, this);
        //UILayer.display.addEventListener( egret.TouchEvent.TOUCH_MOVE, this.push, this );
        UILayer.display.addEventListener(egret.TouchEvent.TOUCH_END, this.push, this);
        UILayer.display.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.out, this);
    }
    UILayer.prototype.setContainer = function () {
        UILayer.display = new eui.UILayer();
        GameObject.display.addChild(UILayer.display);
    };
    UILayer.prototype.push = function (e) {
        if (!GameOver.gameOverFlag) {
            if (e.touchDown) {
                UILayer.pushFlag = true;
                PushMark.I.push(e.stageX, e.stageY);
            }
            else {
                UILayer.pushFlag = false;
                PushMark.I.release();
            }
        }
    };
    UILayer.prototype.out = function (e) {
        if (!GameOver.gameOverFlag) {
            UILayer.pushFlag = false;
        }
    };
    UILayer.prototype.addDestroyMethod = function () {
        if (UILayer.display) {
            UILayer.display.removeChildren();
            UILayer.display.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.push, this);
            //UILayer.display.removeEventListener( egret.TouchEvent.TOUCH_MOVE, this.push, this );
            UILayer.display.removeEventListener(egret.TouchEvent.TOUCH_END, this.push, this);
            UILayer.display.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.push, this);
            GameObject.display.removeChild(UILayer.display);
            UILayer.display = null;
        }
    };
    UILayer.prototype.updateContent = function () { };
    UILayer.display = null;
    UILayer.pushFlag = false;
    return UILayer;
}());
__reflect(UILayer.prototype, "UILayer");
//# sourceMappingURL=UILayer.js.map