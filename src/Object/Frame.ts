class Frame extends GameCompornent{

    lineColor : number;

    constructor(x : number, y : number, width : number, height : number, lineColor:number){
        super(x,y,width,height);
        this.lineColor = lineColor;
        this.setShape(x,y,width,height);
    }

    setShape(x : number, y : number, width : number, height : number){
        const shape:egret.Shape = new egret.Shape();
        shape.x = x;
        shape.y = y;
        shape.graphics.lineStyle(6,this.lineColor);
        shape.graphics.drawRect(0, 0, width, height);
        this.compornent.addChild(shape);
        GameStage.display.addChild(this.compornent);
        this.shapes.push(shape);
    }

    updateContent(){}
}