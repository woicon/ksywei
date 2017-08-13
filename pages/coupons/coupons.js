// pages/coupons/coupons.js
var app = getApp();
var rgba = require('../../utils/common.js');
Page({
    data: {
        currentTab: 0,//tab切换
        failure:false,//查看失效优惠券
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

    effectiveCoupons:function(){
        this.setData({
            failure: false
        });   
    },

    //查看优惠券详情
    couponDescription:function(e){
        wx.navigateTo({
            url: '/pages/couponsdetail/couponsdetail?id=' + e.currentTarget.id,
        });
    },
    // getCouponData:function(){
    //     var promise = new Promise(function (resolve, reject) {
    //         wx.getStorage({
    //             key: 'COUPONS',
    //             success: function (res) {
    //                 resolve(res.data);
    //             },
    //             fail: function () {
    //                 wx.request({
    //                     url: app.apiServer.host + 'couponList.htm',
    //                     data: {
    //                         json: app.apiServer.parmas,
    //                     },
    //                     success: function (res) {
    //                         wx.setStorage({
    //                             key: "COUPONS",
    //                             data: res.data
    //                         });
    //                         resolve(res.data);
    //                     }
    //                 });
    //             }
    //         });
    //     });
    //     return promise;
    // },
  onLoad: function (options) {
      var that = this;
      wx.showLoading({
          title: '加载中',
      });
      wx.setNavigationBarTitle({
          title: '我的卡券'
      });
      app.setTab();
      var parmas= {};
      parmas.openId = app.apiServer.parmas.openId;
      parmas.pageSize = 12;
      app.getData('couponList', 'COUPONS', parmas).then( function (res) {
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
        console.log(that.data)
      });
  },

    onReady: function () {
        wx.hideLoading();
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