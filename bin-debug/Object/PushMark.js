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
var PushMark = (function (_super) {
    __extends(PushMark, _super);
    function PushMark(x, y, width, height, lineColor) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.expansion = true;
        PushMark.I = _this;
        _this.setCircleShape(x, y, width / 2);
        return _this;
    }
    PushMark.prototype.setCircleShape = function (x, y, radius) {
        var shape = new egret.Shape();
        shape.x = x;
        shape.y = y;
        shape.graphics.lineStyle(6, this.lineColor);
        shape.graphics.drawCircle(0, 0, radius);
        this.compornent.addChild(shape);
        GameStage.display.addChild(this.compornent);
        this.shapes.push(shape);
    };
    PushMark.prototype.push = function (x, y) {
        this.compornent.scaleX = this.compornent.scaleY = 0.01;
        this.compornent.x = x;
        this.compornent.y = y;
    };
    PushMark.prototype.release = function () {
        this.expansion = true;
        this.compornent.scaleX = this.compornent.scaleY = 0;
    };
    PushMark.prototype.switchExpansion = function () {
        if (UILayer.pushFlag) {
            if (this.compornent.scaleX > 1) {
                this.expansion = false;
            }
            else if (this.compornent.scaleX < 0.01) {
                this.expansion = true;
            }
            if (this.expansion) {
                this.compornent.scaleX = this.compornent.scaleY += 0.01;
            }
            else {
                this.compornent.scaleX = this.compornent.scaleY -= 0.01;
            }
        }
    };
    PushMark.prototype.updateContent = function () {
        this.switchExpansion();
    };
    PushMark.I = null;
    return PushMark;
}(UICompornent));
__reflect(PushMark.prototype, "PushMark");
//# sourceMappingURL=PushMark.js.map