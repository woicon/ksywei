// pages/coupons/coupons.js
var app = getApp();
Page({
  data: {
      winWidth: 0,
      winHeight: 0,
      currentTab: 0,// tab切换
      couponlist:{
          "coupons": [
              {
                  "couponNo": "90685494123123123552",
                  "couponName": "流程21元代金券",
                  "couponStatus": 1,
                  "couponType": 5,
                  "getDate": "20170614 13:24:01",
                  "reduceCost": 1,
                  "leastCost": 1,
                  "beginTime": "20170614 13:22:07",
                  "endTime": "20170714 13:22:07",
                  "giveFriend": 1,
                  "notice": "请在结账时出示给服务员",
                  "description": "本优惠券不可兑换现金，不可找零。",
                  "servicePhone": "",
                  "merchantId": 10104677,
                  "merchantName": "收款小精灵",
                  "logo": "http://open.liantuobank.cn/assets/images/wechat.png",
                  "color": "#7DBBFF",
                  "syncWechat": 0,
                  "wechatCardId": "pdest9w8jlngxvDybO1qGaURiNY"
              },
              {
                  "couponNo": "906",
                  "couponName": "流程21元代金券",
                  "couponStatus": 1,
                  "couponType": 5,
                  "getDate": "20170614 13:24:01",
                  "reduceCost": 1,
                  "leastCost": 1,
                  "beginTime": "20170614 13:22:07",
                  "endTime": "20170714 13:22:07",
                  "giveFriend": 1,
                  "notice": "请在结账时出示给服务员",
                  "description": "本优惠券不可兑换现金，不可找零。",
                  "servicePhone": "",
                  "merchantId": 10104677,
                  "merchantName": "收款小精灵",
                  "logo": "http://open.liantuobank.cn/assets/images/wechat.png",
                  "color": "#FF7A6B",
                  "syncWechat": 0,
                  "wechatCardId": "pdest9w8jlngxvDybO1qGaURiNY"
              },
              {
                  "couponNo": "aa9064402803578549421123123123",
                  "couponName": "流程21元代金券",
                  "couponStatus": 1,
                  "couponType": 5,
                  "getDate": "20170614 13:24:01",
                  "reduceCost": 1,
                  "leastCost": 1,
                  "beginTime": "20170614 13:22:07",
                  "endTime": "20170714 13:22:07",
                  "giveFriend": 1,
                  "notice": "请在结账时出示给服务员",
                  "description": "本优惠券不可兑换现金，不可找零。",
                  "servicePhone": "",
                  "merchantId": 10104677,
                  "merchantName": "收款小精灵",
                  "logo": "http://open.liantuobank.cn/assets/images/wechat.png",
                  "color": "#FFC491",
                  "syncWechat": 0,
                  "wechatCardId": "pdest9w8jlngxvDybO1qGaURiNY"
              }
              ,
              {
                  "couponNo": "aa9064402803578549421123123123",
                  "couponName": "流程21元代金券",
                  "couponStatus": 1,
                  "couponType": 5,
                  "getDate": "20170614 13:24:01",
                  "reduceCost": 1,
                  "leastCost": 1,
                  "beginTime": "20170614 13:22:07",
                  "endTime": "20170714 13:22:07",
                  "giveFriend": 1,
                  "notice": "请在结账时出示给服务员",
                  "description": "本优惠券不可兑换现金，不可找零。",
                  "servicePhone": "",
                  "merchantId": 10104677,
                  "merchantName": "收款小精灵",
                  "logo": "http://open.liantuobank.cn/assets/images/wechat.png",
                  "color": "#45E091",
                  "syncWechat": 0,
                  "wechatCardId": "pdest9w8jlngxvDybO1qGaURiNY"
              }
          ],
          "returnCode": "S",
          "returnMessage": "操作成功"
      },
      couponStat:{},
      couponDetails:{
        "coupon": {
                "couponNo": "901054075904214473",
                "couponName": "核销1元代金券",
                "couponStatus": 1,
                "couponType": 5,
                "getDate": "2017-06-09 16:37:38",
                "reduceCost": 1,
                "leastCost": 10,
                "discount": 0,
                "beginTime": "2017-06-20 00:00:00",
                "endTime": "2017-07-20 23:59:59",
                "giveFriend": 1,
                "notice": "请在结账时出示给服务员",
                "description": "本优惠券不可兑换现金，不可找零。",
                "servicePhone": "",
                "merchantId": 10104677,
                "merchantName": "收款小精灵",
                "logo": "http://192.168.5.158:8070/assets/images/wechat.png",
                "color": "#dd6549",
                "syncWechat": 0,
                "wechatCardId": "pd-est-bOi9HJ0f2scJGPmt41FrM",
        "goodItem": {
                "itemName": "饼干",
                "itemNo": "12345678",
                "itemPrice": 1,
                "itemText": "苏打饼干",
                "status": 0
            }
        },
            "returnCode": "S",
            "returnMessage": "操作成功"
        }
  },

  viewRules: function () {
      wx.navigateTo({
          url: '/pages/coupons/couponsRules',
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

  //滑动切换tab
  bindChange: function (e) {
      var that = this;
      that.setData({ currentTab: e.detail.current });
  },

  //点击tab切换 
  swichNav: function (e) {
      var that = this;
      if (this.data.currentTab === e.target.dataset.current) {
          return false;
      } else {
          that.setData({
              currentTab: e.target.dataset.current
          })
      }
  },

  onLoad: function (options) {
    var that = this;
    var elmStat = {};
    app.setTab();
    wx.setNavigationBarTitle({
      title: '我的卡券'
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