class Mark extends GameCompornent{

    static mark : Mark[]=[];
    radius : number;
    lineColor : number;
    length : number;
    isHit :boolean = false;
    static moveSpeed : number = 2;
    moveVector : number[] = [];
    circle : boolean = false;
    special : boolean = false;
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

    setCircleShape(x : number, y : number, width:number,color:number, fill : boolean, lineWidth: number){
        const shape:egret.Shape = Util.setCircle(x,y,width,color,fill,lineWidth);
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
    changeShape(width:number,color:number, fill : boolean, lineWidth: number) {
        this.shapes = [];
        this.compornent.removeChildren();
        const shape : egret.Shape = Util.setCircle(0,0,width,color,fill,lineWidth);
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
            if(this.special){
                this.destroy();
            }
            else if(this.circle && !this.special){
                this.destroy();
                GameScene.catchCircle += 1;
                //Score.I.score += 1;
                if(GameScene.circleNumber == GameScene.catchCircle){
                    if(Bonus.bonusFlag){
                        Bonus.I.stopBonus();
                    }
                    //これがないと、大きな円で〇を消したとき、次のステージで生成された×や〇にhit判定が入ってしまう。
                    PushMark.I.compornent.scaleX = PushMark.I.compornent.scaleY = 0;
                    PushMark.I.compornent.x = PushMark.I.compornent.y = 0;
                    GameScene.stageLevel += 1;
                    if(Mark.moveSpeed < 10) {Mark.moveSpeed  += 0.1;}
                    if(GameScene.circleRate > 70){GameScene.circleRate -=0.1;}                   
                    GameScene.create();
                }
            }
            else if(Bonus.bonusFlag && !this.circle){
                this.destroy();
            }
            else if(!this.circle){
                if(!GameOver.gameOverFlag){
                    console.log("x" +this.compornent.x +"y" +this.compornent.y);
                    if(!GameScene.nowGenerate){
                        new GameOver(0,0,0,0);

                    }
                }
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
            if(!UILayer.pushFlag){//指を離したときにisHit =trueのマークを破壊
                this.checkHit();
            }
            else{
                //push中にバツにあたったらゲームオーバー
                if(this.isHit && !this.circle && !Bonus.bonusFlag){
                    if(!GameOver.gameOverFlag && !GameScene.nowGenerate){
                        UILayer.pushFlag = false;
                        PushMark.I.release();
                        this.reverseShape(Mark.crossGeneratePos[0],Mark.crossGeneratePos[1],Mark.crossWidth,Mark.crossWidth, this.length,45,6,ColorPallet.BULE);
                        new GameOver(0,0,0,0);
                    }
                }
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
        this.setCircleShape(0,0,width,this.lineColor,false,6);
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
        this.special = true;
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
        if(!GameOver.gameOverFlag){
            if(!Bonus.bonusFlag){
                new Bonus(0,0,0,0);

            }

        }
        Mark.mark.forEach(m => {
            if(m.compornent && !m.circle){
                m.changeShape(this.compornent.width,ColorPallet.BLACK,false,6);
            }

        });
        
    }

}

