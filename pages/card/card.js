// pages/card/card.js
var app = getApp();
Page({
    data: {
        pageName:'memberCardInfo',
    },
    onLoad: function (options) {
        var that = this;
        app.getData(that.data.pageName, 'CARDINFO', app.apiServer.parmas).then(function(res){
            that.setData({
                cardInfo: res
            });
        });
        app.getData('memberCardTemplate', 'CARD', app.apiServer.parmas).then(function (res) {
            that.setData({
                card: res
            });
        });
        console.log(that.data)
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