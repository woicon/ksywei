// pages/integral/integral.js
var app = getApp();
Page({
    data: {
        pageName:'getMemberPointsList',
        integral:[{
            type:'消费',
            time:'2017-06-12',
            number:'+4',
        }, {
            type: '消费',
            time: '2017-06-12',
            number: '+4',
            }, {
                type: '会员充值',
                time: '2017-06-12',
                number: '+4',
        }, {
            type: '邀请好友完成任务',
            time: '2017-06-12',
            number: '+5',
            }, {
                type: '在线支付',
                time: '2017-06-12',
                number: '+5',
        }, {
            type: '在线支付',
            time: '2017-06-12',
            number: '+5',
        }],
        color: app.globalData.color,
    },
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '我的积分',
        });
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: app.globalData.color,
        });
        
    },

    onReady: function () {

    },

    onShow: function () {

    },

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