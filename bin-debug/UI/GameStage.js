var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//図形などのGameObjectを描画するレイヤー
var GameStage = (function () {
    function GameStage() {
        this.setContainer();
        GameStage.index = GameObject.display.getChildIndex(GameStage.display);
    }
    GameStage.prototype.setContainer = function () {
        GameStage.display = new egret.DisplayObjectContainer();
        GameObject.display.addChild(GameStage.display);
    };
    GameStage.prototype.addDestroyMethod = function () {
        if (GameStage.display) {
            GameStage.display.removeChildren();
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