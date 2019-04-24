class Mark extends GameCompornent{

    lineColor : number;
    length : number;
    isHit :boolean = false;
    static moveSpeed : number = 2;
    moveVector : number[] = [];
    static mark : Mark[]=[];
    circle : boolean = false;

    constructor(x : number, y : number, width : number, height : number, lineColor:number){
        super(x,y,width,height);
        this.lineColor = lineColor;
        this.length = Math.sqrt(width**2 + height**2);
        //this.setMoveVector(Mark.moveSpeed, 45);
        this.setMoveVector(Mark.moveSpeed, Util.randomInt(0, 359));
        Mark.mark.push(this);

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

    changeShape(radius:number) {
        this.shapes = [];
        this.compornent.removeChildren();
        const shape : egret.Shape = new egret.Shape();
        shape.graphics.lineStyle(6,this.lineColor);
        shape.graphics.drawCircle(0, 0, radius);
        this.compornent.addChild(shape);
        this.shapes.push(shape);

    }

    reverseShape(x: number, y: number, width : number, height : number, length: number, degree: number, lineWidth: number, lineColor: number) {
        this.shapes = [];
        this.compornent.removeChildren();
        
        const shape:egret.Shape = Util.setLine(0, height, length,degree, lineWidth, lineColor);
        this.compornent.addChild(shape);

        const shape2:egret.Shape = Util.setLine(0, 0, length, 360-degree, lineWidth, lineColor);
        this.compornent.addChild(shape2);

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

    checkHit(){
        if(this.isHit){
            this.destroy();
        }

    }

    reflect(){
        if(this.compornent.x < Frame.I.compornent.x || this.compornent.x > Frame.I.compornent.x + Frame.I.compornent.width){
            this.moveVector[0] *= -1;
        }
        if(this.compornent.y < Frame.I.compornent.y || this.compornent.y > Frame.I.compornent.y + Frame.I.compornent.height){
            this.moveVector[1] *= -1;
        }

    }

    updateContent(){
        if(this.isHit && !UILayer.pushFlag){
            this.destroy();
        }
            this.move();
            this.reflect();

        //this.checkHit();
    }

}

class Circle extends Mark{

    lineColor : number;

    constructor(x : number, y : number, width : number, height : number, lineColor:number){
        super(x,y,width,height,lineColor);
        this.circle = true;
        this.setCircleShape(x,y,width/2);
    }
}

class Cross extends Mark{

    lineColor : number;
    length : number;

    constructor(x: number, y: number, width : number, height : number, lineColor: number){
        super(x,y,width,height,lineColor);
        this.circle = false;
        this.setCrossShape(x,y,width,height,this.length,45,6,lineColor);
    }
}

class Special extends Mark{

    lineColor : number;
    radius : number;
    constructor(x : number, y : number, width : number, height : number, lineColor:number){
        super(x,y,width,height,lineColor);
        this.lineColor = lineColor;
        this.radius = width/2;
        this.circle = true;
        this.setCircleShape(x,y,width/2);
    }

    setCircleShape(x : number, y : number, radius:number){
        const shape:egret.Shape = new egret.Shape();
        shape.graphics.lineStyle(6,this.lineColor);
        shape.graphics.beginFill(this.lineColor);
        shape.graphics.drawCircle(0, 0, radius);
        shape.graphics.endFill();
        this.compornent.addChild(shape);
        GameStage.display.addChild(this.compornent);
        this.shapes.push(shape);
    }

/*    changeShape(radius:number) : egret.Shape{
        const shape : egret.Shape = new egret.Shape();
        shape.graphics.lineStyle(6,this.lineColor);
        shape.graphics.drawCircle(0, 0, radius);
        return shape;
    }*/

    addDestroyMethod(){
        Bonus.bonusFlag = true;
        Mark.mark.forEach(m => {
            if(m.compornent && !m.circle){
                m.changeShape(this.radius);
/*                m.shapes = [];
                m.compornent.removeChildren();
                const s : egret.Shape = this.changeShape(this.radius);
                m.shapes.push(s);
                m.compornent.addChild(s);*/
            }
/*            m.shapes.forEach(s =>{
            });*/
        });
        
    }

}

