class GameScene {
    static stageLevel:number = 1;
    static circleRate : number = 60;
    static circleNumber : number = 0;//生成したcircle数
    static catchCircle : number = 0;//捕まえたcircle数
    static nowGenerate : boolean = false;//create中にisHitの判定が残っていることがあるのでその防止用

     static create(){

        GameScene.nowGenerate = true;

        const newArray : Mark[] = Mark.mark.filter(obj => obj.destroyFlag !== true);
        Mark.mark = newArray;

        GameScene.circleNumber = 0;
        GameScene.catchCircle = 0;

        for(let i = 0; i < GameScene.stageLevel + 10; i++){
            let probability :number = Util.randomInt(0,100);
            Mark.circleGeneratePos[0] = Util.randomInt(Frame.I.compornent.x + 20, Frame.I.compornent.x + Frame.I.compornent.width - 20);
            Mark.circleGeneratePos[1] = Util.randomInt(Frame.I.compornent.y + 20, Frame.I.compornent.y + Frame.I.compornent.height - 20);
            if(i == 0){
                new Circle(Mark.circleGeneratePos[0],Mark.circleGeneratePos[1],Mark.circleRadius,Mark.circleRadius, ColorPallet.BLACK);
                GameScene.circleNumber += 1;
            }
            else if(i == 1){
                let a = new Cross(Mark.crossGeneratePos[0],Mark.crossGeneratePos[1],Mark.crossWidth,Mark.crossWidth, ColorPallet.BLACK);

            }
            else if(probability <= GameScene.circleRate){
                new Circle(Mark.circleGeneratePos[0],Mark.circleGeneratePos[1],Mark.circleRadius,Mark.circleRadius, ColorPallet.BLACK);
                GameScene.circleNumber += 1;
            }
            else if(probability > GameScene.circleRate){
                let b : Cross = new Cross(Mark.crossGeneratePos[0],Mark.crossGeneratePos[1],Mark.crossWidth,Mark.crossWidth, ColorPallet.BLACK);
            }

        }
        Mark.mark.forEach(m =>{
            if(!m.circle){
                m.reverseShape(Mark.crossGeneratePos[0],Mark.crossGeneratePos[1],Mark.crossWidth,Mark.crossWidth, m.length,45,6,ColorPallet.BLACK);
            }
        });
        GameScene.nowGenerate = false;
    }
}