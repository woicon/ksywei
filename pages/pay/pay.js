var app = getApp();
Page({
    data: {
        payAmount:"",//支付的金额
        focus:true,//focus状态
        placeholder:true,//input默认文本状态
        vipcheck:false
    },

    //输入金额
    priceInner:function(e){
        var newVal = this.data.payAmount;
        console.log(newVal.substr(-3, 1));
        newVal = (newVal.indexOf(".") > 0 && e.currentTarget.dataset.num === '.' 
        || newVal.substr(-3, 1) === '.'
        || newVal.length > 8) ? newVal : newVal += e.currentTarget.dataset.num;
        
        
        if (newVal ==='.'){
            newVal='0.'
        }

        if (newVal === '00') {
            newVal = '0'
        }
        
        this.setData({
            payAmount: newVal,
            placeholder:false,
        });
    },

    //键盘显示
    valTap:function(e){
        this.setData({
            focus:true
        });
    },

    //隐藏键盘
    hideKeyborad: function () {
        this.setData({
            focus: false
        });
    },

    //跳转到充值
    topUp:function () {
        wx.navigateTo({
            url: '/pages/topup/topup',
        })
    },

    //切换支付方式
    checktap:function(){
        var checkstat = this.data.vipcheck;
        var stat = !checkstat?true:false;
        this.setData({
            vipcheck: stat
        });
    },

    //金额回退
    delVal:function(){
        var payval = this.data.payAmount;
        var newVal = payval.substring(0, payval.length - 1);
        var _placeholder = (newVal === '')?true:false;
        this.setData({
            payAmount: newVal,
            placeholder: _placeholder
        });
    },
    
    //微信支付
    requestPayment:function(e){
        wx.requestPayment({
            'timeStamp':'',
            'nonceStr': '',
            'package': '',
            'signType': 'MD5',
            'paySign': '',
            'success': function (res) {
            },
            'fail': function (res) {
            }
        })
    },

    //会员支付
    vipPayment:function () {

    },

    onLoad: function (e) {
        var that = this;
        app.getUserInfo(function(userInfo){
            that.setData({
                userInfo:userInfo,
            });
        });
        wx.setNavigationBarTitle({
            title: '买单',
        });
    }
});