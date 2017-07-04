//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          });
        }
      })
    }
  },
  footBar: function () {
      var _curPageArr = getCurrentPages();
      var _curPage = _curPageArr[_curPageArr.length - 1];
      var _pagePath = _curPage.__route__;
      if (_pagePath.indexOf('/') != 0) {
          _pagePath = '/' + _pagePath;
      }
      var tabBar = this.globalData.tabBar;
      for (var i = 0; i < tabBar.list.length; i++) {
          tabBar.list[i].active = false;
          if (tabBar.list[i].pagePath == _pagePath) {
              tabBar.list[i].active = true;//根据页面地址设置当前页面状态  
          }
      }
      _curPage.setData({
          tabBar: tabBar
      });
  },
  globalData:{
    userInfo:null,
    tabBar: {
        "list": [
            {
                "pagePath": "/pages/index/index",
                "text": "主页",
                "iconPath": "home",
                "selectedIconPath": "home-s",
                active: true
            },
            {
                "pagePath": "/pages/order/order",
                "text": "订单",
                "iconPath": "order",
                "selectedIconPath": "order-s",
                active: false
            },
            {
                "pagePath": "/pages/coupons/coupons",
                "text": "优惠券",
                "iconPath": "coup",
                "selectedIconPath": "coup-s",
                active: false
            },
            {
                "pagePath": "/pages/member/member",
                "text": "我的",
                "iconPath": "user",
                "selectedIconPath": "user-s",
                active: false
            }
        ],
        "position": "bottom"
    }
  }
});
