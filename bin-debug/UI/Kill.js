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
var Kill = (function (_super) {
    __extends(Kill, _super);
    function Kill(x, y, width, height, color) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.kill = 0;
        _this.text = null;
        _this.textColor = 0x00FF3B;
        Kill.I = _this;
        _this.textColor = color;
        _this.kill = Util.loadLocalStrage("Kill.I.kill", Kill.I.kill);
        _this.text = Util.myText(0, 50, "KILL : " + _this.kill.toString() + " / 500", 100, 0.5, _this.textColor, true);
        UILayer.display.addChild(_this.text);
        return _this;
    }
    Kill.prototype.addDestroyMethod = function () {
        UILayer.display.removeChild(this.text);
        this.text = null;
    };
    Kill.prototype.updateContent = function () {
        this.text.text = "KILL : " + this.kill.toString() + " / 500";
    };
    Kill.prototype.addKill = function () {
        this.kill += 1;
        Util.saveLocalStrage("Kill.I.kill", Kill.I.kill);
    };
    Kill.I = null; // singleton instance
    return Kill;
}(UICompornent));
__reflect(Kill.prototype, "Kill");
//# sourceMappingURL=Kill.js.map