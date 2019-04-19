abstract class Katanuki extends GameCompornent{

    baseDisplay : egret.DisplayObjectContainer = null;
    baseShapes : egret.Shape[] = [];
    baseColor:number = 0xedb1b3;
    shadowColor:number = Util.color(0,0,0);
    pushFlag :boolean = false;
    expansionFlag:boolean = true;

    constructor(x : number, y : number, width : number, height : number, color:number){
        super(x, y, width, height);
        this.setCompornentStatus(x, y, width, height);
        this.setBase(x, y, width, height,this.baseColor);
    }

    setCompornentStatus(x : number, y : number, width : number, height : number){
        this.compornent.anchorOffsetX += width/2;
        this.compornent.anchorOffsetY += height/2;
        this.compornent.x = x;
        this.compornent.y = y;
        this.compornent.touchEnabled = true;
    }

    setBase(x : number, y : number, width : number, height : number, baseColor:number){
        this.baseColor = baseColor;

        this.baseDisplay = new egret.DisplayObjectContainer();
        this.baseDisplay.width = width;
        this.baseDisplay.height = height;
        this.baseDisplay.anchorOffsetX += width/2;
        this.baseDisplay.anchorOffsetY += height/2;
        this.baseDisplay.x = x;
        this.baseDisplay.y = y;
        GameStage.display.addChildAt(this.baseDisplay,GameStage.display.getChildIndex(this.compornent));

        const baseShape : egret.Shape = Util.setRect(x, y, width, height, baseColor, 30);
        this.baseDisplay.addChild(baseShape);

        this.baseShapes.push(baseShape);


    }

    setRect(x : number, y : number, width : number, height : number, color:number, round:number){
        const shape :egret.Shape = Util.setRect(x, y, width, height, color, round);
        this.shapes.push(shape);
        this.compornent.addChild(shape);
    }

    setCircle(x : number, y : number, width : number, height : number, color:number, radius:number){

    }

    abstract push():void;

    addDestroyMethod(){
        if(this.compornent.hasEventListener(egret.TouchEvent.TOUCH_MOVE)){
            this.compornent.removeEventListener( egret.TouchEvent.TOUCH_MOVE, this.push, this );
        }

        if(this.baseDisplay){
            this.baseShapes.forEach(s =>{
                this.baseDisplay.removeChild(s);
                s= null;
            });
            this.compornent.removeChild(this.baseDisplay);
            this.baseDisplay = null;
        }
    }
    updateContent(){}
}


class Rect extends Katanuki{
    constructor(x : number, y : number, width : number, height : number, color:number, round:number){
        super(x, y, width, height, color);
        this.setRect(x, y, width*0.5, height*0.5, color,round);
    }

    push(){}

    updateContent(){
        if(UILayer.pushFlag){
            
            if(this.compornent.scaleX >= 1){
                this.compornent.scaleX = this.compornent.scaleY = 1;
                this.expansionFlag = false;
            }
            else if(this.compornent.scaleX <= 0.1){
                this.compornent.scaleX = this.compornent.scaleY = 0.1;
                this.expansionFlag = true;

            }
            if(this.expansionFlag){
                this.compornent.scaleX = this.compornent.scaleY += 0.01;
            }
            else{
                this.compornent.scaleX = this.compornent.scaleY -= 0.01;
            }

        }

    }
}