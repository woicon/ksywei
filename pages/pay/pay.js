var app = getApp();
Page({
 data: {
    payAmount:"0",//支付的价格
    focus:false,
    keyborderStat:true,
 },
 priceInner:function(e){
   this.data.payAmount += e.currentTarget.dataset.num;
     this.setData({
        payAmount:this.data.payAmount,
    });
    console.log(this.data.payAmount);
    this.priceVal();
 },
 priceVal:function(e){
   if (this.focus){
     wx.hideKeyboard();//隐藏键盘
   }
    this.setData({
      payAmount:e.detail.value
    });
 },
 setValue:function(e){

 },
 //隐藏键盘
 hideKeyborad:function(){
   var stat = this.data.keyborderStat?false:true;
   
   this.setData({
     keyborderStat:stat
   });
   console.log(this.data.keyborderStat);
 },
onLoad: function () {
   var that = this;
  //  console.log(that.focus);
  //  if (that.focus) {
  //    wx.hideKeyboard();//隐藏键盘
  //  }
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo,
      });
    });
  }
})