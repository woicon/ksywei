// pages/coupons/coupons.js
var app = getApp();
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
    //   var __couponStat = this.data.couponStat;
    //   console.log(e);
   
    //   var cstat = __couponStat[e.currentTarget.id];
    //   cstat = !cstat?true:false;
    //   __couponStat[e.currentTarget.id] = cstat;
    //   this.setData({
    //     couponStat: __couponStat
    //   });

    wx.navigateTo({
        url: '/pages/couponsdetail/couponsdetail',
    })
  },

  onLoad: function (options) {
    var that = this;
    var elmStat = {};
    app.setTab();
    wx.setNavigationBarTitle({
      title: '我的卡券'
    });

    wx.request({
        url: app.apiServer.host +'couponList.htm',
        data:{
            json: app.apiServer.parmas,
        },
        success: function (res) {
            console.log(res.data);

            that.setData({
                couponlist: res.data
            });
        }
    });

    // //设置优惠券显示隐藏状态
    // var _couponStat = {};
    // var couponsitm = this.data.couponlist.coupons;
    // for (var i in couponsitm){
    //  // _couponStat[e.currentTarget.id] = false;
    // }
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