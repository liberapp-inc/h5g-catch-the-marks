enum FrameLine{
    UP,
    DOWN,
    RIGHT,
    LEFT
}
class Frame extends GameCompornent{

    static I : Frame = null;
    lineColor : number;
    //vector:number[][] = [];

    constructor(x : number, y : number, width : number, height : number, lineColor:number){
        super(x,y,width,height);
        Frame.I = this;
        this.lineColor = lineColor;
        this.setShape(x,y,width,height, 8);
    }

    setShape(x : number, y : number, width : number, height : number, lineWidth : number){
        const shape:egret.Shape = new egret.Shape();
        shape.graphics.lineStyle(lineWidth,this.lineColor);
        shape.graphics.drawRect(0, 0, width, height);
        this.compornent.addChild(shape);
        GameStage.display.addChild(this.compornent);
        this.shapes.push(shape);
    }

/*    setShape(x : number, y : number, width : number, height : number, lineWidth : number){

        for(let i = FrameLine.UP; i <= FrameLine.LEFT; i++){
            switch(i){
                case FrameLine.UP:
                this.shapes[i] = new egret.Shape();
                this.shapes[i] = Util.setLine(0,0,width,0,lineWidth,this.lineColor);
                this.vector.push(Util.vector(width, 0, x, y));                
                break;
                case FrameLine.DOWN:
                this.shapes[i] = new egret.Shape();
                this.shapes[i] = Util.setLine(0,height,width,0,lineWidth,this.lineColor);
                this.vector.push(Util.vector(width, 0, x, y + height));                
                break;
                case FrameLine.RIGHT:
                this.shapes[i] = new egret.Shape();
                this.shapes[i] = Util.setLine(width,0,height,270,lineWidth,this.lineColor);
                this.vector.push(Util.vector(height, 270, x + width, y));                
                break;
                case FrameLine.LEFT:
                this.shapes[i] = new egret.Shape();
                this.shapes[i] = Util.setLine(0,0,height,270,lineWidth,this.lineColor);
                this.vector.push(Util.vector(height, 270, x, y));                
                break;
            }
            if(this.shapes[i])
                this.compornent.addChild(this.shapes[i]);
        }
        GameStage.display.addChild(this.compornent);

    }*/



    updateContent(){}
}