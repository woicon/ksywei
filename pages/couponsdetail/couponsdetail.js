// pages/couponsdetail/couponsdetail.js
var app = getApp();
var QR = require("../../utils/qrcode.js");
Page({
  data: {
        coupon:null,
        couponStatus: ['未生效','可使用','已使用','已失效','已过期','已删除','已锁定'],
        couponType:['代金券','折扣券','兑换券','优惠券','团购券','单品代金券','会员卡','单品折扣'],
  },
  //适配不同屏幕大小的canvas
  setCanvasSize: function () {
      var that = this;
      var size = {};
      try {
          var res = wx.getSystemInfoSync();
          var scale = 750 / 550;//不同屏幕下canvas的适配比例；设计稿是750宽
          var width = res.windowWidth / scale;
          var height = width;//canvas画布为正方形
          size.w = width;
          size.h = height;
            that.setData({
                qrSize:width
            });
      } catch (e) {
          console.log("获取设备信息失败" + e);
      }
      return size;
  },
  createQrCode: function (url, canvasId, cavW, cavH) {
      //调用插件中的draw方法，绘制二维码图片
      QR.qrApi.draw(url, canvasId, cavW, cavH);
  },
  //获取临时缓存照片路径，存入data中
  canvasToTempImage: function () {
      var that = this;
      wx.canvasToTempFilePath({
          canvasId: 'mycanvas',
          success: function (res) {
              var tempFilePath = res.tempFilePath;
              console.log("********" + tempFilePath);
              that.setData({
                  imagePath: tempFilePath,
              });
          },
          fail: function (res) {
              console.log(res);
          }
      });
  },
  onLoad: function (options) {
    console.log(options);
    wx.showLoading({
        title: '加载中',
    });
    var that = this;
    
    var parmas = {
        openId: app.apiServer.parmas.openId,
        couponNo: options.id ||'901125035584964349'
    }
    wx.request({
        url:app.apiServer.host + 'couponDetail.htm',
        data: {
            json:parmas,
        },
        success: function (res) {
            console.log(res.data);
            // wx.setStorage({
            //     key: "COUPONS",
            //     data: res.data
            // });
            that.setData({
                coupon: res.data.coupon.cardTemplate,
                color: res.data.coupon.cardTemplate.color
            });

            var qrcode = options.id || '901125035584964349';
            var size = that.setCanvasSize();
            //绘制二维码
            that.createQrCode(qrcode, "mycanvas", size.w, size.h);
            console.log(that.data.coupon);
        }
    });

    wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor:that.data.color,
    });

    // wx.getStorage({
    //     key: 'COUPONS',
    //     success: function (res) {
    //         console.log(res.data.items[0]);
    //         that.setData({
    //             coupon: res.data.items[0].cardTemplate
    //         });
    //     },
    // });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideLoading();
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