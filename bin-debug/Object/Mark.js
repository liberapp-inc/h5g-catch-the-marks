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
        _this.isHit = false;
        _this.moveVector = [];
        _this.lineColor = lineColor;
        _this.length = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
        //this.setMoveVector(Mark.moveSpeed, 45);
        _this.setMoveVector(Mark.moveSpeed, Util.randomInt(0, 359));
        Mark.mark.push(_this);
        return _this;
    }
    Mark.prototype.setCircleShape = function (x, y, radius) {
        var shape = new egret.Shape();
        /*        shape.x = x;
                shape.y = y;*/
        shape.graphics.lineStyle(6, this.lineColor);
        shape.graphics.drawCircle(0, 0, radius);
        this.compornent.addChild(shape);
        GameStage.display.addChild(this.compornent);
        this.shapes.push(shape);
    };
    Mark.prototype.setCrossShape = function (x, y, width, height, length, degree, lineWidth, lineColor) {
        var shape = Util.setLine(0, height, length, degree, lineWidth, lineColor);
        this.compornent.addChild(shape);
        var shape2 = Util.setLine(0, 0, length, 360 - degree, lineWidth, lineColor);
        this.compornent.addChild(shape2);
        GameStage.display.addChild(this.compornent);
        this.shapes.push(shape);
        this.shapes.push(shape2);
    };
    Mark.prototype.setMoveVector = function (size, degree) {
        this.moveVector = Util.vector(size, degree);
    };
    Mark.prototype.move = function () {
        this.compornent.x += this.moveVector[0];
        this.compornent.y += this.moveVector[1]; //Egret はy軸が下向き
    };
    Mark.prototype.checkHit = function () {
        if (this.isHit) {
            this.destroy();
        }
    };
    Mark.prototype.reflect = function () {
        if (this.compornent.x < Frame.I.compornent.x || this.compornent.x > Frame.I.compornent.x + Frame.I.compornent.width) {
            this.moveVector[0] *= -1;
        }
        if (this.compornent.y < Frame.I.compornent.y || this.compornent.y > Frame.I.compornent.y + Frame.I.compornent.height) {
            this.moveVector[1] *= -1;
        }
    };
    Mark.prototype.updateContent = function () {
        if (this.isHit && !UILayer.pushFlag) {
            this.destroy();
        }
        this.move();
        this.reflect();
        //this.checkHit();
    };
    Mark.moveSpeed = 2;
    Mark.mark = [];
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
    return Cross;
}(Mark));
__reflect(Cross.prototype, "Cross");
var Special = (function (_super) {
    __extends(Special, _super);
    function Special(x, y, width, height, lineColor) {
        var _this = _super.call(this, x, y, width, height, lineColor) || this;
        _this.lineColor = lineColor;
        _this.radius = width / 2;
        _this.setCircleShape(x, y, width / 2);
        return _this;
    }
    Special.prototype.setCircleShape = function (x, y, radius) {
        var shape = new egret.Shape();
        shape.graphics.lineStyle(6, this.lineColor);
        shape.graphics.beginFill(this.lineColor);
        shape.graphics.drawCircle(0, 0, radius);
        shape.graphics.endFill();
        this.compornent.addChild(shape);
        GameStage.display.addChild(this.compornent);
        this.shapes.push(shape);
    };
    Special.prototype.changeShape = function (radius) {
        var shape = new egret.Shape();
        shape.graphics.lineStyle(6, this.lineColor);
        shape.graphics.drawCircle(0, 0, radius);
        return shape;
    };
    Special.prototype.addDestroyMethod = function () {
        var _this = this;
        Mark.mark.forEach(function (m) {
            if (m.compornent) {
                m.shapes = [];
                m.compornent.removeChildren();
                var s = _this.changeShape(_this.radius);
                m.shapes.push(s);
                m.compornent.addChild(s);
            }
            /*            m.shapes.forEach(s =>{
                        });*/
        });
    };
    return Special;
}(Mark));
__reflect(Special.prototype, "Special");
//# sourceMappingURL=Mark.js.map