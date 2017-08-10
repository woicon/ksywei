// pages/ewmpay/ewmpay.js
var app = getApp();
var code = require("../../utils/code.js");
Page({
    data: {
        color:'#1CC16F',
    },
    onLoad: function (options) {
        var that = this;
        wx.setNavigationBarTitle({
            title: '会员支付',
        });
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor:this.data.color,
        });
        app.getData('getPayCode', 'PAYCODE', app.apiServer.parmas).then(function(res){
            console.log(res);
            var size = code.size();
            that.setData({
                payCode: res,
                width:size.w,
                height:size.h
            });
            code.qr(res.payCode, 'qr', size.w,size.h);
            code.bar(res.payCode,'bar', size.w+10,40);
            console.log(that.data)
        });
    },
    onReady: function () {

    },
    onShow: function () {

    },
    onHide: function () {

    },
    onUnload: function () {

    },
    onPullDownRefresh: function () {

    },
    onReachBottom: function () {

    },
    onShareAppMessage: function () {

    }
})