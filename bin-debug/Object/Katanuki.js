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
var Katanuki = (function (_super) {
    __extends(Katanuki, _super);
    function Katanuki(x, y, width, height, color) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.baseDisplay = null;
        _this.baseShapes = [];
        _this.baseColor = 0xedb1b3;
        _this.shadowColor = Util.color(0, 0, 0);
        _this.pushFlag = false;
        _this.expansionFlag = true;
        _this.setCompornentStatus(x, y, width, height);
        _this.setBase(x, y, width, height, _this.baseColor);
        return _this;
    }
    Katanuki.prototype.setCompornentStatus = function (x, y, width, height) {
        this.compornent.anchorOffsetX += width / 2;
        this.compornent.anchorOffsetY += height / 2;
        this.compornent.x = x;
        this.compornent.y = y;
        this.compornent.touchEnabled = true;
    };
    Katanuki.prototype.setBase = function (x, y, width, height, baseColor) {
        this.baseColor = baseColor;
        this.baseDisplay = new egret.DisplayObjectContainer();
        this.baseDisplay.width = width;
        this.baseDisplay.height = height;
        this.baseDisplay.anchorOffsetX += width / 2;
        this.baseDisplay.anchorOffsetY += height / 2;
        this.baseDisplay.x = x;
        this.baseDisplay.y = y;
        GameStage.display.addChildAt(this.baseDisplay, GameStage.display.getChildIndex(this.compornent));
        var baseShape = Util.setRect(x, y, width, height, baseColor, 30);
        this.baseDisplay.addChild(baseShape);
        this.baseShapes.push(baseShape);
    };
    Katanuki.prototype.setRect = function (x, y, width, height, color, round) {
        var shape = Util.setRect(x, y, width, height, color, round);
        this.shapes.push(shape);
        this.compornent.addChild(shape);
    };
    Katanuki.prototype.setCircle = function (x, y, width, height, color, radius) {
    };
    Katanuki.prototype.addDestroyMethod = function () {
        var _this = this;
        if (this.compornent.hasEventListener(egret.TouchEvent.TOUCH_MOVE)) {
            this.compornent.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.push, this);
        }
        if (this.baseDisplay) {
            this.baseShapes.forEach(function (s) {
                _this.baseDisplay.removeChild(s);
                s = null;
            });
            this.compornent.removeChild(this.baseDisplay);
            this.baseDisplay = null;
        }
    };
    Katanuki.prototype.updateContent = function () { };
    return Katanuki;
}(GameCompornent));
__reflect(Katanuki.prototype, "Katanuki");
var Rect = (function (_super) {
    __extends(Rect, _super);
    function Rect(x, y, width, height, color, round) {
        var _this = _super.call(this, x, y, width, height, color) || this;
        _this.setRect(x, y, width * 0.5, height * 0.5, color, round);
        return _this;
    }
    Rect.prototype.push = function () { };
    Rect.prototype.updateContent = function () {
        if (UILayer.pushFlag) {
            if (this.compornent.scaleX >= 1) {
                this.compornent.scaleX = this.compornent.scaleY = 1;
                this.expansionFlag = false;
            }
            else if (this.compornent.scaleX <= 0.1) {
                this.compornent.scaleX = this.compornent.scaleY = 0.1;
                this.expansionFlag = true;
            }
            if (this.expansionFlag) {
                this.compornent.scaleX = this.compornent.scaleY += 0.01;
            }
            else {
                this.compornent.scaleX = this.compornent.scaleY -= 0.01;
            }
        }
    };
    return Rect;
}(Katanuki));
__reflect(Rect.prototype, "Rect");
//# sourceMappingURL=Katanuki.js.map