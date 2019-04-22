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
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, width, height, lineColor) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.lineColor = lineColor;
        _this.setShape(x, y, width / 2);
        return _this;
    }
    Circle.prototype.setShape = function (x, y, radius) {
        var shape = new egret.Shape();
        shape.x = x;
        shape.y = y;
        shape.graphics.lineStyle(6, this.lineColor);
        shape.graphics.drawCircle(0, 0, radius);
        this.compornent.addChild(shape);
        GameStage.display.addChild(this.compornent);
        this.shapes.push(shape);
    };
    Circle.prototype.updateContent = function () { };
    return Circle;
}(GameCompornent));
__reflect(Circle.prototype, "Circle");
//# sourceMappingURL=Circle.js.map