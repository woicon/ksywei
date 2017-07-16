// pages/pay/paycomplete/paycomplete.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    comment:{},
    starStat:{},
    submitComment:{
        commentStar:null,
        'commentContent':''
    },
    selectTags:[],
    starItem:[
        {star:1,txt:'很差'},
        {star:2,txt: '一般'},
        {star:3,txt: '满意'},
        {star:4,txt: '非常满意'},
        {star:5,txt:'很完美，无可挑剔'}
    ],
    commentTag:[
        '好吃',
        '好吃又美味',
        '根本停不下来',
        '干净',
        '环境很好',
        '美中不足',
    ],
    couponlist: {
        "coupons": [
            {
                "couponNo": "90685494123123123552",
                "couponName": "流程21元代金券",
                "couponStatus": 1,
                "couponType": 5,
                "getDate": "20170614 13:24:01",
                "reduceCost": 12,
                "leastCost": 1,
                "beginTime": "20170614 13:22:07",
                "endTime": "20170714 13:22:07",
                "giveFriend": 1,
                "notice": "请在结账时出示给服务员",
                "description": "本优惠券不可兑换现金，不可找零。",
                "servicePhone": "",
                "merchantId": 10104677,
                "merchantName": "收款小精灵",
                "logo": "http://open.liantuobank.cn/assets/images/wechat.png",
                "color": "#FF9374",
                "syncWechat": 0,
                "wechatCardId": "pdest9w8jlngxvDybO1qGaURiNY"
            },
            {
                "couponNo": "906",
                "couponName": "流程21元代金券",
                "couponStatus": 5,
                "couponType": 5,
                "getDate": "20170614 13:24:01",
                "reduceCost": 5,
                "leastCost": 1,
                "beginTime": "20170614 13:22:07",
                "endTime": "20170714 13:22:07",
                "giveFriend": 1,
                "notice": "请在结账时出示给服务员",
                "description": "本优惠券不可兑换现金，不可找零。",
                "servicePhone": "",
                "merchantId": 10104677,
                "merchantName": "收款小精灵",
                "logo": "http://open.liantuobank.cn/assets/images/wechat.png",
                "color": "#FFC160",
                "syncWechat": 0,
                "wechatCardId": "pdest9w8jlngxvDybO1qGaURiNY"
            }
        ],
        "returnCode": "S",
        "returnMessage": "操作成功"
    },

  },
  //tag 选择标签
  selectTag:function(e){
    var _submitComment = this.data.submitComment;
    var _commentContent = _submitComment['commentContent'];
    var _commentTag = e.target.dataset.tag;

    _submitComment['commentContent'] = _commentContent += e.target.dataset.tag += ',';

    var __tagStat= this.data.tagStat;
    var _index = e.target.dataset.index;
    __tagStat[_index] = __tagStat[_index]?false:true;

    //var _selectTag = this.data.selectTag;
    // stat ? selectTag.push(_commentTag):'';
    console.log(__tagStat);
    this.setData({
        submitComment: _submitComment,
        tagStat: __tagStat
    });

  },
  //评分 选择评分
    setStars:function(e){
        var _starStat = {};
        for (var i=0; i < e.currentTarget.dataset.allstar;i++){
            _starStat[i] = false;
        }
        var selectStar = e.target.dataset.star;
        for (var i=0; i <= selectStar;i++){
            _starStat[i]=true;
        }
        this.setData({
            commentStar: e.target.dataset.star,
            starStat: _starStat,
        });
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    app.setBarColr();
    wx.setNavigationBarTitle({
        title: '支付成功',
    })
    //评价tag状态
    var _tagStat = {};
    var _commentTag = that.data.commentTag;

    for (var i= 0;i<= _commentTag.length;i++){
        _tagStat[i] = false;
    }
    that.setData({
        tagStat: _tagStat
    });



    //设置评分星状态
    // var _starItem = [];
    // for(var i=1;i<=that.data.starNumber;i++){
    //     _starItem.push(i);
    // }
    // that.setData({
    //     starItem: _starItem
    // });
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