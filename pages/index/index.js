// pages/index/index.js
Page({
  data: {
    shopinfo:{ shopname:'西少爷肉夹馍北苑路北店',
                shopimg: '../../pages/images/usimg.jpg', 
                shoplocation:'北京市朝阳区北苑路北',
                shoptel:"18912312312"},
  },
  callShop:function(){
      wx.makePhoneCall({
        phoneNumber: this.data.shopinfo.shoptel
      })
  },
  onLoad: function (options) {
    var that =this;
    console.log(this.data.shopinfo);
    wx.setNavigationBarTitle({
      title: '西少爷'
    })
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