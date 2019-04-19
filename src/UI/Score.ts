class Score extends UICompornent{

    static I:Score = null;   // singleton instance

    score:number = 0;

    bestScore:number = 0;
    text:eui.Label = null;
    textBest:eui.Label = null;

    textColor : number = 0x00FF3B;

    constructor(x : number, y : number, width : number, height : number, color : number) {
        super(x,y,width,height);

        this.textColor = color;

        Score.I = this;
        this.score = 0;
        this.text = Util.myText(0, 0, "SCORE : 0", 100, 0.5, this.textColor, true);
        this.compornent.addChild( this.text );

/*        let bestScore = window.localStorage.getItem("bestScore"); // string
        if( bestScore == null ){
            bestScore = "0";
            window.localStorage.setItem("bestScore", bestScore);
        }*/
        this.bestScore = Util.loadLocalStrage("Score.I.bestScore",Score.I.bestScore);
        this.textBest = Util.myText(0, 50, "BEST : " + this.bestScore.toString(), 100, 0.5, this.textColor, true);
        this.compornent.addChild( this.textBest );
    }
    
    addDestroyMethod() {
        this.compornent.removeChild( this.text );
        this.text = null;
        this.compornent.removeChild( this.textBest );
        this.textBest = null;
    }

    updateContent() {
        this.text.text = "SCORE : " + this.score.toFixed();
        if( this.bestScore < this.score ){
            this.textBest.text = "BEST : " + this.score.toFixed();
            Util.saveLocalStrage("Score.I.bestScore",Score.I.bestScore);
        }
    }

    addScore(){
        this.score += 1;
        
    }


}