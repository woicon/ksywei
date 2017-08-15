// pages/integral/integral.js
var app = getApp();
Page({
    data: {
        pageName:'getMemberPointsList',
        increaseType:['会员卡充值送','会员卡消费送','直接变更','开卡送','关注送','消费有礼送','充值有礼送'],
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
        var that = this;
        wx.setNavigationBarTitle({
            title: '我的积分',
        });
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: app.globalData.color,
        });
        app.getData('getMemberPointsList', 'POINTS', app.apiServer.parmas).then(function(res){
            console.log(res);
            that.setData({
                pointsList: res.pointsList
            })
            console.log(that.data)    
        });

        wx.getStorage({
            key: 'CARDINFO',
            success: function (res) {
                that.setData({
                    cardInfo: res
                });
            },
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