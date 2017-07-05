var app = getApp();
Page({
    data: {
        topValue:0,
        select:false,
        valueList:[
            {
            value:'300',
            text:'充300送50',
            toggle:false,
            },
            {
                value: '500',
                text: '充500送100',
            },
            {
                value: '800',
                text: '充800送200',
            },
            {
                value: '2000',
                text: '充2000送200',
            },
            {
                value: '5000',
                text: '充5000送500',
            }
        ]
    },
    sendTop:function () {
        wx.showToast({
            title: '充值成功',
            icon: 'success',
            duration:4000,
            complete:function(){
                //wx.navigateBack();
            }
        })
    },
    setValue: function (e) {
        var _valueToggle = this.data.valueToggle;
        for (var i in _valueToggle){
            _valueToggle[i]=false;
        }
        _valueToggle[e.currentTarget.id]=true;
        this.setData({
            topValue: e.currentTarget.dataset.value,
            valueToggle: _valueToggle
        });
    },
    keyInput: function (e) {
        this.setData({
            topValue: e.detail.value
        });
    },
    onLoad: function (e) {
        var that = this;

        wx.setNavigationBarTitle({
            title: '个人中心'
        });
        var valueToggle = {};
        for (var i = 0;  i < that.data.valueList.length;i++){
           valueToggle[i] = false;
        }
        that.setData({
            valueToggle: valueToggle 
        });
        app.setTab();
        app.getUserInfo(function (userInfo) {
            that.setData({
                userInfo: userInfo,
            });
        });
        console.log(this.data);
    }
});