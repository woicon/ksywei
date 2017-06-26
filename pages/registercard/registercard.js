// pages/order/order.js
Page({
  data: {
    cardid:'1923123213',
    codestat:true, //获取验证码状态
    endtime:30,    //获取验证码倒计时
  },
  //倒计时
  getverification:function(){

      if(this.data.codestat){
        var time = this.data.endtime;
        this.setData({
          codestat:false
        });
        for(let i=0;i<=time;i++){
          setTimeout((function callback(){
            this.setData({
              endtime: time - i
            });
            if (this.data.endtime==0){
              this.setData({
                codestat:true,
                endtime:30
              });
            }
          }).bind(this), i*1000);
        }
      }
  },

  onLoad: function (options) {
    console.log(options);
    var that = this;
    wx.setNavigationBarTitle({
      title: '免费领取会员卡'
    });
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