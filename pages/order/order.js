// pages/order/order.js
var app = getApp();
Page({
  data: {
        // 页面配置  
        winWidth: 0,
        winHeight: 0,
        currentTab: 0,
        orderStat:{
            0:'未支付',
            1:'已完成',
            2:'未完成',
            3:'已取消'
        },
        payStat:{
            0: '堂食点单',  
            1: '自提订单',
            2: '外卖订单',
            3: '扫码支付',
            4: '直接买单',
        },
        orderList: [
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付',
            orderStat: 0,
            orderType:0,
        },
        {
            id:912939123123,
            time:'2017-12-12 9:00',
            total:'80',
            payType:'微信支付',
            orderStat:1,
            orderType: 0,
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
            orderStat: 1,
            orderType: 0,
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付',
            orderStat: 1,
            orderType: 0,
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付',
            orderStat: 1,
            orderType: 0,
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付',
            orderStat: 2,
            orderType: 0,
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付',
            orderStat: 3,
            orderType:1,
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '会员支付',
            orderStat: 4,
            orderType: 0,
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付',
            orderType: 2,
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付',
            orderType: 4,
            orderType: 3,
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付',
            orderType: 4,
            orderStat: 3
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付',
            orderType: 1,
            orderStat: 3,
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付',
            orderType: 2,
            orderStat: 3,
        },
        {
            id: 912939123123,
            time: '2017-12-12 9:00',
            total: '80',
            payType: '微信支付',
            orderType: 3,
            orderStat: 3
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
  orederDetail:function(e){
    const detailPage = '/pages/orderdetail/orderdetail?orderStat=' + e.currentTarget.dataset.stat;
    wx.navigateTo({
        url: detailPage
    })
  },
  onLoad: function (options) {
    var that = this;
    wx.setNavigationBarTitle({
      title: '订单'
    });

    //设置foot菜单
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