class Kill extends UICompornent{

    static I:Kill = null;   // singleton instance
    kill:number = 0;
    text:eui.Label = null;
    textColor : number = 0x00FF3B;

    constructor(x : number, y : number, width : number, height : number, color : number) {
        super(x,y,width,height);
        Kill.I = this;

        this.textColor = color;

        this.kill = Util.loadLocalStrage("Kill.I.kill", Kill.I.kill);

        this.text = Util.myText(0, 50, "KILL : " + this.kill.toString() + " / 500", 100, 0.5, this.textColor, true);
        UILayer.display.addChild( this.text );


    }
    
    addDestroyMethod() {
        UILayer.display.removeChild( this.text );
        this.text = null;

    }

    updateContent() {
        this.text.text = "KILL : " + this.kill.toString() + " / 500";

    }

    addKill(){
        this.kill += 1;
        Util.saveLocalStrage("Kill.I.kill", Kill.I.kill);
        
    }


}