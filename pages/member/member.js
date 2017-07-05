var app = getApp();
Page({
    data: {
        payAmount: "0",//支付的价格
        focus: true,
    },
    viewCard: function () {
        wx.navigateTo({
            url: '/pages/card/card',
        })
    },
    viewIntegral: function () {
        
    },
    topupMoney: function () {
        wx.navigateTo({
            url: '/pages/topup/topup',
        })
    },
    onLoad: function (e) {
        var that = this;
        wx.setNavigationBarTitle({
            title: '个人中心'
        });
        app.setTab();
        app.getUserInfo(function (userInfo) {
            that.setData({
                userInfo: userInfo,
            });
        });
    }
});