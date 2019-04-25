class MyTween {

    static bonusFlash(object : any, repeat : number, objectClass:any){
        let count :number = 0;
        egret.Tween.get(object,{
            loop:true
        }) 
            .to({alpha:0.1}, 1000/repeat, egret.Ease.quartIn)
            .to({alpha:1.0}, 1000/repeat, egret.Ease.quartOut)
            .call(()=> {
                count +=1;
                if(count == repeat){
                    objectClass.reverseShape(Mark.crossGeneratePos[0],Mark.crossGeneratePos[1],Mark.crossWidth,Mark.crossWidth, objectClass.length,45,6,objectClass.lineColor);
                    egret.Tween.removeTweens(object);
                    Bonus.bonusFlag =false;

                }                
            });

    }

}

