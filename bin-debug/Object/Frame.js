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
var FrameLine;
(function (FrameLine) {
    FrameLine[FrameLine["UP"] = 0] = "UP";
    FrameLine[FrameLine["DOWN"] = 1] = "DOWN";
    FrameLine[FrameLine["RIGHT"] = 2] = "RIGHT";
    FrameLine[FrameLine["LEFT"] = 3] = "LEFT";
})(FrameLine || (FrameLine = {}));
var Frame = (function (_super) {
    __extends(Frame, _super);
    function Frame(x, y, width, height, lineColor) {
        var _this = _super.call(this, x, y, width, height) || this;
        Frame.I = _this;
        _this.lineColor = lineColor;
        _this.setShape(x, y, width, height, 8);
        return _this;
    }
    Frame.prototype.setShape = function (x, y, width, height, lineWidth) {
        var shape = new egret.Shape();
        shape.graphics.lineStyle(lineWidth, this.lineColor);
        shape.graphics.drawRect(0, 0, width, height);
        this.compornent.addChild(shape);
        GameStage.display.addChild(this.compornent);
        this.shapes.push(shape);
    };
    Frame.prototype.updateContent = function () { };
    Frame.I = null;
    return Frame;
}(GameCompornent));
__reflect(Frame.prototype, "Frame");
//# sourceMappingURL=Frame.js.map