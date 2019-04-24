class PushMark extends UICompornent{

    static I : PushMark = null;
    lineColor : number;
    expansion : boolean = true;


    constructor(x: number, y: number, width : number, height : number, lineColor: number){
        super(x,y,width,height);
        PushMark.I = this;
        this.setCircleShape(x,y,width/2);
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

    push(x:number, y:number){
        this.compornent.scaleX = this.compornent.scaleY = 0.01;
        this.compornent.x = x;
        this.compornent.y = y;

    }

    release(){
        this.expansion = true;
        this.compornent.scaleX = this.compornent.scaleY = 0;

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
                this.compornent.scaleX = this.compornent.scaleY += 0.01;
            }
            else{
                this.compornent.scaleX = this.compornent.scaleY -= 0.01;
            }
        }
            
    }
    

    updateContent(){
        this.switchExpansion();

    }

}