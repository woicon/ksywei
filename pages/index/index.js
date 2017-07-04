// pages/index/index.js
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
  },
  callShop:function(){
      wx.makePhoneCall({
        phoneNumber: this.data.shopinfo.shoptel
      })
  },
  onLoad: function (options) {
    app.footBar();
    var that =this;
    wx.setNavigationBarTitle({
      title: '西少爷'
    });
    console.log(this.data.tabBar)
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  }
})