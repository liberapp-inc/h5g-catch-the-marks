var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//UIコンポーネントを描画するレイヤー
var UILayer = (function () {
    function UILayer() {
        //super();
        this.setContainer();
        UILayer.index = GameObject.display.getChildIndex(UILayer.display);
        UILayer.display.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.t, this);
        UILayer.display.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.push, this);
        UILayer.display.addEventListener(egret.TouchEvent.TOUCH_END, this.push, this);
        UILayer.display.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.push, this);
    }
    UILayer.prototype.setContainer = function () {
        UILayer.display = new eui.UILayer();
        GameObject.display.addChild(UILayer.display);
    };
    UILayer.prototype.push = function (e) {
        if (e.touchDown) {
            UILayer.pushFlag = true;
            console.log("push");
        }
        else {
            UILayer.pushFlag = false;
            console.log("release");
        }
    };
    UILayer.prototype.t = function () {
        console.log("t");
        GameObject.transit = Game.init;
    };
    UILayer.prototype.addDestroyMethod = function () {
        if (UILayer.display) {
            UILayer.display.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.push, this);
            UILayer.display.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.push, this);
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