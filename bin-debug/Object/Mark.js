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
        _this.circle = false;
        _this.special = false;
        _this.lineColor = lineColor;
        _this.length = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
        //this.setMoveVector(Mark.moveSpeed, 45);
        _this.setMoveVector(Mark.moveSpeed, Util.randomInt(0, 359));
        Mark.mark.push(_this);
        return _this;
    }
    Mark.prototype.setCircleShape = function (x, y, width, color, fill, lineWidth) {
        var shape = Util.setCircle(x, y, width, color, fill, lineWidth);
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
    //SPアイテムを取得した時に×マークを〇にする
    Mark.prototype.changeShape = function (width, color, fill, lineWidth) {
        this.shapes = [];
        this.compornent.removeChildren();
        var shape = Util.setCircle(0, 0, width, color, fill, lineWidth);
        this.compornent.addChild(shape);
        this.shapes.push(shape);
    };
    Mark.prototype.reverseShape = function (x, y, width, height, length, degree, lineWidth, lineColor) {
        this.shapes = [];
        this.compornent.removeChildren();
        var shape = Util.setLine(0, height, length, degree, lineWidth, lineColor);
        this.compornent.addChild(shape);
        var shape2 = Util.setLine(0, 0, length, 360 - degree, lineWidth, lineColor);
        this.compornent.addChild(shape2);
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
            if (this.special) {
                this.destroy();
            }
            else if (Bonus.bonusFlag && !this.circle) {
                this.destroy();
            }
            else if (!this.circle && !this.special) {
                if (!GameOver.gameOverFlag) {
                    console.log("x" + this.compornent.x + "y" + this.compornent.y);
                    if (!GameScene.nowGenerate) {
                        new GameOver(0, 0, 0, 0);
                    }
                }
            }
            else if (this.circle && !this.special) {
                this.destroy();
                GameScene.catchCircle += 1;
                if (GameScene.circleNumber == GameScene.catchCircle) {
                    if (Bonus.bonusFlag) {
                        Bonus.I.stopBonus();
                        Bonus.bonusFlag = false;
                    }
                    //これがないと、大きな円で〇を消したとき、次のステージで生成された×や〇にhit判定が入ってしまう。
                    PushMark.I.compornent.scaleX = PushMark.I.compornent.scaleY = 0;
                    PushMark.I.compornent.x = PushMark.I.compornent.y = 0;
                    GameScene.stageLevel += 1;
                    if (Mark.moveSpeed < 10) {
                        Mark.moveSpeed += 0.1;
                    }
                    if (GameScene.circleRate > 70) {
                        GameScene.circleRate -= 0.1;
                    }
                    Mark.mark.forEach(function (m) {
                        m.destroy();
                    });
                    GameScene.create();
                }
            }
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
        if (!GameOver.gameOverFlag) {
            if (!UILayer.pushFlag) {
                this.checkHit();
            }
            else {
                //push中にバツにあたったらゲームオーバー
                if (this.isHit && !this.circle && !Bonus.bonusFlag) {
                    if (!GameOver.gameOverFlag && !GameScene.nowGenerate) {
                        UILayer.pushFlag = false;
                        PushMark.I.release();
                        this.reverseShape(Mark.crossGeneratePos[0], Mark.crossGeneratePos[1], Mark.crossWidth, Mark.crossWidth, this.length, 45, 6, ColorPallet.BULE);
                        new GameOver(0, 0, 0, 0);
                    }
                }
            }
            this.move();
            this.reflect();
        }
    };
    Mark.mark = [];
    Mark.moveSpeed = 2;
    return Mark;
}(GameCompornent));
__reflect(Mark.prototype, "Mark");
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, width, height, lineColor) {
        var _this = _super.call(this, x, y, width, height, lineColor) || this;
        _this.circle = true;
        _this.setCircleShape(0, 0, width, _this.lineColor, false, 6);
        return _this;
    }
    return Circle;
}(Mark));
__reflect(Circle.prototype, "Circle");
var Cross = (function (_super) {
    __extends(Cross, _super);
    function Cross(x, y, width, height, lineColor) {
        var _this = _super.call(this, x, y, width, height, lineColor) || this;
        _this.circle = false;
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
        _this.circle = true;
        _this.special = true;
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
    Special.prototype.addDestroyMethod = function () {
        var _this = this;
        if (!GameOver.gameOverFlag) {
            if (!Bonus.bonusFlag) {
                new Bonus(0, 0, 0, 0);
            }
        }
        Mark.mark.forEach(function (m) {
            if (m.compornent && !m.circle && Bonus.bonusFlag) {
                m.changeShape(_this.compornent.width, ColorPallet.BLACK, false, 6);
            }
        });
    };
    return Special;
}(Mark));
__reflect(Special.prototype, "Special");
//# sourceMappingURL=Mark.js.map