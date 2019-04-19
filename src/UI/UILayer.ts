//UIコンポーネントを描画するレイヤー
class UILayer extends GameObject{

    static display: eui.UILayer = null;
    static index :number;

    constructor(){
        super();
        this.setContainer();
        UILayer.index = GameObject.display.getChildIndex(UILayer.display) ;
    }

    setContainer(){
        UILayer.display = new eui.UILayer();
        GameObject.display.addChild(UILayer.display);
    }

    addDestroyMethod(){
        if(UILayer.display){
            GameObject.display.removeChild(UILayer.display);
            UILayer.display =null;
        }
    }

    updateContent(){}


}



class Hello extends UICompornent{

    constructor(x : number, y : number, width : number, height : number){
        super(x,y,width,height);
        this.method();
    }

    method(){
        let hello:eui.Label = new eui.Label();
        hello.text = "Hello World";
        this.compornent.addChild(hello);
    }

    updateContent(){}

}