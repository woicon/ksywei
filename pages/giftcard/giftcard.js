// pages/giftcard/giftcard.js
var giftData = require('../../pages/giftcard/cardData.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
      giftCard: giftData,
      getGiftInfo:{
          userName:'王程',
          userImg:'../../pages/images/gifimg.jpg',
          cardDetail:{
              cardLimit:'666',
              cardTitle: 'you are amazing',
              cardImg: '../../cardImg/card05.jpg',
              cardCommentTxt:'特别的祝福给特别的你，祝：生日快乐好心情，一生幸福乐悠悠！',
              cardCommentImg:'',
          },
      }
  },
  closePop:function(){

  },

  selectCard:function(e){
    console.log(e);
    wx.navigateTo({
        url: '/pages/giftget/giftget?id='+e.currentTarget.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
        title: '礼品卡送朋友',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成8
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