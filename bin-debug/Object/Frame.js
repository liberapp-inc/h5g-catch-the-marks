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
var Frame = (function (_super) {
    __extends(Frame, _super);
    function Frame(x, y, width, height, lineColor) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.lineColor = lineColor;
        _this.setShape(x, y, width, height);
        return _this;
    }
    Frame.prototype.setShape = function (x, y, width, height) {
        var shape = new egret.Shape();
        shape.x = x;
        shape.y = y;
        shape.graphics.lineStyle(10, this.lineColor);
        shape.graphics.drawRect(0, 0, width, height);
        this.compornent.addChild(shape);
        GameStage.display.addChild(this.compornent);
        this.shapes.push(shape);
    };
    Frame.prototype.updateContent = function () { };
    return Frame;
}(GameCompornent));
__reflect(Frame.prototype, "Frame");
//# sourceMappingURL=Frame.js.map