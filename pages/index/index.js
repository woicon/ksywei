// pages/index/index.js
var app = getApp();
Page({
  data: {
    shopinfo:{ shopname:'西少爷肉夹馍北苑路北店',
                shopimg: '../../pages/images/usimg.jpg', 
                shoplocation:'北京市朝阳区北苑路北',
                shoptel:"18912312312"},
    coupons:[{
      type:1,
      value:20,
      stat: false,
      range:"2017-07-12至2017-12-22",
      time:'2017-12-12',
      color:'cards3'
    }, {
      type: 2,
      value: 20,
      stat: true,
      range: "2017-07-12至2017-12-22",
      time: '2017-12-12',
      color: 'cards1'
      }, {
        type: 1,
        value: 20,
        stat: true,
        range: "2017-07-12至2017-12-22",
        time: '2017-12-12',
        color: 'cards2'
      }],
    comment:[{
        userName:"JSON Broke",
        stars:4,
        userImage: '../../pages/images/userimg.jpg',
        content:'东四四条胡同里，走50米左右就能看到了。奔着他家紫姜江团来的，看着就好吃。一进门，古香古色的，很有北京味道。每个椅子上都有一个坐垫，很贴心。店里有一个大鱼缸，里面有两......'
    }, {
        userName: "JSON Broke",
        stars: 4,
        userImage: '../../pages/images/userimg.jpg',
        content: '东四四条胡同里，走50米左右就能看到了。奔着他家紫姜江团来的，看着就好吃。一进门，古香古色的，很有北京味道。每个椅子上都有一个坐垫，很贴心。店里有一个大鱼缸，里面有两......'
        }, {
            userName: "JSON Broke",
            stars: 4,
            userImage: '../../pages/images/userimg.jpg',
            content: '东四四条胡同里，走50米左右就能看到了。奔着他家紫姜江团来的，看着就好吃。一进门，古香古色的，很有北京味道。每个椅子上都有一个坐垫，很贴心。店里有一个大鱼缸，里面有两......'
        }],
    couponlist: {
        "coupons": [
            {
                "couponNo": "90685494123123123552",
                "couponName": "流程21元代金券",
                "couponStatus": 1,
                "couponType": 5,
                "getDate": "20170614 13:24:01",
                "reduceCost": 12,
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
                "couponStatus": 5,
                "couponType": 5,
                "getDate": "20170614 13:24:01",
                "reduceCost": 5,
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
    pageloading:true,
      
  },
  callShop:function(){
      wx.makePhoneCall({
        phoneNumber: this.data.shopinfo.shoptel
      })
  },
  onLoad: function (options) {
    var that = this;
    wx.setNavigationBarTitle({
      title: '西少爷'
    });
    //加载tabBar菜单
    app.setTab();
    wx.getLocation({
        success:function(res){
            var latitude = res.latitude
            var longitude = res.longitude
            var speed = res.speed
            var accuracy = res.accuracy
            
            console.log(accuracy)
        }
    });
  },
  onReady: function () {
      this.setData({
          pageloading: true
      });
  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  }
})