class Ball extends GameCompornent{

    static I:Ball = null;   // singleton instance
    private radius :number =null;

    constructor(x : number, y:number, width : number, height : number, radius:number) {
        super(x,y,width,height);

        //Ball.I = this;
        this.setShape(x, y, radius);

    }


    setShape(x: number, y:number, radius: number){
        if( this.shapes[0] ){
            GameObject.display.removeChild(this.shapes[0]);        
        }

        this.shapes[0] = new egret.Shape();
        this.shapes[0].x = x;
        this.shapes[0].y = y;
        this.shapes[0].graphics.beginFill(0xff0000);
        this.shapes[0].graphics.drawCircle(0, 0, radius);
        this.shapes[0].graphics.endFill();
        GameObject.display.addChild(this.shapes[0]);
        
    }

    updateContent(){

    }


}

abstract class PhysicsBall extends PhysicsObject{

    private radius :number =null;

    constructor(x : number, y:number, radius:number) {
        super();

        //PhysicsBall.I = this;
        this.setBody(x, y, radius);
        this.setShape(x, y, radius);

    }

    private setBody(x: number, y:number, radius: number){

        this.body = new p2.Body({mass : 1, position:[x,y]});
        this.bodyShape = new p2.Circle({
            radius : radius, fixedRotation:true
        });
        this.body.addShape(this.bodyShape);
        CreateWorld.world.addBody(this.body);
        
    }

    setShape(x: number, y:number, radius: number){
        if( this.shapes[0] ){
            GameObject.display.removeChild(this.shapes[0]);        
        }

        this.shapes[0] = new egret.Shape();
        this.shapes[0].x = x;
        this.shapes[0].y = y;
        this.shapes[0].graphics.beginFill(0xff0000);
        this.shapes[0].graphics.drawCircle(0, 0, radius);
        this.shapes[0].graphics.endFill();
        GameObject.display.addChild(this.shapes[0]);
        
    }


}

