class Circle extends GameCompornent{

    lineColor : number;

    constructor(x : number, y : number, width : number, height : number, lineColor:number){
        super(x,y,width,height);
        this.lineColor = lineColor;
        this.setShape(x,y,width/2);

    }

    setShape(x : number, y : number, radius:number){
        const shape:egret.Shape = new egret.Shape();
        shape.x = x;
        shape.y = y;
        shape.graphics.lineStyle(6,this.lineColor);
        shape.graphics.drawCircle(0, 0, radius);
        this.compornent.addChild(shape);
        GameStage.display.addChild(this.compornent);
        this.shapes.push(shape);
    }

    updateContent(){}

}