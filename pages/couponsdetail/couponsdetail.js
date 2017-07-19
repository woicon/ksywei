// pages/couponsdetail/couponsdetail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
        coupon:{
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
                "description": "本优惠券不可兑换现金，不可找零。原价7元，领取3元优惠券，4元包邮。领券下单前请确认券是否有效，如果失效请酌情购买。点我领取天猫商家报价39.9元，领取30元优惠券，券后9.9元包邮。领券下单前请确认券是否有效，如果失效请酌情购买。",
                "servicePhone": "",
                "merchantId": 10104677,
                "merchantName": "收款小精灵",
                "logo": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=890672907,1804061896&fm=58",
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
        couponStatus: ['未生效','可使用','已使用','已失效','已过期','已删除','已锁定'],
        couponType:['代金券','折扣券','兑换券','优惠券','团购券','单品代金券','会员卡','单品折扣'],

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#1cc16f',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})