var app = getApp();
Page({
    data: {
        payAmount: "0",//支付的价格
        focus: true,
    },
    onLoad: function (e) {
        var that = this;
        wx.setNavigationBarTitle({
            title: '个人中心'
        });
        app.getUserInfo(function (userInfo) {
            that.setData({
                userInfo: userInfo,
            });
        });
    }
});