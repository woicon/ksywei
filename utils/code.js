
//绘制二维码和条形码
var QR = require("./qrcode.js");
var BR = require('./barcode.js');
function setCanvasSize() {
    var size = {};
    try {
        var res = wx.getSystemInfoSync();
        var scale = 750 / 500;//不同屏幕下canvas的适配比例；
        var width = res.windowWidth / scale;
        var height = width;//canvas画布为正方形
        size.w = width;
        size.h = height;
    } catch (e) {
        console.log("获取设备信息失败" + e);
    }
    return size;
}

//绘制二维码图片
function createQrCode(code, canvasId, cavW, cavH) {
    QR.qrApi.draw(code, canvasId, cavW, cavH);
}

//绘制条形码图片
function createBarCode(code, canvasId, cavW, cavH) {
    BR.code128(wx.createCanvasContext(canvasId), code, cavW, cavH);
}

module.exports = {
    qr: createQrCode,
    bar: createBarCode,
    size: setCanvasSize
}