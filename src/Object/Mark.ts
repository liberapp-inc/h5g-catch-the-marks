class Mark extends GameCompornent{

    radius : number;
    lineColor : number;
    length : number;
    isHit :boolean = false;
    static moveSpeed : number = 2;
    moveVector : number[] = [];
    static mark : Mark[]=[];
    circle : boolean = false;
    static circleGeneratePos : number[];
    static crossGeneratePos  : number[];
    static circleRadius : number ;
    static crossWidth   : number ;

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

    //SPアイテムを取得した時に×マークを〇にする
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
            if(this.circle){
                this.destroy();
            }
            else if(Bonus.bonusFlag && !this.circle){
                this.destroy();
            }
            else if(!this.circle){
                if(!GameOver.gameOverFlag)
                        //GameObject.transit = Game.init;

                    new GameOver(0,0,0,0);
            }
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
        if(!GameOver.gameOverFlag){
            if(!UILayer.pushFlag){
                this.checkHit();
            }
            this.move();
            this.reflect();

        }
    }

}

class Circle extends Mark{

    constructor(x : number, y : number, width : number, height : number, lineColor:number){
        super(x,y,width,height,lineColor);
        this.circle = true;
        this.setCircleShape(x,y,width/2);
    }
}

class Cross extends Mark{

    constructor(x: number, y: number, width : number, height : number, lineColor: number){
        super(x,y,width,height,lineColor);
        this.circle = false;
        this.setCrossShape(x,y,width,height,this.length,45,6,lineColor);
    }
}

class Special extends Mark{

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


    addDestroyMethod(){
        new Bonus(0,0,0,0);
        Mark.mark.forEach(m => {
            if(m.compornent && !m.circle){
                m.changeShape(this.radius);
            }

        });
        
    }

}

