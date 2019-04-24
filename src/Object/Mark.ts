class Mark extends GameCompornent{

    lineColor : number;
    length : number;
    isHit :boolean = false;
    static moveSpeed : number = 2;
    moveVector : number[] = [];

    constructor(x : number, y : number, width : number, height : number, lineColor:number){
        super(x,y,width,height);
        this.lineColor = lineColor;
        this.length = Math.sqrt(width**2 + height**2);
        //this.setMoveVector(Mark.moveSpeed, 45);
        this.setMoveVector(Mark.moveSpeed, Util.randomInt(30, 340));

    }

    setCircleShape(x : number, y : number, radius:number){
        const shape:egret.Shape = new egret.Shape();
/*        shape.x = x;
        shape.y = y;*/
        shape.graphics.lineStyle(6,this.lineColor);
        shape.graphics.drawCircle(0, 0, radius);
        this.compornent.addChild(shape);
        GameStage.display.addChild(this.compornent);
        this.shapes.push(shape);
    }

    setCrossShape(x: number, y: number, width : number, height : number, length: number, degree: number, lineWidth: number, lineColor: number){
        const shape:egret.Shape = Util.setLine(0, height, length,degree, lineWidth, lineColor);
        this.compornent.addChild(shape);

        const shape2:egret.Shape = Util.setLine(0, 0, length, 360-degree, lineWidth, lineColor);
        this.compornent.addChild(shape2);
        GameStage.display.addChild(this.compornent);

        this.shapes.push(shape);
        this.shapes.push(shape2);
    }

    setMoveVector(size : number, degree : number){
        this.moveVector = Util.vector(size, degree);
    }

    move(){
        this.compornent.x += this.moveVector[0];
        this.compornent.y += this.moveVector[1];//Egret はy軸が下向き
    }

/*    checkHit(){
        this.isHit = Frame.I.shapes[0].hitTestPoint(this.compornent.x, this.compornent.y);
        if(this.isHit){
            this.reflect();
        }

    }*/

    reflect(){
        if(this.compornent.x < Frame.I.compornent.x || this.compornent.x > Frame.I.compornent.x + Frame.I.compornent.width){
            this.moveVector[0] *= -1;
        }
        if(this.compornent.y < Frame.I.compornent.y || this.compornent.y > Frame.I.compornent.y + Frame.I.compornent.height){
            this.moveVector[1] *= -1;
        }

    }

    updateContent(){
        this.move();
        this.reflect();
    }

}

class Circle extends Mark{

    lineColor : number;

    constructor(x : number, y : number, width : number, height : number, lineColor:number){
        super(x,y,width,height,lineColor);
        this.setCircleShape(x,y,width/2);
    }



}

class Cross extends Mark{

    lineColor : number;
    length : number;

    constructor(x: number, y: number, width : number, height : number, lineColor: number){
        super(x,y,width,height,lineColor);
        this.setCrossShape(x,y,width,height,this.length,45,6,lineColor);
    }


}