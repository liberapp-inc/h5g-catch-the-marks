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
        var rad = degree * Math.PI / 180;
        var shape = new egret.Shape();
        shape.x = x;
        shape.y = y;
        shape.graphics.lineStyle(lineWidth, color);
        shape.graphics.moveTo(length * Math.cos(rad), length * Math.sin(rad));
        shape.graphics.lineTo(0, 0);
        return shape;
    };
    Util.remove = function (display, removeObject) {
        if (display) {
            display.removeChild(removeObject);
        }
        removeObject = null;
    };
    return Util;
}());
__reflect(Util.prototype, "Util");
//# sourceMappingURL=Util.js.map