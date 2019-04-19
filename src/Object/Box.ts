abstract class Box extends GameObject{
    
    constructor(x : number, y : number, width : number, height : number, color:number) {
        super();
        this.setShape(x, y, width, height, color);


    }

    setShape(x : number, y : number, width : number, height : number, color:number){
        if( this.shapes[0] ){
            GameObject.display.removeChild(this.shapes[0]);        
        }

        this.shapes[0] = new egret.Shape();
        this.shapes[0].anchorOffsetX += width/2;
        this.shapes[0].anchorOffsetY += height/2;
        this.shapes[0].x = x;
        this.shapes[0].y = y;
        this.shapes[0].graphics.beginFill(color);
        this.shapes[0].graphics.drawRect(0, 0, width , height);
        this.shapes[0].graphics.endFill();
        GameObject.display.addChild(this.shapes[0]);
        
    }

    //updateContent(){};

}


abstract class PhysicsBox extends PhysicsObject{

    protected width :number;
    protected height :number;
    protected x : number;
    protected y : number;
    protected color : number;

    
    constructor(x : number, y : number, width : number, height : number, color:number) {
        super();
        this.x = x;
        this.y = y;
        this.width = width ;
        this.height =height;
        this.color = color;
        this.setShape(x,y,width,height,color);


    }

    private setBody(x : number, y : number, width : number, height : number){

        this.body = new p2.Body({mass : 1, position:[x,y], type:p2.Body.STATIC});
        this.bodyShape = new p2.Box({
            width : width, height: height
        });
        this.body.addShape(this.bodyShape);
        CreateWorld.world.addBody(this.body);
        
    }


    setShape(x : number, y : number, width : number, height : number, color:number){
        if( this.shapes[0] ){
            GameObject.display.removeChild(this.shapes[0]);        
        }

        this.shapes[0] = new egret.Shape();
        this.shapes[0].anchorOffsetX += width/2;
        this.shapes[0].anchorOffsetY += height/2;
        this.shapes[0].x = x;
        this.shapes[0].y = y;
        this.shapes[0].graphics.beginFill(color);
        this.shapes[0].graphics.drawRect(0, 0, width , height);
        this.shapes[0].graphics.endFill();
        GameObject.display.addChild(this.shapes[0]);
        
    }



}

class MyBox extends Box{
    constructor(x : number, y : number, width : number, height : number, color:number) {
        super(x, y, width, height, color);
    }

    updateContent(){}
}