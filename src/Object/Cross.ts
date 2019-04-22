class Cross extends GameCompornent{

    lineColor : number;
    length : number;

    constructor(x: number, y: number, width : number, height : number, lineColor: number){
        super(x,y,width,height);
        this.lineColor = lineColor;
        this.length = Math.sqrt(width**2 + height**2);
        this.setShape(x,y,width,height,this.length,45,6,lineColor);

    }

    setShape(x: number, y: number, width : number, height : number, length: number, degree: number, lineWidth: number, lineColor: number){
        const shape:egret.Shape = Util.setLine(x,y,length,degree,lineWidth,lineColor);
        this.compornent.addChild(shape);

        const shape2:egret.Shape = Util.setLine(x, y + height, length, 360-degree, lineWidth, lineColor);
        this.compornent.addChild(shape2);
        GameStage.display.addChild(this.compornent);

        this.shapes.push(shape);
        this.shapes.push(shape2);
    }

    updateContent(){}

}