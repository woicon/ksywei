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
      couponlist: {
          "pageCount": 5,
          "totalCount": 43,
          "currentPage": 1,
          "pageSize": 10,
            "items": [
                {
                    "couponNo": "906440280357854942",
                    "couponName": "流程21元代金券",
                    "couponStatus": 1,
                    "couponType": 5,
                    "getDate": "2017-06-14 13:24:01",
                    "reduceCost": 1,
                    "leastCost": 1,
                    "beginTime": "2017-06-14 13:22:07",
                    "endTime": "2017-07-14 13:22:07",
                    "giveFriend": 1,
                    "notice": "请在结账时出示给服务员",
                    "description": "本优惠券不可兑换现金，不可找零。",
                    "servicePhone": "",
                    "merchantId": 10104677,
                    "merchantName": "收款小精灵",
                    "logo": "http://open.liantuobank.cn/assets/images/wechat.png",
                    "color": "#A795FF",
                    "syncWechat": 0,
                    "wechatCardId": "pd-est9w8jlngxvDybO1qGaURiNY",
            "goodItem": {
                    "itemName": "饼干",
                    "itemNo": "12345678",
                    "itemPrice": 1,
                    "itemText": "苏打饼干",
                    "status": 0
                }
                },
            {
                    "couponNo": "902247244565344031",
                    "couponName": "2折",
                    "couponStatus": 1,
                    "couponType": 1,
                    "getDate": "2017-06-13 17:45:13",
                    "leastCost": 1,
                    "discount": 2,
                    "beginTime": "2017-06-13 11:02:43",
                    "endTime": "2017-07-13 11:02:43",
                    "giveFriend": 1,
                    "notice": "请在结账时出示给服务员",
                    "description": "本优惠券不可兑换现金，不可找零。",
                    "servicePhone": "",
                    "merchantId": 10104677,
                    "merchantName": "收款小精灵",
                    "logo": "http://192.168.5.158:8070/assets/images/wechat.png",
                    "color": "#FF7A6B",
                    "syncWechat": 0,
                    "wechatCardId": "pd-est5wP6YCQX593-3zV2bCWQxs"
                },
                {
                    "couponNo": "909349912314754221",
                    "couponName": "2折",
                    "couponStatus": 1,
                    "couponType": 1,
                    "getDate": "201706-13 17:45:21",
                    "leastCost": 1,
                    "discount": 2,
                    "beginTime": "2017-06-13 11:02:43",
                    "endTime": "2017-07-13 11:02:43",
                    "giveFriend": 1,
                    "notice": "请在结账时出示给服务员",
                    "description": "本优惠券不可兑换现金，不可找零。",
                    "servicePhone": "",
                    "merchantId": 10104677,
                    "merchantName": "收款小精灵",
                    "logo": "http://192.168.5.158:8070/assets/images/wechat.png",
                    "color": "#FFC491",
                    "syncWechat": 0,
                    "wechatCardId": "pd-est5wP6YCQX593-3zV2bCWQxs"
                },
                {
                    "couponNo": "907360826700354843",
                    "couponName": "2折",
                    "couponStatus": 2,
                    "couponType": 1,
                    "getDate": "2017-06-13 11:17:55",
                    "leastCost": 1,
                    "discount": 2,
                    "beginTime": "2017-06-13 11:02:43",
                    "endTime": "2017-07-13 11:02:43",
                    "giveFriend": 1,
                    "notice": "请在结账时出示给服务员",
                    "description": "本优惠券不可兑换现金，不可找零。",
                    "servicePhone": "",
                    "merchantId": 10104677,
                    "merchantName": "收款小精灵",
                    "logo": "http://192.168.5.158:8070/assets/images/wechat.png",
                    "color": "#A795FF",
                    "syncWechat": 0,
                    "wechatCardId": "pd-est5wP6YCQX593-3zV2bCWQxs"
                },
                {
                    "couponNo": "904122527835624602",
                    "couponName": "2折",
                    "couponStatus": 1,
                    "couponType": 1,
                    "getDate": "2017-06-13 11:06:59",
                    "leastCost": 1,
                    "discount": 2,
                    "beginTime": "2017-06-13 11:02:43",
                    "endTime": "2017-07-13 11:02:43",
                    "giveFriend": 1,
                    "notice": "请在结账时出示给服务员",
                    "description": "本优惠券不可兑换现金，不可找零。",
                    "servicePhone": "",
                    "merchantId": 10104677,
                    "merchantName": "收款小精灵",
                    "logo": "http://192.168.5.158:8070/assets/images/wechat.png",
                    "color": "#A795FF",
                    "syncWechat": 0,
                    "wechatCardId": "pd-est5wP6YCQX593-3zV2bCWQxs"
                },
                {
                    "couponNo": "902235415144254737",
                    "couponName": "2折",
                    "couponStatus": 1,
                    "couponType": 1,
                    "getDate": "2017-06-13 16:24:39",
                    "leastCost": 1,
                    "discount": 2,
                    "beginTime": "2017-06-13 11:02:43",
                    "endTime": "2017-07-13 11:02:43",
                    "giveFriend": 1,
                    "notice": "请在结账时出示给服务员",
                    "description": "本优惠券不可兑换现金，不可找零。",
                    "servicePhone": "",
                    "merchantId": 10104677,
                    "merchantName": "收款小精灵",
                    "logo": "http://192.168.5.158:8070/assets/images/wechat.png",
                    "color": "#FFC160",
                    "syncWechat": 0,
                    "wechatCardId": "pd-est5wP6YCQX593-3zV2bCWQxs"
                },
                {
                    "couponNo": "901549426739334408",
                    "couponName": "2折",
                    "couponStatus": 1,
                    "couponType": 1,
                    "getDate": "2017-06-13 17:45:17",
                    "leastCost": 1,
                    "discount": 2,
                    "beginTime": "2017-06-13 11:02:43",
                    "endTime": "2017-07-13 11:02:43",
                    "giveFriend": 1,
                    "notice": "请在结账时出示给服务员",
                    "description": "本优惠券不可兑换现金，不可找零。",
                    "servicePhone": "",
                    "merchantId": 10104677,
                    "merchantName": "收款小精灵",
                    "logo": "http://192.168.5.158:8070/assets/images/wechat.png",
                    "color": "#63b359",
                    "syncWechat": 0,
                    "wechatCardId": "pd-est5wP6YCQX593-3zV2bCWQxs"
                },
                {
                    "couponNo": "900077942193204153",
                    "couponName": "2折",
                    "couponStatus": 4,
                    "couponType": 1,
                    "getDate": "2017-06-13 11:18:17",
                    "leastCost": 1,
                    "discount": 2,
                    "beginTime": "2017-06-13 11:02:43",
                    "endTime": "2017-07-13 11:02:43",
                    "giveFriend": 1,
                    "notice": "请在结账时出示给服务员",
                    "description": "本优惠券不可兑换现金，不可找零。",
                    "servicePhone": "",
                    "merchantId": 10104677,
                    "merchantName": "收款小精灵",
                    "logo": "http://192.168.5.158:8070/assets/images/wechat.png",
                    "color": "#FF7A6B",
                    "syncWechat": 0,
                    "wechatCardId": "pd-est5wP6YCQX593-3zV2bCWQxs"
                },
                {
                    "couponNo": "902622453888604527",
                    "couponName": "2折",
                    "couponStatus": 1,
                    "couponType": 1,
                    "getDate": "2017-06-13 17:45:08",
                    "leastCost": 1,
                    "discount": 2,
                    "beginTime": "2017-06-13 11:02:43",
                    "endTime": "2017-07-13 11:02:43",
                    "giveFriend": 1,
                    "notice": "请在结账时出示给服务员",
                    "description": "本优惠券不可兑换现金，不可找零。",
                    "servicePhone": "",
                    "merchantId": 10104677,
                    "merchantName": "收款小精灵",
                    "logo": "http://192.168.5.158:8070/assets/images/wechat.png",
                    "color": "#FF7A6B",
                    "syncWechat": 0,
                    "wechatCardId": "pd-est5wP6YCQX593-3zV2bCWQxs"
                },
                {
                    "couponNo": "909472542541104982",
                    "couponName": "2折",
                    "couponStatus": 3,
                    "couponType": 1,
                    "getDate": "2017-06-13 11:18:11",
                    "leastCost": 1,
                    "discount": 2,
                    "beginTime": "2017-06-13 11:02:43",
                    "endTime": "2017-07-13 11:02:43",
                    "giveFriend": 1,
                    "notice": "请在结账时出示给服务员",
                    "description": "本优惠券不可兑换现金，不可找零。",
                    "servicePhone": "",
                    "merchantId": 10104677,
                    "merchantName": "收款小精灵",
                    "logo": "http://192.168.5.158:8070/assets/images/wechat.png",
                    "color": "#FF7A6B",
                    "syncWechat": 0,
                    "wechatCardId": "pd-est5wP6YCQX593-3zV2bCWQxs"
                }
            ],
                "returnCode": "S",
                "returnMessage": "操作成功"
            },
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
    const requestTask = wx.request({
        url: app.apiServer.host +'couponList.htm',
        data:{
            json: app.apiServer.parmas,
        },
        success: function (res) {
            console.log(res.data)
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