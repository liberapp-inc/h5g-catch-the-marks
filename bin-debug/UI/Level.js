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
var Level = (function (_super) {
    __extends(Level, _super);
    function Level(x, y, width, height, color) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.score = 0;
        _this.bestScore = 0;
        _this.text = null;
        _this.textBest = null;
        _this.textColor = 0x00FF3B;
        _this.textColor = color;
        Level.I = _this;
        _this.score = GameScene.stageLevel;
        _this.text = Util.myText(0, 0, "LEVEL : 0", 100, 0.5, _this.textColor, true);
        _this.compornent.addChild(_this.text);
        _this.bestScore = Util.loadLocalStrage("Level.I.bestScore", Level.I.bestScore);
        _this.textBest = Util.myText(0, 50, "BEST : " + _this.bestScore.toString(), 100, 0.5, _this.textColor, true);
        _this.compornent.addChild(_this.textBest);
        return _this;
    }
    Level.prototype.addDestroyMethod = function () {
        this.compornent.removeChild(this.text);
        this.text = null;
        this.compornent.removeChild(this.textBest);
        this.textBest = null;
    };
    Level.prototype.updateContent = function () {
        this.text.text = "LEVEL : " + GameScene.stageLevel.toFixed();
        if (this.bestScore < GameScene.stageLevel) {
            this.bestScore = GameScene.stageLevel;
            this.textBest.text = "BEST : " + this.bestScore.toFixed();
            Util.saveLocalStrage("Level.I.bestScore", GameScene.stageLevel);
        }
    };
    Level.prototype.addScore = function () {
        this.score += 1;
    };
    Level.I = null; // singleton instance
    return Level;
}(UICompornent));
__reflect(Level.prototype, "Level");
//# sourceMappingURL=Level.js.map