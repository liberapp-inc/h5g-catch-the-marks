var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SaveData = (function () {
    function SaveData() {
    }
    SaveData.initial = function () {
        SaveData.object = {
            "number": 1,
            "string": "js-primer",
            "boolean": true,
            "null": null,
            "array": [1, 2, 3]
        };
    };
    SaveData.save = function () {
        //let saveData : string = JSON.stringify(SaveData.object);
        Util.saveJSONLocalStrage("saveData", SaveData.object);
    };
    SaveData.load = function () {
        SaveData.object = Util.loadJSONLocalStrage("saveData");
    };
    SaveData.deleteData = function () {
        SaveData.object = null;
        SaveData.load();
    };
    SaveData.prototype.updateContent = function () { };
    return SaveData;
}());
__reflect(SaveData.prototype, "SaveData");
//# sourceMappingURL=SaveData.js.map