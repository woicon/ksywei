// pages/couponsdetail/couponsdetail.js
var app = getApp();
var code = require("../../utils/code.js");
Page({
  data: {
    coupon:null,
    couponStatus: ['未生效','可使用','已使用','已失效','已过期','已删除','已锁定'],
    couponType:['代金券','折扣券','兑换券','优惠券','团购券','单品代金券','会员卡','单品折扣'],
    toggle:[false,false],
    businessService:{
        BIZ_SERVICE_DELIVER:'外卖服务',
        BIZ_SERVICE_FREE_PARK:'停车位',
        BIZ_SERVICE_WITH_PET:'可带宠物',
        BIZ_SERVICE_FREE_WIFI:'免费wifi'
    }
  },
  toggleTap:function(e){
    var that = this;
    var _toggle = this.data.toggle;
    var stat = _toggle[e.currentTarget.dataset.id];
    _toggle[e.currentTarget.dataset.id] = !stat ;
    that.setData({
      toggle:_toggle
    });
  },

  onLoad: function (options) {
    var that = this;
    
    var parmas = {
        openId: app.apiServer.parmas.openId,
        couponNo: options.id || "900914208204184931"
    }
    wx.request({
        url:app.apiServer.host + 'couponDetail.htm',
        data: {
            json:parmas,
        },
        success: function (res) {
            wx.setNavigationBarColor({
                frontColor: '#ffffff',
                backgroundColor: res.data.coupon.cardTemplate.color,
            });
            wx.setNavigationBarTitle({
                title: res.data.coupon.cardTemplate.title,
            })
            var _businessService = res.data.coupon.cardTemplate.businessService;
            var businessService = _businessService.split(',');

            var size = code.size();

            that.setData({
                coupon: res.data.coupon.cardTemplate,
                color: res.data.coupon.cardTemplate.color,
                couponNo: res.data.coupon.couponNo,
                service: businessService,
                qrSize: size.w
            });
            
            
        }
    });
  },
  onReady: function () {
        var that = this;
        that.setData({
            pageloading: true
        });
        var qrcode = that.data.couoponNo || "900914208204184931";
        var size = that.data.qrSize;
        //绘制二维码与条形码
        code.qr(qrcode, "qrcodecav", size, size);
        code.bar(qrcode, "barcodecav", size, 40);
  },
    onShow: function () {
        console.log('2222222222222222222')
    },
    onHide: function () {

    },
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