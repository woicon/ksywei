// pages/coupons/coupons.js
var app = getApp();
var rgba = require('../../utils/common.js');
Page({
  data: {
      winWidth: 0,
      winHeight: 0,
      currentTab: 0,// tab切换
      failure:false,//查看失效优惠券
      couponStatus: ['未生效','可使用','已使用','已失效','已过期','已删除','已锁定'],
      couponType: ['代金券', '折扣券', '兑换券', '优惠券', '团购券', '单品代金券', '会员卡','单品折扣'],
      couponlist:null,
  },

  viewRules: function () {
      wx.navigateTo({
          url: '/pages/coupons/couponsRules',
      });
  },

  failureCoupons:function(){
    this.setData({
        failure:true
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
    })
  },
  onLoad: function (options) {
    var that = this;
    wx.showLoading({
        title: '加载中',
    });
    wx.setNavigationBarTitle({
        title: '我的卡券'
    });
    var elmStat = {};
    var couponList ;
    app.setTab();
    wx.getStorage({
        key: 'COUPONS',
        success: function (res) {
            couponList = res.data;
            console.log(couponList);
        },
        fail:function(){
            // var parmas = {
            //     openId:app.weChatUserInfo.openId
            // }
            wx.request({
                url: app.apiServer.host + 'couponList.htm',
                data: {
                    json: app.apiServer.parmas,
                },
                success: function (res) {
                    wx.setStorage({
                        key: "COUPONS",
                        data: res.data
                    });
                    couponList = res.data;
                }
            });
        }
    });
    console.log(couponList.items);
     var colorList = [];
    //     colorData = couponList.items;
    // for (let i in colorData) {
    //     let colors = colorData[i].cardTemplate.color;
    //     colorList.push(colors.colorRgb());
    // }
    that.setData({
        couponList: couponList,
        colorList: colorList
    });
    console.log(that.data);
    // //设置优惠券显示隐藏状态
    // var _couponStat = {};
    // var couponsitm = this.data.couponlist.coupons;
    // for (var i in couponsitm){
    //  // _couponStat[e.currentTarget.id] = false;
    // }=
    // this.setData({
    //     couponStat: _couponStat
    // });
    //获取系统信息 
    wx.getSystemInfo({
        success: function (res) {
            that.setData({
                winWidth: res.windowWidth,
                winHeight: res.windowHeight
            });
        }
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

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})