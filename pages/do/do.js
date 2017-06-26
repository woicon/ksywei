//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    doList:{},
    toval:'',
    toggle:false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  noneVal:function(){
    wx.showToast({
      title: '请输入内容',
      icon:'',
      duration: 2000,
    })
  },
  
  addTodo:function(e){
    this.data.doList[e.timeStamp]={time:e.timeStamp,cont:this.data.toval};
      this.setData({
        doList:this.data.doList,
        toggle:false,
        toval:'',
      });
  },
  toggleAdd:function(){
      this.setData({
        toggle:true,
        toval:'',
      });
  },
  delItem:function(e){
      delete this.data.doList[e.currentTarget.id];
      this.setData({
        doList:this.data.doList
      });
  },
  inputVal:function(e){
    this.setData({
      toval:e.detail.value,
    });
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
