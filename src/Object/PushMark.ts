class PushMark extends GameCompornent{

    static I : PushMark = null;
    lineColor : number;
    expansion : boolean = true;

    constructor(x: number, y: number, width : number, height : number, lineColor: number){
        super(x,y,width,height);
        PushMark.I = this;
        this.adjustmentCompornent();
        this.setCircleShape(this.compornent.anchorOffsetX,this.compornent.anchorOffsetY,width/2);
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

    adjustmentCompornent(){
        this.compornent.anchorOffsetX += this.compornent.width/2;
        this.compornent.anchorOffsetY += this.compornent.height/2;
/*        let s = Util.setRect(0,0,this.compornent.width, this.compornent.height, 0xff0000, 0);
        this.compornent.addChild(s);*/
    }


    push(x:number, y:number){
        this.compornent.scaleX = this.compornent.scaleY = 0.01;
        this.compornent.x = x;
        this.compornent.y = y;

    }

    release(){
        this.expansion = true;
        this.compornent.scaleX = this.compornent.scaleY = 0;
        const newArray : Mark[] = Mark.mark.filter(obj => obj.destroyFlag !== true);
        Mark.mark = newArray;

    }

    switchExpansion(){
        if(UILayer.pushFlag){
            if(this.compornent.scaleX > 1){
                this.expansion = false;
            }
            else if(this.compornent.scaleX < 0.01){
                this.expansion = true;
            }

            if(this.expansion){
                this.compornent.scaleX = this.compornent.scaleY += 0.005;
            }
            else{
                this.compornent.scaleX = this.compornent.scaleY -= 0.005;
            }
        }
            
    }

    checkHit(){
        if(UILayer.pushFlag){
            Mark.mark.forEach(m => {
                if(this.compornent.hitTestPoint(m.compornent.x, m.compornent.y)){
                    m.isHit = true;
                }
                else{
                    m.isHit = false;
                }


            });
        }
    }
    

    updateContent(){
        this.switchExpansion();
        this.checkHit();

    }

}