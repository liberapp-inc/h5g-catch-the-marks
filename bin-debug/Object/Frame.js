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
var FrameLine;
(function (FrameLine) {
    FrameLine[FrameLine["UP"] = 0] = "UP";
    FrameLine[FrameLine["DOWN"] = 1] = "DOWN";
    FrameLine[FrameLine["RIGHT"] = 2] = "RIGHT";
    FrameLine[FrameLine["LEFT"] = 3] = "LEFT";
})(FrameLine || (FrameLine = {}));
var Frame = (function (_super) {
    __extends(Frame, _super);
    //vector:number[][] = [];
    function Frame(x, y, width, height, lineColor) {
        var _this = _super.call(this, x, y, width, height) || this;
        Frame.I = _this;
        _this.lineColor = lineColor;
        _this.setShape(x, y, width, height, 8);
        return _this;
    }
    Frame.prototype.setShape = function (x, y, width, height, lineWidth) {
        var shape = new egret.Shape();
        shape.graphics.lineStyle(lineWidth, this.lineColor);
        shape.graphics.drawRect(0, 0, width, height);
        this.compornent.addChild(shape);
        GameStage.display.addChild(this.compornent);
        this.shapes.push(shape);
    };
    /*    setShape(x : number, y : number, width : number, height : number, lineWidth : number){
    
            for(let i = FrameLine.UP; i <= FrameLine.LEFT; i++){
                switch(i){
                    case FrameLine.UP:
                    this.shapes[i] = new egret.Shape();
                    this.shapes[i] = Util.setLine(0,0,width,0,lineWidth,this.lineColor);
                    this.vector.push(Util.vector(width, 0, x, y));
                    break;
                    case FrameLine.DOWN:
                    this.shapes[i] = new egret.Shape();
                    this.shapes[i] = Util.setLine(0,height,width,0,lineWidth,this.lineColor);
                    this.vector.push(Util.vector(width, 0, x, y + height));
                    break;
                    case FrameLine.RIGHT:
                    this.shapes[i] = new egret.Shape();
                    this.shapes[i] = Util.setLine(width,0,height,270,lineWidth,this.lineColor);
                    this.vector.push(Util.vector(height, 270, x + width, y));
                    break;
                    case FrameLine.LEFT:
                    this.shapes[i] = new egret.Shape();
                    this.shapes[i] = Util.setLine(0,0,height,270,lineWidth,this.lineColor);
                    this.vector.push(Util.vector(height, 270, x, y));
                    break;
                }
                if(this.shapes[i])
                    this.compornent.addChild(this.shapes[i]);
            }
            GameStage.display.addChild(this.compornent);
    
        }*/
    Frame.prototype.updateContent = function () { };
    Frame.I = null;
    return Frame;
}(GameCompornent));
__reflect(Frame.prototype, "Frame");
//# sourceMappingURL=Frame.js.map