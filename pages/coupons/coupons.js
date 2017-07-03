// pages/coupons/coupons.js
Page({
  data: {
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
  couponDescription:function(e){
      var stats = true;//this.data.coupstat[e.currentTarget.id];
      var elmstat = this.data.coupstat;
      var stat = elmstat[e.currentTarget.id]?false:true;
      elmstat[e.currentTarget.id]= stat;
        this.setData({
            coupstat: elmstat
        });
    
  },
  onLoad: function (options) {
    var that = this;
    var elmStat = {};
    wx.setNavigationBarTitle({
      title: '我的卡券'
    })
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