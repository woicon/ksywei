// pages/carddetail/carddetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      nodes:{
          instructions:'<p style="line-height:1.6;font-size:14px;color:#666;margin-bottom:14px">生日礼包在京东会员首页（vip.jd.com）中的我的礼包里进行领取。</p><p style="line-height:1.6;font-size:14px;color:#666;margin-bottom:14px">银牌、金牌和钻石会员生日时，将有机会获得生日礼包（企业用户不发放）。去完善生日信息</p><p style="line-height:1.6;font-size:14px;color:#666;margin-bottom:14px">会员获得生日礼包需验证手机号码。去验证</p><p style="line-height:1.6;font-size:14px;color:#666;margin-bottom:14px">每位京东会员一个自然年内只能领取一次生日礼包，生日礼包有效期为15天，生日前7天开始发放。</p><p style="line-height:1.6;font-size:14px;color:#666;margin-bottom:14px">若有效期内未领取，不再补发生日礼包哦~</p><p style="line-height:1.6;font-size:14px;color:#666;margin-bottom:14px">生日礼包自2014年9月18日起开始发放，生日在9月26日之前的会员不再补发生日礼包哦</p>',
          information: '<p style="line-height:1.6;font-size:14px;color:#666;margin-bottom:14px">专享礼包：每月金牌和钻石会员有机会获得的礼包。</p><p style="line-height:1.6;font-size:14px;color:#666;margin-bottom:14px">发放对象：已实名认证成功且上月25日当天会员级别为金牌、钻石的会员</p><p style="line-height:1.6;font-size:14px;color:#666;margin-bottom:14px">每月初发放，礼包有效期为15天。领取专享礼包在京东会员首页（vip.jd.com）中的我的礼包里进行领取，礼包中运费券有效期为当月1-15日，其他优惠券有效期为礼包发放后的15天。</p>',
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
        title: '会员卡详情',
    });
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