var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameScene = (function () {
    function GameScene() {
    }
    GameScene.create = function () {
        GameScene.nowGenerate = true;
        /*        const newArray : Mark[] = Mark.mark.filter(obj => obj.destroyFlag !== true);
                Mark.mark = newArray;*/
        GameScene.circleNumber = 0;
        GameScene.catchCircle = 0;
        /*        let specialGenerate : number = Util.randomInt(0,100);
                if(specialGenerate >= 45){
                    new Special(Mark.circleGeneratePos[0],Mark.circleGeneratePos[1],Mark.circleRadius,Mark.circleRadius, ColorPallet.RED);
                }
        */
        for (var i = 0; i < GameScene.stageLevel + 10; i++) {
            var probability = Util.randomInt(0, 100);
            Mark.circleGeneratePos[0] = Util.randomInt(Frame.I.compornent.x + 20, Frame.I.compornent.x + Frame.I.compornent.width - 20);
            Mark.circleGeneratePos[1] = Util.randomInt(Frame.I.compornent.y + 20, Frame.I.compornent.y + Frame.I.compornent.height - 20);
            if (i == 0) {
                new Circle(Mark.circleGeneratePos[0], Mark.circleGeneratePos[1], Mark.circleRadius, Mark.circleRadius, ColorPallet.BLACK);
                GameScene.circleNumber += 1;
            }
            else if (i == 1) {
                var a = new Cross(Mark.crossGeneratePos[0], Mark.crossGeneratePos[1], Mark.crossWidth, Mark.crossWidth, ColorPallet.BLACK);
                /*                if(Bonus.bonusFlag){
                                    a.changeShape(Mark.circleRadius,ColorPallet.BLACK,false,6);
                                }*/
            }
            else if (probability <= GameScene.circleRate) {
                new Circle(Mark.circleGeneratePos[0], Mark.circleGeneratePos[1], Mark.circleRadius, Mark.circleRadius, ColorPallet.BLACK);
                GameScene.circleNumber += 1;
            }
            else if (probability > GameScene.circleRate) {
                var b = new Cross(Mark.crossGeneratePos[0], Mark.crossGeneratePos[1], Mark.crossWidth, Mark.crossWidth, ColorPallet.BLACK);
                /*                if(Bonus.bonusFlag){
                                    b.changeShape(Mark.circleRadius,ColorPallet.BLACK,false,6);
                                }*/
            }
        }
        Mark.mark.forEach(function (m) {
            if (!m.circle && !m.special) {
                m.reverseShape(Mark.crossGeneratePos[0], Mark.crossGeneratePos[1], Mark.crossWidth, Mark.crossWidth, m.length, 45, 6, ColorPallet.BLACK);
                //egret.Tween.removeTweens(m.compornent);
            }
        });
        GameScene.nowGenerate = false;
    };
    GameScene.stageLevel = 1;
    GameScene.circleRate = 60;
    GameScene.circleNumber = 0; //生成したcircle数
    GameScene.catchCircle = 0; //捕まえたcircle数
    GameScene.nowGenerate = false; //create中にisHitの判定が残っていることがあるのでその防止用
    return GameScene;
}());
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map