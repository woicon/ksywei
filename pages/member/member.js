var app = getApp();
Page({
    data: {
        payAmount: "0",//支付的价格
        focus: true
    },
    viewCard: function () {
        wx.navigateTo({
            url: '/pages/card/card',
        })
    },
    //积分
    viewIntegral: function () {
        wx.navigateTo({
            url: '/pages/integral/integral',
        })
    },
    //充值
    topupMoney: function () {
        wx.navigateTo({
            url: '/pages/topup/topup',
        })
    },
    //会员卡支付
    vipPay : function () {
        wx.navigateTo({
            url: '/pages/ewmpay/ewmpay',
        })
    },
    onLoad: function (e) {
        var that = this;
        wx.setNavigationBarTitle({
            title: '个人中心'
        });
        //加载tabBar菜单
        app.setTab();
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: app.globalData.color,
        })

        app.getData('memberCardInfo', 'CARDINFO', app.apiServer.parmas).then(function (res) {
            that.setData({
                cardInfo: res
            });
        });
        app.getData('memberCardTemplate', 'CARD', app.apiServer.parmas).then(function (res) {
            that.setData({
                card: res
            });
        });
        that.setData({
            userInfo: app.weChatUserInfo.userInfo,
        });
        console.log(that.data)
    }
});