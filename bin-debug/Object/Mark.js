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
var Mark = (function (_super) {
    __extends(Mark, _super);
    function Mark(x, y, width, height, lineColor) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.lineColor = lineColor;
        _this.length = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
        return _this;
    }
    Mark.prototype.setCircleShape = function (x, y, radius) {
        var shape = new egret.Shape();
        shape.x = x;
        shape.y = y;
        shape.graphics.lineStyle(6, this.lineColor);
        shape.graphics.drawCircle(0, 0, radius);
        this.compornent.addChild(shape);
        GameStage.display.addChild(this.compornent);
        this.shapes.push(shape);
    };
    Mark.prototype.setCrossShape = function (x, y, width, height, length, degree, lineWidth, lineColor) {
        var shape = Util.setLine(x, y, length, degree, lineWidth, lineColor);
        this.compornent.addChild(shape);
        var shape2 = Util.setLine(x, y + height, length, 360 - degree, lineWidth, lineColor);
        this.compornent.addChild(shape2);
        GameStage.display.addChild(this.compornent);
        this.shapes.push(shape);
        this.shapes.push(shape2);
    };
    Mark.moveSpeed = 1;
    return Mark;
}(GameCompornent));
__reflect(Mark.prototype, "Mark");
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, width, height, lineColor) {
        var _this = _super.call(this, x, y, width, height, lineColor) || this;
        _this.setCircleShape(x, y, width / 2);
        return _this;
    }
    Circle.prototype.updateContent = function () { };
    return Circle;
}(Mark));
__reflect(Circle.prototype, "Circle");
var Cross = (function (_super) {
    __extends(Cross, _super);
    function Cross(x, y, width, height, lineColor) {
        var _this = _super.call(this, x, y, width, height, lineColor) || this;
        _this.setCrossShape(x, y, width, height, _this.length, 45, 6, lineColor);
        return _this;
    }
    Cross.prototype.updateContent = function () { };
    return Cross;
}(Mark));
__reflect(Cross.prototype, "Cross");
//# sourceMappingURL=Mark.js.map