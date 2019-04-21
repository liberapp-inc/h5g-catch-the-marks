var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//図形などのGameObjectを描画するレイヤー
var GameStage = (function () {
    function GameStage() {
        //super();
        this.setContainer();
        GameStage.index = GameObject.display.getChildIndex(GameStage.display);
        /*        GameStage.display.addEventListener( egret.TouchEvent.TOUCH_BEGIN, this.push, this );
                GameStage.display.addEventListener( egret.TouchEvent.TOUCH_MOVE, this.move, this );
                GameStage.display.addEventListener( egret.TouchEvent.TOUCH_END, this.end, this );
                GameStage.display.addEventListener( egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.end, this );*/
    }
    /*    push(){
            GameStage.pushFlag = true;
        }
        move(){
            GameStage.pushFlag = true;
        }
        end(){
            GameStage.pushFlag = false;
        }*/
    GameStage.prototype.setContainer = function () {
        GameStage.display = new egret.DisplayObjectContainer();
        GameObject.display.addChild(GameStage.display);
    };
    GameStage.prototype.addDestroyMethod = function () {
        if (GameStage.display) {
            GameObject.display.removeChild(GameStage.display);
            GameStage.display = null;
        }
    };
    GameStage.prototype.updateContent = function () { };
    GameStage.display = null;
    return GameStage;
}());
__reflect(GameStage.prototype, "GameStage");
//# sourceMappingURL=GameStage.js.map