class SaveData{

    static object : any;

    static initial(){
        SaveData.object = {
            "number"    : 1, 
            "string"    : "js-primer",
            "boolean"   : true,
            "null"      : null,
            "array"     : [1, 2, 3]
        };
    }

    static save(){
        //let saveData : string = JSON.stringify(SaveData.object);
        Util.saveJSONLocalStrage("saveData", SaveData.object);
    }

    static load(){
        SaveData.object = Util.loadJSONLocalStrage("saveData");
    }

    static deleteData(){
        SaveData.object = null;
        SaveData.load();
    }

    updateContent(){}
}