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
var Box = (function (_super) {
    __extends(Box, _super);
    function Box(x, y, width, height, color) {
        var _this = _super.call(this) || this;
        _this.setShape(x, y, width, height, color);
        return _this;
    }
    Box.prototype.setShape = function (x, y, width, height, color) {
        if (this.shapes[0]) {
            GameObject.display.removeChild(this.shapes[0]);
        }
        this.shapes[0] = new egret.Shape();
        this.shapes[0].anchorOffsetX += width / 2;
        this.shapes[0].anchorOffsetY += height / 2;
        this.shapes[0].x = x;
        this.shapes[0].y = y;
        this.shapes[0].graphics.beginFill(color);
        this.shapes[0].graphics.drawRect(0, 0, width, height);
        this.shapes[0].graphics.endFill();
        GameObject.display.addChild(this.shapes[0]);
    };
    return Box;
}(GameObject));
__reflect(Box.prototype, "Box");
var PhysicsBox = (function (_super) {
    __extends(PhysicsBox, _super);
    function PhysicsBox(x, y, width, height, color) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        _this.color = color;
        _this.setShape(x, y, width, height, color);
        return _this;
    }
    PhysicsBox.prototype.setBody = function (x, y, width, height) {
        this.body = new p2.Body({ mass: 1, position: [x, y], type: p2.Body.STATIC });
        this.bodyShape = new p2.Box({
            width: width, height: height
        });
        this.body.addShape(this.bodyShape);
        CreateWorld.world.addBody(this.body);
    };
    PhysicsBox.prototype.setShape = function (x, y, width, height, color) {
        if (this.shapes[0]) {
            GameObject.display.removeChild(this.shapes[0]);
        }
        this.shapes[0] = new egret.Shape();
        this.shapes[0].anchorOffsetX += width / 2;
        this.shapes[0].anchorOffsetY += height / 2;
        this.shapes[0].x = x;
        this.shapes[0].y = y;
        this.shapes[0].graphics.beginFill(color);
        this.shapes[0].graphics.drawRect(0, 0, width, height);
        this.shapes[0].graphics.endFill();
        GameObject.display.addChild(this.shapes[0]);
    };
    return PhysicsBox;
}(PhysicsObject));
__reflect(PhysicsBox.prototype, "PhysicsBox");
var MyBox = (function (_super) {
    __extends(MyBox, _super);
    function MyBox(x, y, width, height, color) {
        return _super.call(this, x, y, width, height, color) || this;
    }
    MyBox.prototype.updateContent = function () { };
    return MyBox;
}(Box));
__reflect(MyBox.prototype, "MyBox");
//# sourceMappingURL=Box.js.map