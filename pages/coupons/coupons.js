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
                  "color": "#63b359",
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
                  "color": "#63b359",
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
                  "color": "#63b359",
                  "syncWechat": 0,
                  "wechatCardId": "pdest9w8jlngxvDybO1qGaURiNY"
              }
          ],
          "returnCode": "S",
          "returnMessage": "操作成功"
      },
      coupstat:{},
  },
  viewRules: function () {
      wx.navigateTo({
          url: '/pages/coupons/couponsRules',
      });
  },
  couponDescription:function(e){
      var _couponStat = this.data.couponStat;

      for (var i in _couponStat) {
          _couponStat[i] = false;
      }

      
      _couponStat[e.currentTarget.id] = true;
      console.log(_couponStat);
      this.setData({
          couponStat: _couponStat
      });
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

    //设置优惠券显示隐藏状态
    var _couponStat = {};
    var couponsitm = this.data.couponlist.coupons;
    for (var i in couponsitm){
        var _no = couponsitm[i].couponNo;
        _couponStat[_no] = false;
    }
    this.setData({
        couponStat: _couponStat
    });

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