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
var Score = (function (_super) {
    __extends(Score, _super);
    function Score(x, y, width, height, color) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.score = 0;
        _this.bestScore = 0;
        _this.text = null;
        _this.textBest = null;
        _this.textColor = 0x00FF3B;
        _this.textColor = color;
        Score.I = _this;
        _this.score = 0;
        _this.text = Util.myText(0, 0, "SCORE : 0", 100, 0.5, _this.textColor, true);
        _this.compornent.addChild(_this.text);
        /*        let bestScore = window.localStorage.getItem("bestScore"); // string
                if( bestScore == null ){
                    bestScore = "0";
                    window.localStorage.setItem("bestScore", bestScore);
                }*/
        _this.bestScore = Util.loadLocalStrage("Score.I.bestScore", Score.I.bestScore);
        _this.textBest = Util.myText(0, 50, "BEST : " + _this.bestScore.toString(), 100, 0.5, _this.textColor, true);
        _this.compornent.addChild(_this.textBest);
        return _this;
    }
    Score.prototype.addDestroyMethod = function () {
        this.compornent.removeChild(this.text);
        this.text = null;
        this.compornent.removeChild(this.textBest);
        this.textBest = null;
    };
    Score.prototype.updateContent = function () {
        this.text.text = "SCORE : " + this.score.toFixed();
        if (this.bestScore < this.score) {
            this.textBest.text = "BEST : " + this.score.toFixed();
            Util.saveLocalStrage("Score.I.bestScore", Score.I.bestScore);
        }
    };
    Score.prototype.addScore = function () {
        this.score += 1;
    };
    Score.I = null; // singleton instance
    return Score;
}(UICompornent));
__reflect(Score.prototype, "Score");
//# sourceMappingURL=Score.js.map