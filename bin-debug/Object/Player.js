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
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(x, y, width, height, color) {
        var _this = _super.call(this, x, y, width, height) || this;
        Player.I = _this;
        _this.loadStatus();
        return _this;
    }
    Player.prototype.loadStatus = function () {
    };
    Player.prototype.resetStatus = function () {
    };
    Player.prototype.updateContent = function () { };
    Player.I = null;
    return Player;
}(GameCompornent));
__reflect(Player.prototype, "Player");
//# sourceMappingURL=Player.js.map