abstract class Mark extends GameCompornent{

    lineColor : number;
    length : number;
    static moveSpeed : number = 1;

    constructor(x : number, y : number, width : number, height : number, lineColor:number){
        super(x,y,width,height);
        this.lineColor = lineColor;
        this.length = Math.sqrt(width**2 + height**2);

    }

    setCircleShape(x : number, y : number, radius:number){
        const shape:egret.Shape = new egret.Shape();
        shape.x = x;
        shape.y = y;
        shape.graphics.lineStyle(6,this.lineColor);
        shape.graphics.drawCircle(0, 0, radius);
        this.compornent.addChild(shape);
        GameStage.display.addChild(this.compornent);
        this.shapes.push(shape);
    }

    setCrossShape(x: number, y: number, width : number, height : number, length: number, degree: number, lineWidth: number, lineColor: number){
        const shape:egret.Shape = Util.setLine(x,y,length,degree,lineWidth,lineColor);
        this.compornent.addChild(shape);

        const shape2:egret.Shape = Util.setLine(x, y + height, length, 360-degree, lineWidth, lineColor);
        this.compornent.addChild(shape2);
        GameStage.display.addChild(this.compornent);

        this.shapes.push(shape);
        this.shapes.push(shape2);
    }

}

class Circle extends Mark{

    lineColor : number;

    constructor(x : number, y : number, width : number, height : number, lineColor:number){
        super(x,y,width,height,lineColor);
        this.setCircleShape(x,y,width/2);
    }

    updateContent(){}

}

class Cross extends Mark{

    lineColor : number;
    length : number;

    constructor(x: number, y: number, width : number, height : number, lineColor: number){
        super(x,y,width,height,lineColor);
        this.setCrossShape(x,y,width,height,this.length,45,6,lineColor);
    }

    updateContent(){}

}