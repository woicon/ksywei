// pages/ewmpay/ewmpay.js
var app = getApp();
var code = require("../../utils/code.js");
Page({
    data: {
        color:'#1CC16F',
        endtime:120,
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
        that.getPayCode();
    },
    getPayCode:function(){
        var that = this;
        app.getData('getPayCode', 'PAYCODE', app.apiServer.parmas).then(function (res) {
            var size = code.size();
            that.setData({
                payCode: res,
                width: size.w,
                height: size.h,
            });
            code.qr(res.payCode, 'qr', size.w, size.h);
            code.bar(res.payCode, 'bar', size.w + 10, 60);
            that.getverification();//倒计时自动刷新
        });
    },
    //倒计时
    getverification: function () {
        console.log('s123123');
        var that = this;
        
        var time = that.data.endtime;
        for (let i = 0; i <= time; i++) {
            setTimeout((function callback() {
                that.setData({
                    endtime: time - i
                });
                if (this.data.endtime == 0) {
                    wx.clearStorageSync('PAYCODE');
                    that.getPayCode();
                    this.setData({
                        endtime:120
                    });
                }
                console.log(that.data)
            }).bind(that), i * 1000);
        }
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