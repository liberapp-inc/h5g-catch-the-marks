var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
//UIコンポーネントを描画するレイヤー
var UILayer = (function (_super) {
    __extends(UILayer, _super);
    function UILayer() {
        var _this = _super.call(this) || this;
        _this.setContainer();
        UILayer.index = GameObject.display.getChildIndex(UILayer.display);
        UILayer.display.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.push, _this);
        //UILayer.display.addEventListener( egret.TouchEvent.TOUCH_MOVE, this.push, this );
        UILayer.display.addEventListener(egret.TouchEvent.TOUCH_END, _this.push, _this);
        UILayer.display.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, _this.out, _this);
        return _this;
    }
    UILayer.prototype.setContainer = function () {
        UILayer.display = new eui.UILayer();
        GameObject.display.addChild(UILayer.display);
    };
    UILayer.prototype.push = function (e) {
        if (e.touchDown) {
            UILayer.pushFlag = true;
            PushMark.I.push(e.stageX, e.stageY);
            console.log("push");
        }
        else {
            UILayer.pushFlag = false;
            PushMark.I.release();
            console.log("release");
        }
    };
    UILayer.prototype.out = function (e) {
        UILayer.pushFlag = false;
        console.log("out");
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
}(GameObject));
__reflect(UILayer.prototype, "UILayer");
//# sourceMappingURL=UILayer.js.map