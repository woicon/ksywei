// pages/giftget/giftget.js
var giftData = require('../../pages/giftcard/cardData.js');

Page({
    /**
     * 页面的初始数据
     */
    data: {
        total:0,
    },

    selectStyle:function(e){
        console.log(e.currentTarget.id);
        var _styleStat = this.data.styleStat;
        for(var i in _styleStat){
            _styleStat[i] = (i == e.currentTarget.id)?true:false;
        }
        this.setData({
            styleStat: _styleStat,
            styleId: e.currentTarget.id
        });
    },

    cartNumber:function(e){
        var that = this;
        var _numberList = that.data.numberList;
        var _currId = e.currentTarget.dataset.id;
        var total = Number(_numberList[_currId]);
        _numberList[_currId] = (e.target.dataset.id == 'add') ? total + 1 : total - 1;

        var totals = _numberList.reduce(function(prev,cur){
            return Number(prev) + Number(cur);
        });

        

        var _totalPrice = that.data.totalPrice;
        _totalPrice[_currId] = Number(that.data.giftData[that.data.currId].themeQuota[_currId]) * _numberList[_currId];

        var _allPrice = _totalPrice.reduce(function (prev, cur) {
            return Number(prev) + Number(cur);
        });
        
        that.setData({
            numberList:_numberList,
            total: totals, 
            totalPrice:_totalPrice,
            allPrice:_allPrice
        });
    },
    /**
     * 生命周期函数--监听页面加载
    */
    onLoad: function (options) {

        wx.showLoading({
            title: '加载中',
        });
       
        var styleStat= [],
            numberList=[];
        for (var i in giftData[options.id].themteStyle){
            styleStat.push(false);
        }
        for (var i in giftData[options.id].themeQuota) {
            numberList.push('0');
        }

        wx.setNavigationBarTitle({
            title: giftData[options.id].themeName,
        })


        styleStat[0]=true;
        var that = this;
        that.setData({
            currId:options.id,
            styleStat: styleStat,
            giftData: giftData,
            selectCard: giftData[0],
            numberList:numberList,
            totalPrice: numberList,
        });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
  onReady: function () {
    console.log('111');
    wx.hideLoading();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('22222');
    
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