var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MyTween = (function () {
    function MyTween() {
    }
    MyTween.bonusFlash = function (object, repeat, objectClass) {
        var count = 0;
        egret.Tween.get(object, {
            loop: true
        })
            .to({ alpha: 0.1 }, 1000 / repeat, egret.Ease.quartIn)
            .to({ alpha: 1.0 }, 1000 / repeat, egret.Ease.quartOut)
            .call(function () {
            count += 1;
            if (count == repeat) {
                objectClass.reverseShape(Mark.crossGeneratePos[0], Mark.crossGeneratePos[1], Mark.crossWidth, Mark.crossWidth, objectClass.length, 45, 6, objectClass.lineColor);
                egret.Tween.removeTweens(object);
                //Bonus.bonusFlag =false;
            }
        });
    };
    return MyTween;
}());
__reflect(MyTween.prototype, "MyTween");
//# sourceMappingURL=MyTween.js.map