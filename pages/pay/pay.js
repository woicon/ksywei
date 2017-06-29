var app = getApp();
Page({
 data: {
    payAmount:"0",//支付的价格
    focus:true,
 },
 priceInner:function(e){
   console.log(wx)
   var newVal = this.data.payAmount;
   
    if (newVal.indexOf(".") > 0 && e.currentTarget.dataset.num=='.') {
        newVal = this.data.payAmount
     }else{
      newVal = this.data.payAmount += e.currentTarget.dataset.num;
     }
     this.setData({
       payAmount: newVal,
    });
     console.log(this.data.payAmount);
 },
 valTap:function(e){
   wx.hideKeyboard();
   this.setData({
     focus:true
   });
 },
 valFocus:function(){
   wx.hideKeyboard();
 },
 priceVal:function(e){
    this.setData({
      payAmount: this.data.payAmount
    });
 },
 setValue:function(e){
    console.log('12');
 },
 viewCard:function(){
   wx.openCard({
     cardList: [
       {
         cardId: '',
         code: ''
       }, {
         cardId: '',
         code: ''
       }
     ],
     success: function (res) {
     }
   });
 },
 //隐藏键盘
 hideKeyborad:function(){
   this.setData({
     focus:false
   });
 },
 delVal:function(){
   var payval = this.data.payAmount;
   var newVal = payval.substring(0, payval.length - 1);
   this.setData({
     payAmount: newVal
   });
   console.log(payval);
 },
onLoad: function (e) {
   var that = this;
    wx.hideKeyboard();
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo,
      });
    });
  }
});