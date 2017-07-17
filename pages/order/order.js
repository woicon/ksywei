// pages/order/order.js
var app = getApp();
Page({
  data: {
        // 页面配置  
        winWidth: 0,
        winHeight: 0,
        currentTab: 0,
    orderList:[  //stat 0 未支付  1 已完成 2 待收货 4 已取消
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付',
            stat: 0,
        },
        {
            id:912939123123,
            time:'2017-12-12 9:00',
            total:'80',
            payType:'微信支付',
            stat:1,
            sku:[
                {skuimg:'',skuid:'2323123',skuPrice:'90',skuName:'辣子鸡',skuNumber:1},
                {skuimg: '', skuid: '2323123', skuPrice: '90', skuName: '辣子鸡', skuNumber: 1 },
                {skuimg: '', skuid: '2323123', skuPrice: '90', skuName: '辣子鸡', skuNumber: 1 },
            ]
        },{
            id:912939123123,
            time:'2017-12-12 9:00',
            total:'80',
            payType:'微信支付',
            stat: '已完成',
            stat: 1,
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付',
            stat: 1,
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付',
            stat: 1,
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付',
            stat: 2,
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付',
            stat: 3,
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '会员支付',
            stat: 4,
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付'
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付'
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付'
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付'
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付'
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付'
        },
    ]
  },
  // 滑动切换tab 
  bindChange: function (e) {
      var that = this;
      that.setData({ currentTab: e.detail.current });
  },
  // 点击tab切换 
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
    wx.setNavigationBarTitle({
      title: '我的订单'
    });
    app.setTab();
    // 获取系统信息 
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