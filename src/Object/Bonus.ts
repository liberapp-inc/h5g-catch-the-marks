class Bonus extends UICompornent{
    static bonusFlag :boolean = false;
    static timer : egret.Timer;
    count : number = 0;

    constructor(x : number, y : number, width : number, height : number){
        super(x,y,width,height);
        Bonus.bonusFlag = true;
        Bonus.timer = new egret.Timer(1000,0);
        Bonus.timer.addEventListener(egret.TimerEvent.TIMER, this.timeMethod,this);
        Bonus.timer.start();
    }
    
    timeMethod(){
        this.count += 1;
        if(this.count == 4){
            this.stopMethod();
        }
    }

    stopMethod(){
        Bonus.timer.stop();
        Bonus.timer.removeEventListener(egret.TimerEvent.TIMER,this.timeMethod,this);
        if(Bonus.bonusFlag){
            Mark.mark.forEach(m => {
                if(!m.circle){
                    MyTween.bonusFlash(m.compornent, 20, m);
                    //m.reverseShape(Mark.crossGeneratePos[0],Mark.crossGeneratePos[1],Mark.crossWidth,Mark.crossWidth, m.length,45,6,m.lineColor);
                }
            });
        }
        this.count = 0;
        this.destroy();
    }

    addDestroyMethod() {
        Bonus.timer.stop();
        Bonus.timer.removeEventListener(egret.TimerEvent.TIMER,this.timeMethod,this);

    }
    updateContent(){}
}