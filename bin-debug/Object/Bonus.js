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
    function Bonus(x, y, width, height, color) {
        return _super.call(this, x, y, width, height) || this;
    }
    Bonus.prototype.updateContent = function () { };
    Bonus.bonusFlag = false;
    return Bonus;
}(UICompornent));
__reflect(Bonus.prototype, "Bonus");
//# sourceMappingURL=Bonus.js.map