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
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball(x, y, width, height, radius) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.radius = null;
        //Ball.I = this;
        _this.setShape(x, y, radius);
        return _this;
    }
    Ball.prototype.setShape = function (x, y, radius) {
        if (this.shapes[0]) {
            GameObject.display.removeChild(this.shapes[0]);
        }
        this.shapes[0] = new egret.Shape();
        this.shapes[0].x = x;
        this.shapes[0].y = y;
        this.shapes[0].graphics.beginFill(0xff0000);
        this.shapes[0].graphics.drawCircle(0, 0, radius);
        this.shapes[0].graphics.endFill();
        GameObject.display.addChild(this.shapes[0]);
    };
    Ball.prototype.updateContent = function () {
    };
    Ball.I = null; // singleton instance
    return Ball;
}(GameCompornent));
__reflect(Ball.prototype, "Ball");
var PhysicsBall = (function (_super) {
    __extends(PhysicsBall, _super);
    function PhysicsBall(x, y, radius) {
        var _this = _super.call(this) || this;
        _this.radius = null;
        //PhysicsBall.I = this;
        _this.setBody(x, y, radius);
        _this.setShape(x, y, radius);
        return _this;
    }
    PhysicsBall.prototype.setBody = function (x, y, radius) {
        this.body = new p2.Body({ mass: 1, position: [x, y] });
        this.bodyShape = new p2.Circle({
            radius: radius, fixedRotation: true
        });
        this.body.addShape(this.bodyShape);
        CreateWorld.world.addBody(this.body);
    };
    PhysicsBall.prototype.setShape = function (x, y, radius) {
        if (this.shapes[0]) {
            GameObject.display.removeChild(this.shapes[0]);
        }
        this.shapes[0] = new egret.Shape();
        this.shapes[0].x = x;
        this.shapes[0].y = y;
        this.shapes[0].graphics.beginFill(0xff0000);
        this.shapes[0].graphics.drawCircle(0, 0, radius);
        this.shapes[0].graphics.endFill();
        GameObject.display.addChild(this.shapes[0]);
    };
    return PhysicsBall;
}(PhysicsObject));
__reflect(PhysicsBall.prototype, "PhysicsBall");
//# sourceMappingURL=Ball.js.map