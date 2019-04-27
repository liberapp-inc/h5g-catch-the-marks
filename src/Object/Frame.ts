enum FrameLine{
    UP,
    DOWN,
    RIGHT,
    LEFT
}
class Frame extends GameCompornent{

    static I : Frame = null;
    lineColor : number;

    constructor(x : number, y : number, width : number, height : number, lineColor:number){
        super(x,y,width,height);
        Frame.I = this;
        this.lineColor = lineColor;
        this.setShape(x,y,width,height, 8);
    }

    setShape(x : number, y : number, width : number, height : number, lineWidth : number){
        const shape:egret.Shape = new egret.Shape();
        shape.graphics.lineStyle(lineWidth,this.lineColor);
        shape.graphics.drawRect(0, 0, width, height);
        this.compornent.addChild(shape);
        GameStage.display.addChild(this.compornent);
        this.shapes.push(shape);
    }

    updateContent(){}
}