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
var Bonus = (function (_super) {
    __extends(Bonus, _super);
    function Bonus(x, y, width, height) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.count = 0;
        Bonus.I = _this;
        _this.count = 0;
        Bonus.bonusFlag = true;
        Bonus.timer = new egret.Timer(1000, 0);
        Bonus.timer.addEventListener(egret.TimerEvent.TIMER, _this.timeMethod, _this);
        Bonus.timer.start();
        return _this;
    }
    Bonus.prototype.timeMethod = function () {
        this.count += 1;
        if (this.count == 4) {
            this.stopMethod();
        }
    };
    Bonus.prototype.stopMethod = function () {
        Bonus.timer.stop();
        Bonus.timer.removeEventListener(egret.TimerEvent.TIMER, this.timeMethod, this);
        if (Bonus.bonusFlag) {
            Mark.mark.forEach(function (m) {
                if (!m.circle) {
                    MyTween.bonusFlash(m.compornent, 20, m);
                    //m.reverseShape(Mark.crossGeneratePos[0],Mark.crossGeneratePos[1],Mark.crossWidth,Mark.crossWidth, m.length,45,6,m.lineColor);
                }
            });
        }
        //Bonus.bonusFlag =false;
        this.count = 0;
        this.destroy();
    };
    Bonus.prototype.stopBonus = function () {
        if (Bonus.bonusFlag && !GameOver.gameOverFlag) {
            Bonus.timer.stop();
            Bonus.timer.removeEventListener(egret.TimerEvent.TIMER, this.timeMethod, this);
            Mark.mark.forEach(function (m) {
                if (!m.circle) {
                    m.reverseShape(Mark.crossGeneratePos[0], Mark.crossGeneratePos[1], Mark.crossWidth, Mark.crossWidth, m.length, 45, 6, ColorPallet.BLACK);
                    egret.Tween.removeTweens(m.compornent);
                    //Bonus.bonusFlag =false;
                }
            });
        }
    };
    Bonus.prototype.addDestroyMethod = function () {
        Bonus.timer.stop();
        Bonus.timer.removeEventListener(egret.TimerEvent.TIMER, this.timeMethod, this);
        Bonus.bonusFlag = false;
    };
    Bonus.prototype.updateContent = function () { };
    Bonus.I = null;
    Bonus.bonusFlag = false;
    return Bonus;
}(UICompornent));
__reflect(Bonus.prototype, "Bonus");
//# sourceMappingURL=Bonus.js.map