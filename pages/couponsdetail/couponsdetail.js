// pages/couponsdetail/couponsdetail.js
var app = getApp();
var QR = require("../../utils/qrcode.js");
var BR = require('../../utils/barcode.js');
Page({
  data: {
        coupon:null,
        couponStatus: ['未生效','可使用','已使用','已失效','已过期','已删除','已锁定'],
        couponType:['代金券','折扣券','兑换券','优惠券','团购券','单品代金券','会员卡','单品折扣'],
        businessService:{
            BIZ_SERVICE_DELIVER:'外卖服务',
            BIZ_SERVICE_FREE_PARK:'停车位',
            BIZ_SERVICE_WITH_PET:'可带宠物',
            BIZ_SERVICE_FREE_WIFI:'免费wifi'
        }
  },
  //适配不同屏幕大小的canvas
  setCanvasSize: function () {
      var that = this;
      var size = {};
      try {
          var res = wx.getSystemInfoSync();
          var scale = 750 / 520;//不同屏幕下canvas的适配比例；
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
      //绘制二维码图片
      QR.qrApi.draw(url, canvasId, cavW, cavH);
  },
  createBarCode: function (code,id,width, height){
      //绘制条形码图片
      BR.code128(wx.createCanvasContext(id), code, width, height)
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
    var that = this;
    
    var parmas = {
        openId: app.apiServer.parmas.openId,
        couponNo: options.id || "909904101945614509"
    }
    wx.request({
        url:app.apiServer.host + 'couponDetail.htm',
        data: {
            json:parmas,
        },
        success: function (res) {
            console.log(res.data);
            wx.setNavigationBarColor({
                frontColor: '#ffffff',
                backgroundColor: res.data.coupon.cardTemplate.color,
            });
            wx.setNavigationBarTitle({
                title: res.data.coupon.cardTemplate.title,
            })
            var _businessService = res.data.coupon.cardTemplate.businessService;
            var businessService = _businessService.split(',');
            var qrcode = options.id || "909904101945614509";
            var size = that.setCanvasSize();
            //绘制二维码与条形码
            that.createQrCode(qrcode, "qrcodecav", size.w, size.h);
            that.createBarCode(qrcode, "barcodecav", size.w, 60);

            that.setData({
                coupon: res.data.coupon.cardTemplate,
                color: res.data.coupon.cardTemplate.color,
                couponNo: res.data.coupon.couponNo,
                service: businessService,
            });

            
        }
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
    console.log('11111111111111111')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      console.log('2222222222222222222')
      var that = this;
      that.setData({
          pageloading:true
      });
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