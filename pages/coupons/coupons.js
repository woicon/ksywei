// pages/coupons/coupons.js
var app = getApp();
var rgba = require('../../utils/common.js');
Page({
    data: {
        currentTab: 0,//tab切换
        // failure:false,//查看失效优惠券
        couponStatus: ['未生效','可使用','已使用','已失效','已过期','已删除','已锁定'],
        couponType: ['代金券', '折扣券', '兑换券', '优惠券', '团购券', '单品代金券', '会员卡','单品折扣'],
        pageName:'couponList',
    },

    viewRules: function () {
        wx.navigateTo({
            url: '/pages/coupons/couponsRules',
        });
    },
    
    failureCoupons: function () {
      this.setData({
        failure: true
      });
    },

    effectiveCoupons: function () {
      this.setData({
        failure: false
      });
    },
  
    //查看优惠券详情
    couponDescription:function(e){
        let that = this;
        let touchTime = that.data.touchEnd - that.data.touchStart;
        let couponNo = e.currentTarget.id;
        let parmas = { couponNo: e.currentTarget.id, superMerchantId: app.apiServer.parmas.merchantId, openId: app.apiServer.parmas.openId }
        var _couponList = that.data.couponList;
        var _colorList = that.data.colorList;
        if (touchTime > 350) {
            wx.showModal({
            title: '删除优惠券？',
            content: '',
            success:function(res){
                if (res.confirm) {
                    wx.request({
                        url: app.apiServer.host + 'delCoupon.htm?json=' + JSON.stringify(parmas),
                        method: 'POST',
                        success: function (res) {
                            if (res.data.returnCode == 'S'){
                                _couponList.items.splice(e.currentTarget.dataset.id, 1);
                                _colorList.splice(e.currentTarget.dataset.id,1);
                                wx.showToast({
                                    title: '已删除',
                                    icon: 'success',
                                    duration: 2000
                                })
                                that.setData({
                                    couponList:_couponList,
                                    colorList: _colorList,
                                })
                                wx.clearStorageSync("COUPONS");
                            }
                        }
                    });
                    return false;
                } else if (res.cancel) {

                }
            }
            });

            wx.request({
                url: app.apiServer.host + 'delCoupon.htm?json=' + JSON.stringify(parmas),
                method: 'POST',
                // data:{
                //     json:parame
                // },
                success: function (res) {
                    console.log(res);
                }
            });
        }else{
            wx.navigateTo({
                url: '/pages/couponsdetail/couponsdetail?id=' + e.currentTarget.id,
            });
        }
        
    },
    tolower:function(e){
        console.log(e);
    },
  onLoad: function (options) {
        var that = this;
        wx.showLoading({
            title: '加载中',
        });
        wx.setNavigationBarTitle({
            title: '我的卡券'
        });
        app.setTab();
       
    },
    touchStart: function (e) {
        let that = this;
        that.setData({
            touchStart: e.timeStamp
        });
        //console.log(e.timeStamp + '- touch-start')
    },

    touchEnd: function (e) {
        let that = this;
        that.setData({
            touchEnd: e.timeStamp
        })
        //console.log(e.timeStamp + '- touch-end')
    },  
    onReady: function () {

        var that = this;
        wx.hideLoading();

        var parmas = {};
        parmas.openId = app.apiServer.parmas.openId;
        parmas.pageSize = 100;
        console.log(parmas);
        app.getData('couponList', 'COUPONS', parmas).then(function (res) {
            console.log(res);
            var colorList = [];
            var colorData = res.items;
            for (let i in colorData) {
                let colors = colorData[i].cardTemplate.color;
                colorList.push(colors.colorRgb());
            }
            that.setData({
                couponList: res,
                colorList: colorList
            });
        });


    },
    onShow: function () {
        console.log('2222');
    },
    onHide: function () {

    },
    onUnload: function () {

    },
    onPullDownRefresh: function () {
        console.log('pullDownRefresh');
    },
    onReachBottom: function () {
        var that = this;
        var parmas = {};
        parmas.openId = app.apiServer.parmas.openId;
        parmas.currentPage = 2;
        parmas.pageSize = 1;
        app.request('couponList', parmas).then(function(data){
            console.log(data);
        });
    },
    onShareAppMessage: function () {

    }
})