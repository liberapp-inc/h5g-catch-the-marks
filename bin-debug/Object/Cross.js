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
var Cross = (function (_super) {
    __extends(Cross, _super);
    function Cross(x, y, width, height, lineColor) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.lineColor = lineColor;
        _this.length = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
        _this.setShape(x, y, width, height, _this.length, 45, 6, lineColor);
        return _this;
    }
    Cross.prototype.setShape = function (x, y, width, height, length, degree, lineWidth, lineColor) {
        var shape = Util.setLine(x, y, length, degree, lineWidth, lineColor);
        this.compornent.addChild(shape);
        var shape2 = Util.setLine(x, y + height, length, 360 - degree, lineWidth, lineColor);
        this.compornent.addChild(shape2);
        GameStage.display.addChild(this.compornent);
        this.shapes.push(shape);
        this.shapes.push(shape2);
    };
    Cross.prototype.updateContent = function () { };
    return Cross;
}(GameCompornent));
__reflect(Cross.prototype, "Cross");
//# sourceMappingURL=Cross.js.map