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
        return _this;
    }
    UILayer.prototype.setContainer = function () {
        UILayer.display = new eui.UILayer();
        GameObject.display.addChild(UILayer.display);
    };
    UILayer.prototype.addDestroyMethod = function () {
        if (UILayer.display) {
            GameObject.display.removeChild(UILayer.display);
            UILayer.display = null;
        }
    };
    UILayer.prototype.updateContent = function () { };
    UILayer.display = null;
    return UILayer;
}(GameObject));
__reflect(UILayer.prototype, "UILayer");
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello(x, y, width, height) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.method();
        return _this;
    }
    Hello.prototype.method = function () {
        var hello = new eui.Label();
        hello.text = "Hello World";
        this.compornent.addChild(hello);
    };
    Hello.prototype.updateContent = function () { };
    return Hello;
}(UICompornent));
__reflect(Hello.prototype, "Hello");
//# sourceMappingURL=UILayer.js.map