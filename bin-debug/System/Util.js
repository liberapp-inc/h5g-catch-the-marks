// ゲームで便利に使えるUtilityクラス
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Util = (function () {
    function Util() {
    }
    Util.init = function (eui) {
        this.height = eui.stage.stageHeight;
        this.width = eui.stage.stageWidth;
        this.ui = eui;
    };
    Util.random = function (min, max) {
        return min + Math.random() * (max - min);
    };
    Util.randomInt = function (min, max) {
        return Math.floor(min + Math.random() * (max + 0.999 - min));
    };
    Util.clamp = function (value, min, max) {
        if (value < min)
            value = min;
        if (value > max)
            value = max;
        return value;
    };
    //rgbを16進数へ変換
    Util.color = function (r, g, b) {
        //小数点の切り捨て
        var r16 = r.toFixed(0);
        var g16 = g.toFixed(0);
        var b16 = b.toFixed(0);
        //16進数へ変換
        r16 = r.toString(16);
        g16 = g.toString(16);
        b16 = b.toString(16);
        //r = 0だと r16 =0なので00にするために'00'加算
        r16 = ('00' + r16).slice(-2);
        g16 = ('00' + g16).slice(-2);
        b16 = ('00' + b16).slice(-2);
        //色コードへ変換
        var code = parseInt(("0x" + r16 + g16 + b16), 16);
        return code;
    };
    Util.myText = function (x, y, text, size, ratio, color, bold) {
        var label = new eui.Label();
        label.scaleX = ratio;
        label.scaleY = ratio;
        label.bold = bold;
        label.size = size;
        label.text = text;
        label.textColor = color;
        label.x = x;
        label.y = y;
        label.multiline = true;
        return label;
    };
    Util.myStrokeText = function (x, y, text, size, ratio, color, font, stColor, stSize) {
        var label = new eui.Label();
        label.x = x;
        label.y = y;
        label.scaleX = ratio;
        label.scaleY = ratio;
        label.textFlow = [
            { text: text,
                style: {
                    "textColor": color, "size": size, "fontFamily": font, "strokeColor": stColor, "stroke": stSize,
                }
            }
        ];
        return label;
    };
    Util.saveLocalStrage = function (key, saveValue) {
        window.localStorage.setItem(key, saveValue.toString());
    };
    Util.loadLocalStrage = function (key, initialValue) {
        var stringValue = window.localStorage.getItem(key); // string
        if (stringValue == null) {
            stringValue = initialValue.toString();
            window.localStorage.setItem(key, stringValue.toString());
        }
        var value = parseInt(stringValue);
        return value;
    };
    Util.saveJSONLocalStrage = function (key, saveObject) {
        var jObject = JSON.stringify(saveObject);
        window.localStorage.setItem(key, jObject);
    };
    Util.loadJSONLocalStrage = function (key) {
        var jObject = window.localStorage.getItem(key); // string
        if (jObject == null) {
            SaveData.initial();
            jObject = JSON.stringify(SaveData.object);
            window.localStorage.setItem(key, jObject);
        }
        var object = JSON.parse(jObject);
        return object;
    };
    Util.setRect = function (x, y, width, height, color, round) {
        var shape = new egret.Shape();
        shape.x = x;
        shape.y = y;
        shape.graphics.beginFill(color);
        shape.graphics.drawRoundRect(0, 0, width, height, round);
        shape.graphics.endFill();
        return shape;
    };
    Util.setCircle = function (x, y, width, height, color, radius) {
        var shape = new egret.Shape();
        shape.x = x;
        shape.y = y;
        shape.graphics.beginFill(color);
        shape.graphics.drawCircle(0, 0, radius);
        shape.graphics.endFill();
        return shape;
    };
    Util.setLine = function (x, y, length, degree, lineWidth, color) {
        var rad = (360 - degree) * Math.PI / 180; //Egretの角度は時計回りが正
        var shape = new egret.Shape();
        shape.x = x;
        shape.y = y;
        shape.graphics.lineStyle(lineWidth, color);
        shape.graphics.moveTo(0, 0);
        shape.graphics.lineTo(length * Math.cos(rad), length * Math.sin(rad));
        return shape;
    };
    Util.remove = function (display, removeObject) {
        if (display) {
            display.removeChild(removeObject);
        }
        removeObject = null;
    };
    //-----------------------------
    //ベクトル系は間違っている可能性あり
    Util.vector = function (size, degree, startPointX, startPointY) {
        var rad = (360 - degree) * Math.PI / 180; //Egretの角度は時計回りが正
        var v = [];
        if (startPointX == undefined && startPointY == undefined) {
            v[0] = size * Math.cos(rad); //x
            v[1] = size * Math.sin(rad); //y
        }
        else {
            v[0] = size * Math.cos(rad) - startPointX; //x
            v[1] = size * Math.sin(rad) - startPointY; //y
        }
        v[2] = size;
        return v;
    };
    //外積
    Util.cross = function (v1, v2) {
        var cross = v1[0] * v2[1] - v1[1] * v2[0];
        return cross;
    };
    //内積
    Util.dot = function (v1, v2) {
        var dot = v1[0] * v2[0] + v1[1] * v2[1];
        return dot;
    };
    Util.cos = function (v1, v2) {
        var v1Size = Math.sqrt(Math.pow(v1[0], 2) + Math.pow(v1[1], 2));
        var v2Size = Math.sqrt(Math.pow(v2[0], 2) + Math.pow(v2[1], 2));
        if (v1Size < 0) {
            v1Size *= -1;
        }
        if (v2Size < 0) {
            v2Size *= -1;
        }
        var cos = Util.dot(v1, v2) / (v1Size * v2Size);
        return cos;
    };
    Util.sin = function (v1, v2) {
        var v1Size = Math.sqrt(Math.pow(v1[0], 2) + Math.pow(v1[1], 2));
        var v2Size = Math.sqrt(Math.pow(v2[0], 2) + Math.pow(v2[1], 2));
        if (v1Size < 0) {
            v1Size *= -1;
        }
        if (v2Size < 0) {
            v2Size *= -1;
        }
        var sin = Util.cross(v1, v2) / (v1Size * v2Size);
        return sin;
    };
    Util.size = function (v) {
        var size = Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
        return size;
    };
    //2次元反射ベクトル
    //反射ベクトル = 入射べクトル - 法線ベクトル*2
    //https://thinkit.co.jp/article/8466
    Util.reflectionVector = function (inVector, wallVector, vectorNumber) {
        var cos = Util.cos(inVector, wallVector);
        var sin = Util.sin(inVector, wallVector);
        var normalVector = [];
        switch (vectorNumber) {
            case FrameLine.RIGHT:
                normalVector[0] = -inVector[0] * cos;
                normalVector[1] = 0;
                normalVector[2] = Math.abs(inVector[2] * cos);
                break;
            case FrameLine.LEFT:
                normalVector[0] = inVector[0] * cos;
                normalVector[1] = 0;
                normalVector[2] = Math.abs(inVector[2] * cos);
                break;
            case FrameLine.UP:
                normalVector[0] = 0;
                normalVector[1] = inVector[1] * sin;
                normalVector[2] = Math.abs(inVector[2] * sin);
                break;
            case FrameLine.DOWN:
                normalVector[0] = 0;
                normalVector[1] = -inVector[1] * sin;
                normalVector[2] = Math.abs(inVector[2] * sin);
                break;
        }
        var reflectionVector = [];
        for (var i = 0; i <= 1; i++) {
            reflectionVector[i] = inVector[i] - normalVector[i] * 2;
        }
        return reflectionVector;
    };
    return Util;
}());
__reflect(Util.prototype, "Util");
//# sourceMappingURL=Util.js.map